import React from 'react';
import Search from '../icons/Search';

const MAX_QUERY_SIZE = 50;

const SearchForm = ({ inputRef, getInputProps, onClose }) => {
  return (
    <>
      <Search className='search-icon' />
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
      <button className='search-close' onClick={onClose}>
        esc
      </button>
    </>
  );
};

export default SearchForm;
