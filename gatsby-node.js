const path = require('path');
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const templates = {
    default: path.resolve(`src/components/PageLayout.js`),
    homepage: path.resolve(`src/components/HomePageLayout.js`),
  };
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: templates[node.frontmatter.template || 'default'],
      context: {
        pathRegex: `/^\\/${node.frontmatter.path.split(`/`)[1]}(?:$|\\/)/`,
      }, // additional data can be passed via context
    });
  });
};
