import { createAutocomplete } from '@algolia/autocomplete-core';
import type { AutocompleteState } from '@algolia/autocomplete-core';
import type { Meilisearch } from 'meilisearch';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createGetSources } from './autocomplete';
import type { SearchHit } from './autocomplete';
import ResultsContainer from './ResultsContainer';
import SearchForm from './SearchForm';
import { useTouchEvents } from './useTouchEvents';

const initialState: AutocompleteState<SearchHit> = {
  query: '',
  collections: [],
  completion: null,
  context: {},
  isOpen: false,
  activeItemId: null,
  status: 'idle',
};

interface SearchModalProps {
  searchClient: Meilisearch;
  indexName: string;
  onClose: () => void;
  section?: string;
  filterBySection: boolean;
  handleToggleFilterBySection: () => void;
}

const SearchModal = ({
  searchClient,
  indexName,
  onClose,
  section,
  filterBySection,
  handleToggleFilterBySection,
}: SearchModalProps) => {
  // Refs to elements of search, to use with autocomplete-core
  const formElementRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Store autocomplete's internal state on this component
  const [state, setState] = useState<AutocompleteState<SearchHit>>(initialState);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  }, [filterBySection]);

  const autocomplete = useMemo(() => {
    return createAutocomplete<SearchHit>({
      id: 'resumos-search',
      defaultActiveItemId: 0,
      placeholder: `Search ${(filterBySection && section) || 'entire site'}...`,
      openOnFocus: true,
      onStateChange(props) {
        setState(props.state);
      },
      getSources: createGetSources({
        searchClient,
        indexName,
        onClose,
        section: filterBySection ? section : undefined,
      }),
      initialState: { ...initialState, query: state.query },
    });
  }, [searchClient, filterBySection, section, onClose]);

  const onItemClick = useCallback(
    (_item: SearchHit) => {
      // In the future, we might want to save recent searches
      onClose();
    },
    [onClose]
  );

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
        <SearchForm inputRef={inputRef} getInputProps={getInputProps} onClose={onClose} />
      </header>
      <div ref={resultsContainerRef} className='search-results'>
        <ResultsContainer
          state={state}
          getListProps={getListProps}
          getItemProps={getItemProps}
          onItemClick={onItemClick}
        />
      </div>
      <div className='search-footer'>
        {section && (
          <>
            <button className='search-filterbysection' onClick={handleToggleFilterBySection}>
              <span
                className={`search-filterbysection--btn ${
                  filterBySection ? 'search-filterbysection--btn__active' : ''
                }`}
              >
                {`${section} only`}
              </span>
              <span
                className={`search-filterbysection--btn ${
                  filterBySection ? '' : 'search-filterbysection--btn__active'
                }`}
              >
                Entire site
              </span>
            </button>
            <div className='search-footer--keyboard-tips'>
              <strong>PROTIP:</strong> You can use <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd>{' '}
              to search the entire site
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchModal;
