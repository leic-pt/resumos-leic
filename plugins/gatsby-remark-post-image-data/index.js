const visit = require('unist-util-visit');

const onHtmlImageVisit = (node) => {
  const data = node.data || {};

  if (data.remarkPreImages) {
    if (node.value.includes('class="gatsby-resp-image-wrapper"')) {
      node.value = node.value.replace(
        'class="gatsby-resp-image-wrapper"',
        `class="gatsby-resp-image-wrapper" ${Object.entries(data.hProperties)
          .map(([k, v]) => `${k}="${v.replace(/"/g, `\\"`)}"`)
          .join(' ')}`
      );
    }
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', onHtmlImageVisit);
};
