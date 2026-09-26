import type { AutocompleteApi, AutocompleteState } from '@algolia/autocomplete-core';
import type { HomepageYear, SearchHit } from './autocomplete';
import NoResults from './NoResults';
import SectionHit from './SectionHit';
import StartSearching from './StartSearching';

interface ResultsContainerProps {
  state: AutocompleteState<SearchHit>;
  getListProps: AutocompleteApi<SearchHit>['getListProps'];
  getItemProps: AutocompleteApi<SearchHit>['getItemProps'];
  onItemClick: (item: SearchHit) => void;
  years?: HomepageYear[];
}

const ResultsContainer = ({
  state,
  getListProps,
  getItemProps,
  onItemClick,
  years,
}: ResultsContainerProps) => {
  const hasCollections = state.collections.some((collection) => collection.items.length > 0);

  if (!state.query) {
    return <StartSearching years={years} />;
  }

  if (!hasCollections) {
    return <NoResults query={state.query} />;
  }

  return (
    <div>
      {state.collections.map((collection) => {
        if (collection.items.length === 0) {
          return null;
        }

        const title = collection.items[0].hierarchy_lvl0 as string;

        return (
          <SectionHit
            key={title}
            collection={collection}
            title={title}
            getListProps={getListProps}
            getItemProps={getItemProps}
            onItemClick={onItemClick}
          />
        );
      })}
    </div>
  );
};

export default ResultsContainer;
