import React from 'react';
import SectionHit from './SectionHit';
import StartSearching from './StartSearching';

const ResultsContainer = ({ state, getListProps, getItemProps, onItemClick }) => {
  const hasCollections = state.collections.some((collection) => collection.items.length > 0);

  if (!state.query) {
    return <StartSearching />;
  }

  if (!hasCollections) {
    return 'TODO: no results';
  }

  return (
    <div>
      {state.collections.map((collection) => {
        const title = 'TODO';

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
