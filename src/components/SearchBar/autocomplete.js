import { navigate } from 'gatsby';

export function createGetSources({ searchClient }) {
  return async ({ query, setContext, setStatus }) => {
    // TODO
    if (!query) {
      // Return no results if query is empty
      return [];
    }

    try {
      const { hits, nbHits } = await searchClient.index('resumos-leic-v2').search(query);

      setContext({ nbHits });

      return [
        {
          sourceId: 'hit',
          onSelect() {
            // TODO
          },
          getItemUrl({ item }) {
            return stripDomainFromLink(item.url);
          },
          getItems() {
            return hits;
          },
        },
      ];
      /*return hits.map((hit, index) => {
        return {
          sourceId: `hits${index}`,
          onSelect()  {
            // TODO
          },
          getItemUrl({item}) {
            return item.url;
          },
          getItems() {

          }
        }
      })*/
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
