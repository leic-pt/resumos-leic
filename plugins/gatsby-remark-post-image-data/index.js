const visit = require('unist-util-visit');

const onImageVisit = (node) => {
  const data = node.data || {};

  if (data.remarkPreImages) {
    if (node.value.startsWith('<span\n      class="gatsby-resp-image-wrapper"')) {
      node.value = node.value.replace(
        '<span',
        `<span ${Object.entries(data.hProperties)
          .map(([k, v]) => `${k}="${v.replace(/"/g, `\\"`)}"`)
          .join(' ')}`
      );
    }
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', onImageVisit);
};
