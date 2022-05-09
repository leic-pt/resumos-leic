import MeiliSearch from 'meilisearch';
import React, { useCallback, useEffect, useState } from 'react';
import { useCurrentSection } from '../../hooks/useCurrentSection';
import Dialog from '../Dialog/Dialog';
import './SearchBar.css';
import SearchModal from './SearchModal';

const searchClient = new MeiliSearch({
  // TODO replace host with production server (and update it!)
  host: 'http://localhost:7700',
  apiKey: 'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783',
});

const SearchBar = () => {
  const currentSection = useCurrentSection();
  const [open, setOpen] = useState(false);
  const [filterBySection, setFilterBySection] = useState(true);
  const inputRef = React.createRef();

  const handleOpenSearch = useCallback(() => setOpen(true), [setOpen]);
  const handleCloseSearch = useCallback(() => setOpen(false), [setOpen]);
  const handleToggleFilterBySection = useCallback(
    () => setFilterBySection((v) => !v),
    [setFilterBySection]
  );

  // Global keybinds
  useEffect(() => {
    const handleKeyPress = (event) => {
      // CTRL + K or CMD + K (on Mac) toggles search modal
      if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((wasOpen) => {
          if (!wasOpen) {
            setFilterBySection(!event.shiftKey);
          }
          return !wasOpen;
        });
      }
      if (
        event.key === 'Escape' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setOpen, setFilterBySection]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, inputRef]);

  return (
    <>
      <button className='search-button' onClick={handleOpenSearch}>
        Search
      </button>
      <Dialog open={open} onClose={handleCloseSearch}>
        <SearchModal searchClient={searchClient} onClose={handleCloseSearch} />
        {/*<InstantSearch indexName='resumos-leic-v2' searchClient={searchClient}>
          <Configure
            filters={
              currentSection && filterBySection ? `hierarchy_lvl0 = "${currentSection}"` : ''
            }
          />
          <div className='search-top'>
            <Search className='search-icon' />
            <SearchBox
              inputRef={inputRef}
              translations={{
                placeholder: `Search ${(filterBySection && currentSection) || 'entire site'}...`,
              }}
            />
            <button className='search-close' onClick={handleCloseSearch}>
              esc
            </button>
          </div>
          <Hits hitComponent={Hit} />
          <div className='search-footer'>
            {currentSection && (
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
            )}
          </div>
                </InstantSearch>*/}
      </Dialog>
    </>
  );
};

export default SearchBar;
