import { navigate } from 'gatsby';

export function createGetSources({ searchClient, indexName, onClose, section }) {
  return async ({ query, setContext, setStatus }) => {
    if (!query) {
      // Return no results if query is empty
      return [];
    }

    try {
      const { hits, nbHits } = await searchClient.index(indexName).search(query, {
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

      setContext({ nbHits });

      return Object.entries(groupedHits).map(([title, sectionHits]) => ({
        sourceId: `hit_${title}`,
        onSelect({ item, event }) {
          // In the future save recent item here
          if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
            onClose();
          }
        },
        getItemUrl({ item }) {
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

export function stripDomainFromLink(url) {
  if (!url) return '/';

  const parsedUrl = new URL(url);
  return parsedUrl.href.replace(parsedUrl.origin, '');
}

// Override Autocomplete's default navigation behaviour with Gatsby's Navigator
export const navigator = Object.freeze({
  navigate({ itemUrl }) {
    navigate(itemUrl);
  },
});

// Group elements by a specific key
export function groupElementsByKey(list, key) {
  const groups = {};

  list.forEach((el) => {
    const value = el[key];
    const list = groups[value] || (groups[value] = []);

    list.push(el);
  });

  return groups;
}
