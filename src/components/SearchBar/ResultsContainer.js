import React from 'react';
import SectionHit from './SectionHit';

const ResultsContainer = ({ state, getListProps, getItemProps }) => {
  const hasCollections = state.collections.some((collection) => collection.items.length > 0);

  if (!state.query) {
    return 'TODO: start searching';
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
            collection={collection}
            title={title}
            getListProps={getListProps}
            getItemProps={getItemProps}
          />
        );
      })}
    </div>
  );
};

export default ResultsContainer;
