const { graphql } = require('@octokit/graphql');
const defaultContributors = require('../../contributors');

// mutates `contributors`
function mergeContributors(contributors, pullRequests) {
  pullRequests
    .filter(({ author }) => !!author.login)
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

function mergeContributorsFromCache(contributors, cachedContributors) {
  cachedContributors.forEach(({ name, username, labels }) => {
    const contributor = contributors[username] || (contributors[username] = {});
    const labelSet = contributor.labels || (contributor.labels = new Set());

    labels?.filter((label) => !!label.name).forEach((label) => labelSet.add(label.name));

    if (!contributor.name) {
      contributor.name = name;
    }
  });
}

exports.sourceNodes = async ({
  actions,
  cache,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode, touchNode } = actions;

  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    console.info('No GitHub token found (GITHUB_TOKEN env var), skipping contributors list');

    // persist cached nodes between runs
    getNodesByType('Contributor').forEach((node) => touchNode(node));
    return;
  }

  const graphqlGh = graphql.defaults({
    headers: {
      authorization: `bearer ${githubToken}`,
    },
  });

  const contributors = defaultContributors.getDefaultContributors();

  const githubMetadata = getNodesByType('Site')?.[0]?.siteMetadata?.github;
  if (!githubMetadata) {
    throw new Error('Failed to get github metadata from site metadata');
  }
  const { owner, repository: repoName } = githubMetadata;

  const lastUpdated = await cache.get('lastUpdated');
  mergeContributorsFromCache(contributors, getNodesByType('Contributor'));
  await cache.set('lastUpdated', Date.now());

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

  Object.entries(contributors).forEach(([username, contributor]) => {
    const data = {
      username,
      ...contributor,
      name: contributor.name || username,
      labels: [...(contributor.labels || [])],
    };

    createNode({
      ...data,
      id: createNodeId(data.username),
      internal: {
        type: 'Contributor',
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Contributor implements Node {
      name: String!
      username: String!
      labels: [String]
      additionalLabels: [String]
      boldLabels: [String]
    }
  `;
  createTypes(typeDefs);
};
