import { graphql } from '@octokit/graphql';
import type { PullRequest, Repository } from '@octokit/graphql-schema';
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { siteConfig } from '../config.ts';
import { getDefaultContributors } from './contributors.default';

interface Contributor {
  username: string;
  name: string;
  labels: string[];
  additionalLabels?: string[];
  boldLabels: string[];
}

type PartialContributor = Partial<Omit<Contributor, 'labels'>> & { labels?: Set<string> };
type Contributors = Record<string, PartialContributor>;

export function contributorsLoader() {
  return {
    name: "contributors-loader",
    load: async (context) => {
      const { logger, meta } = context;
      const githubToken = process.env.GITHUB_TOKEN;
      if (!githubToken) {
        logger.info('No GitHub token found (GITHUB_TOKEN env var), skipping contributors list');
        return;
      }

      logger.info('Fetching contributors from GitHub');

      const graphqlGh = graphql.defaults({
        headers: {
          authorization: `bearer ${githubToken}`,
        },
      });

      const contributors: Contributors = getDefaultContributors();

      const { owner, repository: repoName } = siteConfig.github;

      const lastUpdatedStr = meta.get('lastUpdated');
      const lastUpdated = lastUpdatedStr ? new Date(lastUpdatedStr) : null;
      meta.set('lastUpdated', new Date().toISOString());

      const getPullRequests = async (cursor: string | null) => {
        const { repository } = await graphqlGh<{ repository: Repository }>(`
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

      let requestCount = 0;
      let lastResponse = null;
      do {
        requestCount += 1;
        lastResponse = await getPullRequests(lastResponse?.pageInfo?.endCursor ?? null);
        mergeContributors(contributors, lastResponse.nodes ?? []);
      } while (
        lastResponse.pageInfo?.hasNextPage &&
        (!lastUpdated || lastUpdated <= new Date(lastResponse?.nodes?.at(-1)?.updatedAt))
      );

      Object.entries(contributors).forEach(([username, contributor]) => {
        saveContributor(context, username, contributor);
      });

      logger.info(`Finished fetching contributors; made ${requestCount} request(s) to GitHub`)
    },
    schema: z.object({
      username: z.string(),
      name: z.string(),
      labels: z.array(z.string()),
      additionalLabels: z.array(z.string()).optional(),
      boldLabels: z.array(z.string()),
    }),
  } satisfies Loader;
}

// mutates `contributors`
function mergeContributors(contributors: Contributors, pullRequests: (PullRequest | null)[]) {
  pullRequests
    .filter(pr => !!pr)
    .forEach(pr => {
      const author = pr?.author;
      const login = author?.login;
      if (!login) {
        return;
      }

      const contributor = (contributors[login] ??= {});
      const labelSet = (contributor.labels ??= new Set());

      pr.labels?.nodes?.filter((label) => !!label?.name).forEach((label) => labelSet.add(label?.name ?? ''));

      if (!contributor.name && 'name' in author && author?.name) {
        contributor.name = author?.name;
      }
    });
}

// mutates `contributor`
async function saveContributor({ store, parseData, generateDigest }: LoaderContext, username: string, contributor: PartialContributor) {
  let labelSet = (contributor.labels ??= new Set());

  let cachedContributor = store.get(username);
  if (cachedContributor) {
    const data = cachedContributor.data as unknown as Contributor;
    (data.labels ?? []).forEach(label => labelSet.add(label));
  }

  const item = {
    username,
    name: contributor.name || cachedContributor?.data?.name || username,
    labels: [...labelSet],
    additionalLabels: contributor.additionalLabels,
    boldLabels: contributor.boldLabels ?? [],
  };

  const data = await parseData({ id: username, data: item });
  const digest = generateDigest(data)
  store.set({ id: username, data, digest });
}
