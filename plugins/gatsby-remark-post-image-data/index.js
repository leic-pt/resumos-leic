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

const onImageVisit = (node) => {
  if (node.url?.endsWith('.svg')) {
    const data = node.data || (node.data = {});
    const hProperties = data.hProperties || (data.hProperties = {});

    // Use "object" element instead of "img"
    // See https://github.com/leic-pt/resumos-leic/issues/851
    data.hName = 'object';
    hProperties.data = node.url;
    hProperties.type = 'image/svg+xml';
    hProperties.onload = 'window.swapObjectByInlineSvg?.(this);';
    node.type = 'object';
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', onHtmlImageVisit);
  visit(markdownAST, 'image', onImageVisit);
};
