const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');
const fs = require('fs-extra');

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
            id
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
    if (!node.frontmatter.path) return;

    createPage({
      path: node.frontmatter.path,
      component: templates[node.frontmatter.template || 'default'],
      context: {
        markdownRemarkId: node.id,
        pathRegex: `/^\\/${node.frontmatter.path.split(`/`)[1]}(?:$|\\/)/`,
      }, // additional data can be passed via context
    });
  });
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    File: {
      dataURI: {
        type: 'String',
        async resolve(parent) {
          if (parent.extension === 'svg' && parent.sourceInstanceName === 'content') {
            const svg = await fs.readFile(parent.absolutePath, 'utf8');
            return svgToMiniDataURI(svg);
          }

          return null;
        },
      },
    },
  };

  createResolvers(resolvers);
};
