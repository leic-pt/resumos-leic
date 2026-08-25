import { graphql } from '@octokit/graphql';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getDefaultContributors } from '../src/data/contributors.default.mjs';

// Owner/repo, single-sourced from package.json (importing src/config.ts would
// require Node's TS type-stripping, unavailable on older CI runners).
const { repository } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);
const [, owner, repositoryName] = /github\.com\/([^/]+)\/([^/]+)/.exec(repository);
const { owner: githubOwner, repository: githubRepository } = {
  owner,
  repository: repositoryName,
};

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const cachePath = join(repoRoot, 'data/.contributors-cache.json');
const contributorsPath = join(repoRoot, 'src/data/contributors.json');

function writeJsonFile(filePath, value) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function readCache() {
  if (!existsSync(cachePath)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(cachePath, 'utf8'));
  } catch {
    return null;
  }
}

// mutates `contributors`
function mergeContributors(contributors, pullRequests) {
  pullRequests
    .filter(({ author }) => !!author?.login)
    .forEach(({ author, labels }) => {
      const { name, login } = author;
      const contributor = contributors[login] || (contributors[login] = {});
      const labelSet = contributor.labels || (contributor.labels = new Set());

      labels.nodes.filter((label) => !!label.name).forEach((label) => labelSet.add(label.name));

      if (!contributor.name) {
        contributor.name = name;
      }
    });
}

// mutates `contributors`
function mergeContributorsFromCache(contributors, cachedContributors) {
  cachedContributors.forEach(({ name, username, labels }) => {
    const contributor = contributors[username] || (contributors[username] = {});
    const labelSet = contributor.labels || (contributor.labels = new Set());

    labels?.forEach((label) => labelSet.add(label));

    if (!contributor.name) {
      contributor.name = name;
    }
  });
}

function toContributorData(contributors) {
  return Object.entries(contributors).map(([username, contributor]) => ({
    username,
    ...contributor,
    name: contributor.name || username,
    labels: [...(contributor.labels || [])],
  }));
}

const githubToken = process.env.GITHUB_TOKEN;
if (!githubToken) {
  console.info('No GitHub token found (GITHUB_TOKEN env var), skipping contributors list');

  writeJsonFile(contributorsPath, toContributorData(getDefaultContributors()));
} else {
  const graphqlGh = graphql.defaults({
    headers: {
      authorization: `bearer ${githubToken}`,
    },
  });

  const contributors = getDefaultContributors();
  const owner = githubOwner;
  const repoName = githubRepository;

  const cache = readCache();
  const lastUpdated = cache?.lastUpdated ?? null;
  mergeContributorsFromCache(contributors, cache?.contributors ?? []);
  const newLastUpdated = Date.now();

  const getPullRequests = async (cursor) => {
    const { repository } = await graphqlGh(
      `
      query fetchPullRequests($cursor: String, $owner: String!, $repository: String!) {
        repository(owner: $owner, name: $repository) {
          pullRequests(
            first: 25
            after: $cursor
            states: [MERGED]
            orderBy: {field: UPDATED_AT, direction: DESC}
          ) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              updatedAt
              labels(first: 50) {
                nodes {
                  name
                }
              }
              author {
                ... on User {
                  name
                  login
                }
              }
            }
          }
        }
      }`,
      {
        cursor,
        owner,
        repository: repoName,
      }
    );

    return repository?.pullRequests;
  };

  let lastResponse = null;
  do {
    lastResponse = await getPullRequests(lastResponse?.pageInfo?.endCursor ?? null);
    mergeContributors(contributors, lastResponse.nodes);
  } while (
    lastResponse.pageInfo?.hasNextPage &&
    (!lastUpdated || lastUpdated <= new Date(lastResponse.nodes.at(-1)?.updatedAt))
  );

  const contributorsData = toContributorData(contributors);
  writeJsonFile(cachePath, { lastUpdated: newLastUpdated, contributors: contributorsData });
  writeJsonFile(contributorsPath, contributorsData);
}
