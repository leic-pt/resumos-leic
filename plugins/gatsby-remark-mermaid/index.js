const visit = require('unist-util-visit');

const onTextVisit = (node) => {
  node.type = 'paragraph';
  node.children = [{ type: 'text', value: node.value }];

  const data = node.data || (node.data = {});
  const hProperties = data.hProperties || (data.hProperties = {});
  const classes = hProperties.class || (hProperties.class = []);

  classes.push(`mermaid`);
  data.hName = 'div';

  delete node.value;
  delete node.meta;
  delete node.lang;
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, { type: 'code', lang: 'mermaid' }, onTextVisit);
};
