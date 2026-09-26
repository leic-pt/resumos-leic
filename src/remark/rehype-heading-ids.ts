import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import type { Element, Root } from 'hast';
import type { Plugin } from 'unified';

/**
 * Assigns github-slugger ids to headings that don't have one. Astro runs its
 * own heading-id pass AFTER user rehype plugins, so plugins like
 * rehype-autolink-headings would otherwise see bare headings and do nothing.
 * This runs first; Astro's later pass finds the same ids (same slugger) and
 * leaves them in place.
 */
export const rehypeHeadingIds: Plugin<[], Root> = () => (tree) => {
  const slugger = new GithubSlugger();

  visit(tree, 'element', (node) => {
    if (!/^h[1-6]$/.test(node.tagName)) return;
    if (node.properties?.id) return;

    node.properties ??= {};
    node.properties.id = slugger.slug(collectText(node));
  });
};

/** Gatsby's permalink aria-label: slugified text with hyphens as spaces. */
export function headingAriaLabel(node: Element): string {
  const id = String(node.properties.id ?? new GithubSlugger().slug(collectText(node)));
  return `${id.replace(/-/g, ' ')} permalink`;
}

export function collectText(node: Element): string {
  let text = '';
  for (const child of node.children ?? []) {
    if (child.type === 'text') {
      text += child.value ?? '';
    } else if ('children' in child) {
      text += collectText(child as Element);
    }
  }
  return text;
}
