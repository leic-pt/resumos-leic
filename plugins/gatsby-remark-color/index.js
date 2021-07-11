const remarkDirective = require('remark-directive');
const visit = require('unist-util-visit');

const onTextVisit = (node) => {
  if (node.url?.startsWith('color:')) {
    // handle custom colors
    node.type = 'paragraph';

    const data = node.data || (node.data = {});
    const hProperties = data.hProperties || (data.hProperties = {});
    const classes = hProperties.class || (hProperties.class = []);

    classes.push(`md-color--${node.url.replace('color:', '')}`);
    data.hName = 'span';
  }
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', onTextVisit);
};

module.exports.setParserPlugins = () => [remarkDirective];
