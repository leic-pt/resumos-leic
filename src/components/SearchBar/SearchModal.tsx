import { createAutocomplete } from '@algolia/autocomplete-core';
import type { AutocompleteState } from '@algolia/autocomplete-core';
import type { Meilisearch } from 'meilisearch';
import React from 'react';
import { createGetSources } from './autocomplete';
import type { HomepageYear, SearchHit } from './autocomplete';
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
  onNavigate: () => void;
  section?: string;
  years?: HomepageYear[];
  filterBySection: boolean;
  handleToggleFilterBySection: () => void;
}

const SearchModal = ({
  searchClient,
  indexName,
  onClose,
  onNavigate,
  section,
  years,
  filterBySection,
  handleToggleFilterBySection,
}: SearchModalProps) => {
  // Refs to elements of search, to use with autocomplete-core
  const formElementRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const resultsContainerRef = React.useRef<HTMLDivElement>(null);
  const focusedResultRef = React.useRef<HTMLElement | null>(null);
  const requestGenerationRef = React.useRef(0);
  const beginRequest = React.useCallback(() => {
    requestGenerationRef.current += 1;
    return requestGenerationRef.current;
  }, []);
  const isCurrentRequest = React.useCallback(
    (requestGeneration: number) => requestGeneration === requestGenerationRef.current,
    []
  );

  // Store autocomplete's internal state on this component
  const [state, setState] = React.useState<AutocompleteState<SearchHit>>(initialState);
  const [hasSearchError, setHasSearchError] = React.useState(false);

  // Core controllers can disagree with the rendered collections. Recover only
  // after a commit actually detaches the element that owned result focus.
  React.useLayoutEffect(() => {
    const focusedResult = focusedResultRef.current;
    if (!focusedResult || focusedResult.isConnected) return;
    focusedResultRef.current = null;
    if (
      document.activeElement === document.body ||
      document.activeElement === document.documentElement
    ) {
      formElementRef.current
        ?.querySelector<HTMLButtonElement>('.search-close')
        ?.focus({ preventScroll: true });
    }
  });

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  }, [filterBySection]);

  const autocomplete = React.useMemo(() => {
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
        onNavigate,
        onError: () => setHasSearchError(true),
        onSuccess: () => setHasSearchError(false),
        begin: beginRequest,
        isCurrent: isCurrentRequest,
        section: filterBySection ? section : undefined,
      }),
      initialState: { ...initialState, query: state.query },
    });
  }, [
    searchClient,
    indexName,
    filterBySection,
    section,
    onNavigate,
    beginRequest,
    isCurrentRequest,
  ]);

  const {
    getEnvironmentProps,
    getFormProps,
    getLabelProps,
    getInputProps,
    getListProps,
    getItemProps,
  } = autocomplete;

  useTouchEvents({
    getEnvironmentProps,
    panelElementRef: resultsContainerRef,
    formElementRef,
    inputRef,
  });

  return (
    <>
      <header className='search-header' ref={formElementRef}>
        <SearchForm
          inputRef={inputRef}
          getFormProps={getFormProps}
          getLabelProps={getLabelProps}
          getInputProps={getInputProps}
          onClose={onClose}
        />
      </header>
      <div
        ref={resultsContainerRef}
        className='search-results'
        onFocusCapture={(event) => {
          focusedResultRef.current = event.target instanceof HTMLElement ? event.target : null;
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) focusedResultRef.current = null;
        }}
      >
        <ResultsContainer
          state={state}
          hasSearchError={hasSearchError}
          getListProps={getListProps}
          getItemProps={getItemProps}
          years={years}
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
