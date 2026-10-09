import type { AutocompleteApi } from '@algolia/autocomplete-core';
import React from 'react';
import Search from '../icons/Search';
import type { SearchHit } from './autocomplete';

const MAX_QUERY_SIZE = 50;

interface SearchFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  getFormProps: AutocompleteApi<SearchHit>['getFormProps'];
  getLabelProps: AutocompleteApi<SearchHit>['getLabelProps'];
  getInputProps: AutocompleteApi<SearchHit>['getInputProps'];
  onClose: () => void;
}

const SearchForm = ({
  inputRef,
  getFormProps,
  getLabelProps,
  getInputProps,
  onClose,
}: SearchFormProps) => {
  const inputProps = getInputProps({
    inputElement: inputRef.current,
    maxLength: MAX_QUERY_SIZE,
  }) as unknown as React.InputHTMLAttributes<HTMLInputElement>;
  const { onSubmit: autocompleteOnSubmit, ...formProps } = getFormProps({
    inputElement: inputRef.current,
  }) as unknown as React.FormHTMLAttributes<HTMLFormElement>;
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    autocompleteOnSubmit?.(event);
    inputRef.current?.focus();
  };
  const labelProps = getLabelProps();

  return (
    <>
      <Search className='search-icon' />
      <form className='search-form' {...formProps} onSubmit={handleSubmit}>
        <label className='visually-hidden' {...labelProps}>
          Search
        </label>
        <input className='search-input' ref={inputRef} {...inputProps} />
      </form>
      <button className='search-close' onClick={onClose}>
        esc
      </button>
    </>
  );
};

export default SearchForm;
