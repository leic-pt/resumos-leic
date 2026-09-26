import type { AutocompleteApi, AutocompleteCollection } from '@algolia/autocomplete-core';
import type { SearchHit } from './autocomplete';
import Hit from './Hit';

interface SectionHitProps {
  collection: AutocompleteCollection<SearchHit>;
  title: string;
  getListProps: AutocompleteApi<SearchHit>['getListProps'];
  getItemProps: AutocompleteApi<SearchHit>['getItemProps'];
}

const SectionHit = ({ collection, title, getListProps, getItemProps }: SectionHitProps) => {
  if (!collection || collection.items.length === 0) {
    return null;
  }

  return (
    <section className='search-section-hit'>
      <div className='search-section-hit--title'>{title}</div>

      <ul className='search-hit-list' {...getListProps()}>
        {collection.items.map((item) => {
          return (
            <Hit
              key={[title, String(item.objectID)].join(':')}
              hit={item}
              source={collection.source}
              getItemProps={getItemProps}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SectionHit;
