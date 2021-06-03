const remarkDirective = require('remark-directive');
const visit = require('unist-util-visit');

const onContainerDirectiveVisit = (node) => {
  const data = node.data || (node.data = {});
  const hProperties = data.hProperties || (data.hProperties = {});
  const classes = hProperties.class || (hProperties.class = []);

  classes.push('custom-container', `custom-container-${node.name}`);

  if (!node.children?.[0]?.data?.directiveLabel) {
    node.children.unshift({
      type: 'paragraph',
      data: {
        directiveLabel: true,
      },
      children: [{ type: 'text', value: node.name }],
    });
  }

  if (node.name === 'details') {
    data.hName = 'details';
    node.children[0].data.hName = 'summary';
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'containerDirective', onContainerDirectiveVisit);
};

module.exports.setParserPlugins = () => [remarkDirective];
