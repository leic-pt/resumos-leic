const visit = require('unist-util-visit');

const onImageVisit = (node) => {
  const data = node.data || (node.data = {});
  const hProperties = data.hProperties || (data.hProperties = {});

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
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'image', onImageVisit);
};
