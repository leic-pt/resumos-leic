import type {
  AutocompleteSource,
  GetSourcesParams,
  OnSelectParams,
} from '@algolia/autocomplete-core';
import type { Meilisearch } from 'meilisearch';
import { withTrailingSlash } from '../../lib/site-path';

/**
 * A search hit as returned by the meilisearch index. The index signature
 * covers the `hierarchy_lvl0`..`hierarchy_lvl6`, `content` and `objectID`
 * fields produced by the site's indexing pipeline.
 */
export interface SearchHit {
  url?: string;
  title?: string;
  _formatted?: Partial<SearchHit> & Record<string, unknown>;
  [key: string]: unknown;
}

/** A year group of the homepage, used by the "start searching" screen. */
export interface HomepageYear {
  name: string;
  semesters: Array<{
    name: string;
    courses: Array<{ name: string; link: string }>;
  }>;
}

export function createGetSources({
  searchClient,
  indexName,
  onClose,
  section,
}: {
  searchClient: Meilisearch;
  indexName: string;
  onClose: () => void;
  section?: string;
}) {
  return async ({ query, setContext, setStatus }: GetSourcesParams<SearchHit>) => {
    if (!query) {
      // Return no results if query is empty
      return [];
    }

    try {
      const { hits, estimatedTotalHits } = await searchClient
        .index<SearchHit>(indexName)
        .search(query, {
          attributesToHighlight: [
            'hierarchy_lvl1',
            'hierarchy_lvl2',
            'hierarchy_lvl3',
            'hierarchy_lvl4',
            'hierarchy_lvl5',
            'hierarchy_lvl6',
            'content',
          ],
          limit: 30,
          filter: section ? `hierarchy_lvl0 = "${section}"` : undefined,
        });

      const groupedHits = groupElementsByKey(hits, 'hierarchy_lvl0');

      // The search context is not consumed by any component, but is kept for
      // parity with the legacy implementation (the v0.60 API reports the total
      // number of hits as `estimatedTotalHits` instead of `nbHits`).
      setContext({ nbHits: estimatedTotalHits });

      return Object.entries(groupedHits).map(([title, sectionHits]) => ({
        sourceId: `hit_${title}`,
        onSelect({ item, event }: OnSelectParams<SearchHit>) {
          if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
            onClose();
          }
        },
        getItemUrl({ item }: { item: SearchHit }) {
          return stripDomainFromLink(item.url);
        },
        getItems() {
          return sectionHits;
        },
      }));
    } catch (error) {
      // Failed to fetch from meilisearch backend
      setStatus('error');

      throw error;
    }
  };
}

export function stripDomainFromLink(url?: string) {
  if (!url) return '/';

  const parsedUrl = new URL(url);
  return withTrailingSlash(parsedUrl.href.replace(parsedUrl.origin, ''));
}

// Override Autocomplete's default navigation behaviour with a full page navigation
export const navigator = Object.freeze({
  navigate({ itemUrl }: { itemUrl: string }) {
    window.location.assign(itemUrl);
  },
} as const);

// Group elements by a specific key
export function groupElementsByKey<T>(list: T[], key: string): Record<string, T[]> {
  const groups: Record<string, T[]> = {};

  list.forEach((el) => {
    const value = (el as Record<string, unknown>)[key] as string;
    const list = groups[value] || (groups[value] = []);

    list.push(el);
  });

  return groups;
}
