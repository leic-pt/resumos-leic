import React from 'react';

const NoResults = ({ query }) => {
  return (
    <div className='search-no-results'>
      <div className='search-no-results--icon'>(;-;)</div>
      <div className='search-no-results--text'>{`No results found for '${query}'`}</div>
    </div>
  );
};

export default NoResults;
