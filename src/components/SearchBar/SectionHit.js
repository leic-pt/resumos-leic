import React from 'react';
import Hit from './Hit';

const SectionHit = ({ collection, title, getListProps, getItemProps, onItemClick }) => {
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
              key={[title, item.objectID].join(':')}
              hit={item}
              getItemProps={getItemProps}
              onItemClick={onItemClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SectionHit;
