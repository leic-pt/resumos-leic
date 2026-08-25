import { getCollection, render, type CollectionEntry } from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;

export async function getAllPages(): Promise<PageEntry[]> {
  return getCollection('pages');
}

/** Resolve a page entry by its frontmatter `path` (e.g. `/asa/introducao`). */
export async function getPageByPath(path: string): Promise<PageEntry | undefined> {
  const pages = await getAllPages();
  return pages.find((page) => page.data.path === path);
}

/** The homepage entry (`path: /`). */
export async function getHomepage(): Promise<PageEntry | undefined> {
  return getPageByPath('/');
}

export interface SidebarLink {
  path: string;
  title: string;
}

export interface SidebarSection extends SidebarLink {
  key: string;
  name?: string;
}

/**
 * Group all pages into the sidebar sections declared in `siteConfig`,
 * preserving the config order and sorting links by file path (as Gatsby did).
 */
export function getSidebarSections(
  pages: PageEntry[],
  sidebarSections: ReadonlyArray<{ key: string; name?: string }>
): Array<{ key: string; name?: string; links: SidebarLink[] }> {
  const sections = sidebarSections.map((section) => ({ ...section, links: [] as SidebarLink[] }));

  for (const page of pages) {
    const { path, title, type } = page.data;
    if (!path || !type) continue;

    const section = sections.find(({ key }) => key === type);
    if (section) {
      section.links.push({ path, title: title || path });
    }
  }

  for (const section of sections) {
    section.links.sort((a, b) => a.path.localeCompare(b.path));
  }

  return sections.filter(({ links }) => links.length > 0);
}

/** Title of the `topLevelPage` within the same subject (used by search). */
export function getSectionTitle(pages: PageEntry[], subject: string): string | undefined {
  return pages.find(
    (page) => page.data.path.startsWith(`/${subject}/`) && page.data.type === 'topLevelPage'
  )?.data.title;
}

export async function getSectionTitleByPath(path: string): Promise<string | undefined> {
  const pages = await getAllPages();
  const subject = path.split('/')[1];
  return getSectionTitle(pages, subject);
}

export { render };
