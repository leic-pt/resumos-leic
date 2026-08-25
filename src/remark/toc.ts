import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import type { Code, List, ListItem, Node, PhrasingContent, Root } from 'mdast';
import type { Plugin } from 'unified';

interface TocOptions {
  tight?: boolean;
  fromHeading?: number;
  toHeading?: number;
  className?: string;
  ordered?: boolean;
  exclude?: string | string[];
  mdx?: boolean;
}

interface TocPrefs {
  tight: boolean;
  fromHeading: number;
  toHeading: number;
  className: string;
  ordered: boolean;
  exclude?: string | string[];
}

interface TocItem {
  depth: number;
  children: PhrasingContent[];
  id: string;
}

const defaultPrefs: TocPrefs = {
  tight: false,
  fromHeading: 2,
  toHeading: 6,
  className: 'toc',
  ordered: false,
};

// convert "in-string" to "inString"
const strToCamel = (str: string): string =>
  str.replace(/-(.)/g, (_match, chr: string) => chr.toUpperCase());

// convert "{'in-key': val}" to "{'inKey': val}"
const keysToCamel = (obj: object | null | undefined): object | null | undefined => {
  if (!obj) return obj;
  const newObj: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) newObj[strToCamel(key)] = value;
  return newObj;
};

// js-yaml is not a declared dependency, so this parses the flat `key: value`
// subset used by TOC configuration blocks: booleans, numbers, strings, null
// and inline arrays (e.g. `exclude: [a, b]`).
const parseYamlScalar = (raw: string): unknown => {
  if (raw === '' || raw === 'null' || raw === '~') return null;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  if (/^[-+]?\d+$/.test(raw) || /^[-+]?(?:\d+\.\d*|\.\d+)(?:[eE][-+]?\d+)?$/.test(raw)) {
    return Number(raw);
  }
  if (raw.startsWith('[') && raw.endsWith(']')) {
    return raw
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .map((item) => parseYamlScalar(item));
  }
  return raw.replace(/^["']|["']$/g, '');
};

const parsePrefs = (prefsStrYaml: string): Record<string, unknown> => {
  const prefs: Record<string, unknown> = {};
  for (const rawLine of prefsStrYaml.split('\n')) {
    const line = rawLine.replace(/\s*#.*$/, '').trim();
    if (!line) continue;
    const match = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!match) continue;
    prefs[match[1]] = parseYamlScalar(match[2].trim());
  }
  return prefs;
};

const toExpression = (value: string): RegExp => new RegExp(`^(${value})$`, 'i');

// Transform a list of heading objects into a nested markdown list (ported from
// `mdast-util-toc@5.1.0`'s `contents`, which `gatsby-remark-table-of-contents`
// relies on).
function contents(map: TocItem[], tight: boolean, ordered: boolean): List {
  const table: List = { type: 'list', ordered, spread: false, children: [] };
  let minDepth = Infinity;
  let index = -1;

  // Find minimum depth.
  while (++index < map.length) {
    if (map[index].depth < minDepth) minDepth = map[index].depth;
  }

  // Normalize depth.
  index = -1;
  while (++index < map.length) {
    map[index].depth -= minDepth - 1;
  }

  // Add TOC to list.
  index = -1;
  while (++index < map.length) {
    insert(map[index], table, tight, ordered);
  }

  return table;
}

// Insert an entry into `parent`.
function insert(entry: TocItem, parent: List | ListItem, tight: boolean, ordered: boolean): void {
  const siblings = parent.children as (List | ListItem)[];
  const tail = siblings[siblings.length - 1];
  let index = -1;

  if (entry.depth === 1) {
    siblings.push({
      type: 'listItem',
      spread: false,
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              title: null,
              url: `#${entry.id}`,
              children: all(entry.children),
            },
          ],
        },
      ],
    });
  } else if (tail && tail.type === 'listItem') {
    insert(entry, tail, tight, ordered);
  } else if (tail && tail.type === 'list') {
    entry.depth--;
    insert(entry, tail, tight, ordered);
  } else if (parent.type === 'list') {
    const item: ListItem = { type: 'listItem', spread: false, children: [] };
    siblings.push(item);
    insert(entry, item, tight, ordered);
  } else {
    const item: List = { type: 'list', ordered, spread: false, children: [] };
    siblings.push(item);
    entry.depth--;
    insert(entry, item, tight, ordered);
  }

  if (parent.type === 'list' && !tight) {
    parent.spread = false;
    const listSiblings = parent.children;
    while (++index < listSiblings.length) {
      if (listSiblings[index].children.length > 1) {
        parent.spread = true;
        break;
      }
    }
  } else {
    parent.spread = !tight;
  }
}

function all(children: PhrasingContent[]): PhrasingContent[] {
  const result: PhrasingContent[] = [];
  for (const child of children) {
    result.push(...one(child));
  }
  return result;
}

function one(node: Node): PhrasingContent[] {
  if (
    node.type === 'link' ||
    node.type === 'linkReference' ||
    node.type === 'footnote' ||
    node.type === 'footnoteReference'
  ) {
    return all((node as { children?: PhrasingContent[] }).children ?? []);
  }

  const copy = { ...node } as { children?: PhrasingContent[]; data?: unknown; position?: unknown };
  delete copy.children;
  delete copy.position;
  if (node.data) copy.data = structuredClone(node.data);
  const children = (node as { children?: PhrasingContent[] }).children;
  if (children) copy.children = all(children);
  return [copy as PhrasingContent];
}

/**
 * Port of `gatsby-remark-table-of-contents@2.0.0` (with `mdast-util-toc`'s
 * list building inlined): replaces a fenced code block with lang `toc` by a
 * nested list of heading links wrapped in `<div class="toc">`.
 *
 * Defaults: `tight: false`, `fromHeading: 2` (only headings with depth >= 2
 * are listed), `toHeading: 6` (maxDepth), `className: 'toc'`, `ordered: false`.
 * `tight: true` produces `spread: false` lists (no blank lines between items).
 *
 * Heading ids are computed with `github-slugger` over *all* headings in
 * document order — mirroring Astro's `rehype-heading-ids` pass — so the TOC
 * anchors always match the ids rehype-autolink-headings links to, including
 * duplicate suffixes and custom ids (which do not consume a slug).
 */
export const remarkToc: Plugin<[options?: TocOptions], Root, Root> = (options = {}) => {
  const pluginOptions = { mdx: false, ...options };
  return (tree) => {
    // find position of TOC
    const index = tree.children.findIndex((node) => node.type === 'code' && node.lang === 'toc');

    // we have no TOC
    if (index === -1) return;

    const tocNode = tree.children[index] as Code;
    const prefs = {
      ...defaultPrefs,
      ...keysToCamel(pluginOptions),
      ...keysToCamel(parsePrefs(tocNode.value)),
    } as TocPrefs;

    // For XSS safety, we only allow basic css names
    if (!prefs.className.match(/^[ a-zA-Z0-9_-]*$/)) {
      prefs.className = 'toc';
    }

    const slugger = new GithubSlugger();
    const items: TocItem[] = [];

    visit(tree, 'heading', (heading, _index, parent) => {
      const value = toString(heading);
      const data = heading.data as Record<string, unknown> | undefined;
      const hProperties = data?.hProperties as Record<string, unknown> | undefined;
      const rawId = hProperties?.id;
      const id = typeof rawId === 'string' ? rawId : slugger.slug(value);

      if (parent !== tree) return;
      if (!value) return;
      if (heading.depth < prefs.fromHeading) return;
      if (prefs.toHeading && heading.depth > prefs.toHeading) return;
      if (prefs.exclude) {
        const skip = Array.isArray(prefs.exclude) ? prefs.exclude.join('|') : prefs.exclude;
        if (toExpression(skip).test(value)) return;
      }
      items.push({ depth: heading.depth, children: heading.children, id });
    });

    const map = items.length ? contents(items, prefs.tight, prefs.ordered) : null;

    // insert the TOC
    tree.children = [
      ...tree.children.slice(0, index),
      {
        type: 'html',
        value: `<div ${pluginOptions.mdx ? 'className' : 'class'}="${prefs.className}">`,
      },
      ...(map ? [map] : []),
      { type: 'html', value: '</div>' },
      ...tree.children.slice(index + 1),
    ];
  };
};
