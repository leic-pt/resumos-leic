import React from 'react';
import Hit from './Hit';

const SectionHit = ({ collection, title, getListProps, getItemProps }) => {
  if (!collection || collection.items.length === 0) {
    return null;
  }

  return (
    <section className='search-section-hit'>
      <div className='search-section-hit--title'>{title}</div>

      <ul className='search-hit-list' {...getListProps()}>
        {collection.items.map((item, index) => {
          // TODO check if index is necessary
          return (
            <Hit
              key={[title, item.objectID].join(':')}
              hit={item}
              index={index}
              getItemProps={getItemProps}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SectionHit;
