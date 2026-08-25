import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { Data, Node, Root } from 'mdast';
import type { Plugin } from 'unified';

interface DirectiveData extends Data {
  hName?: string;
  hProperties?: Record<string, unknown>;
  directiveLabel?: boolean;
}

interface DirectiveChild extends Node {
  name?: string;
  attributes?: Record<string, string>;
  children?: DirectiveChild[];
  data?: DirectiveData;
  value?: string;
}

interface DirectiveNode extends DirectiveChild {
  name: string;
  attributes?: Record<string, string>;
}

interface ContainerDirectiveNode extends DirectiveNode {
  type: 'containerDirective';
  children: DirectiveChild[];
}

interface LeafDirectiveNode extends DirectiveNode {
  type: 'leafDirective';
}

const options = {
  customComponentsTags: ['info', 'tip', 'warning', 'danger', 'details'],
  tabGroupTag: 'tab-group',
  tabTag: 'tab',
  youtubeTag: 'youtube',
};

type MutableData = {
  hName?: string;
  hProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

const getClasses = (node: Node): string[] => {
  const data = (node.data ??= {}) as MutableData;
  const hProperties = (data.hProperties ??= {});
  return (hProperties.class as string[] | undefined) ?? (hProperties.class = []);
};

const onCustomComponentVisit = (node: ContainerDirectiveNode): void => {
  const classes = getClasses(node);

  classes.push('custom-container', `custom-container-${node.name}`);

  if (!node.children[0]?.data?.directiveLabel) {
    node.children.unshift({
      type: 'paragraph',
      data: { directiveLabel: true },
      children: [{ type: 'text', value: node.name }],
    });
  }

  if (node.name === 'details') {
    (node.data ??= {}).hName = 'details';
    node.children[0].data!.hName = 'summary';
  }
};

const onTabGroupVisit = (node: ContainerDirectiveNode): void => {
  const tabTitles: string[] = [];
  const classes = getClasses(node);

  classes.push('tab-group');

  node.children
    .filter(
      (child): child is ContainerDirectiveNode =>
        child.type === 'containerDirective' && child.name === options.tabTag
    )
    .forEach((tab) => {
      const tabClasses = getClasses(tab);

      tabClasses.push('tab-group--tab');
      if (tabTitles.length === 0) tabClasses.push('tab-group--tab__active');

      if (tab.children[0]?.data?.directiveLabel) {
        tabTitles.push(toString(tab.children[0]));
        tab.children.shift();
      } else {
        tabTitles.push(`Tab ${tabTitles.length + 1}`);
      }
    });

  node.children.unshift({
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

const onYoutubeVisit = (node: DirectiveNode): void => {
  const data = (node.data ??= {}) as MutableData;
  const hProperties = (data.hProperties ??= {});
  const classes = (hProperties.class as string[] | undefined) ?? (hProperties.class = []);
  const id = node.attributes?.id ?? '';

  data.hName = 'div';
  classes.push('video-wrapper-16-9');

  const children = node.children ?? (node.children = []);
  children.push({
    type: 'youtubeEmbed',
    attributes: { videoId: id },
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

const onContainerDirectiveVisit = (node: ContainerDirectiveNode): void => {
  if (options.customComponentsTags.includes(node.name)) onCustomComponentVisit(node);
  else if (node.name === options.tabGroupTag) onTabGroupVisit(node);
  else if (node.name === options.youtubeTag) onYoutubeVisit(node);
};

const onLeafDirectiveVisit = (node: LeafDirectiveNode): void => {
  if (node.name === options.youtubeTag) onYoutubeVisit(node);
};

/**
 * Port of `plugins/gatsby-remark-directive`: renders the custom container
 * directives (info/tip/warning/danger/details), `tab-group` containers and
 * `youtube` directives (container or leaf) through `data.hName` /
 * `data.hProperties`, so the CSS classes and iframe are produced at render time.
 */
export const remarkDirectiveCustom: Plugin<[], Root, Root> = () => (tree) => {
  visit(tree, 'containerDirective', (node) => {
    onContainerDirectiveVisit(node as ContainerDirectiveNode);
  });
  visit(tree, 'leafDirective', (node) => {
    onLeafDirectiveVisit(node as LeafDirectiveNode);
  });
};
