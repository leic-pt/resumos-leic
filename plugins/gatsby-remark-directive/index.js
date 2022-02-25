const remarkDirective = require('remark-directive');
const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');

const options = {
  customComponentsTags: ['info', 'tip', 'warning', 'danger', 'details'],
  tabGroupTag: 'tab-group',
  tabTag: 'tab',
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

  if (node.name === 'details') {
    data.hName = 'details';
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

const onTabGroupVisit = (node) => {
  const tabTitles = [];
  const nodeData = node.data || (node.data = {});
  const nodeHProperties = nodeData.hProperties || (nodeData.hProperties = {});
  const nodeClasses = nodeHProperties.class || (nodeHProperties.class = []);

  nodeClasses.push('tab-group');

  node.children
    ?.filter((child) => child.type === 'containerDirective' && child.name === options.tabTag)
    .forEach((tab) => {
      const data = tab.data || (tab.data = {});
      const hProperties = data.hProperties || (data.hProperties = {});
      const classes = hProperties.class || (hProperties.class = []);

      classes.push('tab-group--tab');
      if (tabTitles.length === 0) classes.push('tab-group--tab__active');

      if (tab.children?.[0]?.data?.directiveLabel) {
        tabTitles.push(toString(tab.children[0]));
        tab.children.shift();
      } else {
        tabTitles.push(`Tab ${tabTitles.length + 1}`);
      }
    });

  node.children?.unshift({
    type: 'html',
    value: `
    <div class="tab-group--nav">
      <ul class="tab-group--ul">
        ${tabTitles
          .map(
            (title, i) => `
        <li class="tab-group--li">
          <button class="tab-group--btn${i === 0 ? ' tab-group--btn__active' : ''}">
            ${title}
          </button>
        </li>
        `
          )
          .join('')}
      </ul>
    </div>
    `,
  });
};

const onYoutubeVisit = (node) => {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const id = attributes.id;
  const children = node.children || (node.children = []);
  const hProperties = data.hProperties || (data.hProperties = {});
  const classes = hProperties.class || (hProperties.class = []);

  data.hName = 'div';
  classes.push('video-wrapper-16-9');

  children.push({
    type: 'youtubeEmbed',
    attributes: {
      videoId: id,
    },
    data: {
      hName: 'iframe',
      hProperties: {
        src: 'https://www.youtube.com/embed/' + id,
        width: 560,
        height: 315,
        frameBorder: 0,
        allow: 'picture-in-picture',
        allowFullScreen: true,
      },
    },
  });
};

const onContainerDirectiveVisit = (node) => {
  if (options.customComponentsTags.indexOf(node.name) !== -1) onCustomComponentVisit(node);
  else if (node.name === options.tabGroupTag) onTabGroupVisit(node);
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
