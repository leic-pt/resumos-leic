const remarkDirective = require('remark-directive');
const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');

const options = {
  customComponentsTags: ['info', 'tip', 'warning', 'danger', 'details'],
  detailsGroupTag: 'details-group',
  youtubeTag: 'youtube',
};

const onCustomComponentVisit = (node) => {
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
  data.hName = node.name;
  node.children[0].data.hName = 'alert-title';

  if (node.name === 'details') {
    const containerLabel = node.children.shift();
    containerLabel.data.hName = 'details-summary';

    // Move node children into wrapped container
    node.children = [
      containerLabel,
      {
        type: 'paragraph',
        data: {
          hName: 'details-content',
        },
        children: node.children,
      },
    ];
  }
};

const onDetailsGroupVisit = (node) => {
  const data = node.data || (node.data = {});
  data.hName = 'details-group';

  node.children?.forEach((child) => {
    if (child.name === 'details' && child.type === 'containerDirective') {
      const childData = child.data || (child.data = {});
      const hProperties = childData.hProperties || (childData.hProperties = {});
      hProperties.withoutWrapper = '1';
    }
  });
};

const onYoutubeVisit = (node) => {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const id = attributes.id;
  const children = node.children || (node.children = []);
  const hProperties = data.hProperties || (data.hProperties = {});

  data.hName = 'iframe-embed';
  hProperties.src = 'https://www.youtube.com/embed/' + id;
  hProperties.width = 560;
  hProperties.height = 315;
  hProperties.frameBorder = 0;
  hProperties.allow = 'picture-in-picture';
  hProperties.allowFullScreen = true;
};

const onContainerDirectiveVisit = (node) => {
  if (options.customComponentsTags.indexOf(node.name) !== -1) onCustomComponentVisit(node);
  else if (node.name === options.detailsGroupTag) onDetailsGroupVisit(node);
  else if (node.name === options.youtubeTag) onYoutubeVisit(node);
};

const onLeafDirectiveVisit = (node) => {
  if (node.name === options.youtubeTag) onYoutubeVisit(node);
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'containerDirective', onContainerDirectiveVisit);
  visit(markdownAST, 'leafDirective', onLeafDirectiveVisit);
};

module.exports.setParserPlugins = () => [remarkDirective];
