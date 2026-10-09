import { getCollection, type CollectionEntry } from 'astro:content';

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

/** Pages whose path lives under the given course (e.g. `asa` for `/asa/x`). */
export function getCoursePages(pages: PageEntry[], course: string): PageEntry[] {
  return pages.filter(
    (page) => page.data.path === `/${course}` || page.data.path.startsWith(`/${course}/`)
  );
}

export interface SidebarLink {
  path: string;
  title: string;
  /** Content-relative file path (e.g. `asa/0001-introducao.md`). */
  id: string;
}

/**
 * Group pages into the sidebar sections declared in `siteConfig`, preserving
 * the config order and sorting links by file path.
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
      section.links.push({ path, title: title || path, id: page.id });
    }
  }

  for (const section of sections) {
    section.links.sort((a, b) => a.id.localeCompare(b.id));
  }

  return sections.filter(({ links }) => links.length > 0);
}
