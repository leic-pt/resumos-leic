const { graphql } = require('@octokit/graphql');

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
    return;
  }

  const graphqlGh = graphql.defaults({
    headers: {
      authorization: `bearer ${githubToken}`,
    },
  });

  const contributors = {};

  // TODO cache old pagination
  // const lastUpdated = await cache.get("lastUpdated")
  // // 30 days cache
  // if (lastUpdated > Date.now() - 1000 * 60 * 60 * 24 * 30) {
  // getNodesByType("Space").forEach(node => touchNode(node))
  // return
  // }

  // await cache.set("lastUpdated", Date.now())

  const getPullRequests = async (cursor) => {
    const { repository } = await graphqlGh(`
      query fetchPullRequests($cursor: String) {
        repository(owner: "leic-pt", name: "resumos-leic") {
          pullRequests(first: 10, after: $cursor, states: [MERGED], orderBy: {field: UPDATED_AT, direction: DESC}) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              updatedAt
              labels (first: 50) {
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
      }`);

    return repository?.pullRequests;
  };

  mergeContributors(contributors, (await getPullRequests(null)).nodes);

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
