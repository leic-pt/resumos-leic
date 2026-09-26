import type { AutocompleteApi } from '@algolia/autocomplete-core';
import React from 'react';
import Search from '../icons/Search';
import type { SearchHit } from './autocomplete';

const MAX_QUERY_SIZE = 50;

interface SearchFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  getInputProps: AutocompleteApi<SearchHit>['getInputProps'];
  onClose: () => void;
}

const SearchForm = ({ inputRef, getInputProps, onClose }: SearchFormProps) => {
  const inputProps = getInputProps({
    inputElement: inputRef.current,
    autoFocus: true,
    maxLength: MAX_QUERY_SIZE,
  }) as unknown as React.InputHTMLAttributes<HTMLInputElement>;

  return (
    <>
      <Search className='search-icon' />
      <form className='search-form'>
        <input className='search-input' ref={inputRef} {...inputProps} />
      </form>
      <button className='search-close' onClick={onClose}>
        esc
      </button>
    </>
  );
};

export default SearchForm;
