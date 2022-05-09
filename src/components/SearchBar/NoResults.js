import React from 'react';

const NoResults = ({ query }) => {
  return (
    <div class='search-no-results'>
      <div class='search-no-results--icon'>(;-;)</div>
      <div class='search-no-results--text'>{`No results found for '${query}'`}</div>
    </div>
  );
};

export default NoResults;
