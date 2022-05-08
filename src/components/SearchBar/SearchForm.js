import React from 'react';

const MAX_QUERY_SIZE = 50;

const SearchForm = ({ inputRef, getInputProps }) => {
  return (
    <>
      <form className='search-form'>
        <input
          className='search-input'
          ref={inputRef}
          {...getInputProps({
            inputElement: inputRef.current,
            autoFocus: true,
            maxLength: MAX_QUERY_SIZE,
          })}
        />
      </form>
    </>
  );
};

export default SearchForm;
