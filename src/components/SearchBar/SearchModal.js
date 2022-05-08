import React from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { createGetSources, navigator } from './autocomplete';
import SearchForm from './SearchForm';
import { useTouchEvents } from './useTouchEvents';
import ResultsContainer from './ResultsContainer';

const SearchModal = ({ searchClient }) => {
  // Refs to elements of search, to use with autocomplete-core
  const formElementRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const resultsContainerRef = React.useRef(null);

  // Store autocomplete's internal state on this component
  const [state, setState] = React.useState({
    query: '',
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    activeItemId: null,
    status: 'idle',
  });

  const autocomplete = React.useMemo(() => {
    return createAutocomplete({
      id: 'resumos-search',
      defaultActiveItemId: 0,
      placeholder: 'Search entire site...',
      openOnFocus: true,
      navigator,
      onStateChange(props) {
        setState(props.state);
      },
      getSources: createGetSources({ searchClient }),
    });
  }, [searchClient]);

  const { getEnvironmentProps, getInputProps, getListProps, getItemProps } = autocomplete;

  useTouchEvents({
    getEnvironmentProps,
    panelElement: resultsContainerRef.current,
    formElement: formElementRef.current,
    inputElement: inputRef.current,
  });

  return (
    <>
      <header className='search-header' ref={formElementRef}>
        <SearchForm inputRef={inputRef} getInputProps={getInputProps} />
      </header>
      <div ref={resultsContainerRef} className='search-results'>
        <ResultsContainer state={state} getListProps={getListProps} getItemProps={getItemProps} />
      </div>
    </>
  );
};

export default SearchModal;
