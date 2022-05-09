import React from 'react';
import NoResults from './NoResults';
import SectionHit from './SectionHit';
import StartSearching from './StartSearching';

const ResultsContainer = ({ state, getListProps, getItemProps, onItemClick }) => {
  const hasCollections = state.collections.some((collection) => collection.items.length > 0);

  if (!state.query) {
    return <StartSearching />;
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

        const title = collection.items[0].hierarchy_lvl0;

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
