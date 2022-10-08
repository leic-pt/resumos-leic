const visit = require('unist-util-visit');

const onImageVisit = (node) => {
  const data = node.data || (node.data = {});
  const hProperties = data.hProperties || (data.hProperties = {});

  if (data.preImageDataAlreadyVisited) {
    return;
  }

  if (node.url) {
    const splits = node.url.split('#');
    if (splits.length > 1) {
      const properties = splits.pop();
      properties.split(';').forEach((prop) => {
        const [k, v] = prop.split('=');
        hProperties[`data-${k}`] = v;
      });
      node.url = splits.join('#');
      data.remarkPreImages = true;
    }

    // SVGs don't get their captions set automatically, so manually create them
    const isSvg = splits[0].endsWith('.svg');
    if (isSvg && node.title) {
      data.preImageDataAlreadyVisited = true;
      const nodeCopy = { ...node };
      node.type = 'figure';
      node.data = {
        hName: 'figure',
      };
      node.children = [
        nodeCopy,
        {
          type: 'figureCaption',
          data: {
            hName: 'figcaption',
          },
          children: [
            {
              type: 'text',
              value: node.title,
            },
          ],
        },
      ];
    }
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'image', onImageVisit);
};
