import { createAutocomplete } from '@algolia/autocomplete-core';
import React, { useEffect } from 'react';
import { useCurrentSection } from '../../hooks/useCurrentSection';
import { createGetSources, navigator } from './autocomplete';
import ResultsContainer from './ResultsContainer';
import SearchForm from './SearchForm';
import { useTouchEvents } from './useTouchEvents';

const initialState = {
  query: '',
  collections: [],
  completion: null,
  context: {},
  isOpen: false,
  activeItemId: null,
  status: 'idle',
};

const SearchModal = ({ searchClient, onClose, filterBySection, handleToggleFilterBySection }) => {
  // Refs to elements of search, to use with autocomplete-core
  const formElementRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const resultsContainerRef = React.useRef(null);

  const currentSection = useCurrentSection();

  // Store autocomplete's internal state on this component
  const [state, setState] = React.useState(initialState);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.click();
  }, [filterBySection]);

  const autocomplete = React.useMemo(() => {
    return createAutocomplete({
      id: 'resumos-search',
      defaultActiveItemId: 0,
      placeholder: `Search ${(filterBySection && currentSection) || 'entire site'}...`,
      openOnFocus: true,
      navigator,
      onStateChange(props) {
        setState(props.state);
      },
      getSources: createGetSources({
        searchClient,
        onClose,
        section: filterBySection && currentSection,
      }),
      initialState: { ...initialState, query: state.query },
    });
    // Including state.query to dependency array not needed; supress warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchClient, filterBySection, currentSection, onClose]);

  const onItemClick = React.useCallback(
    (item) => {
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
        {currentSection && (
          <>
            <button className='search-filterbysection' onClick={handleToggleFilterBySection}>
              <span
                className={`search-filterbysection--btn ${
                  filterBySection ? 'search-filterbysection--btn__active' : ''
                }`}
              >
                {`${currentSection} only`}
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
