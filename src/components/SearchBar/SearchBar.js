import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import React, { useCallback, useEffect, useState } from 'react';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { useCurrentSection } from '../../hooks/useCurrentSection';
import Dialog from '../Dialog/Dialog';
import Search from '../icons/Search';
import Hit from './Hit';
import './SearchBar.css';

const searchClient = instantMeiliSearch(
  // TODO replace host with production server (and update it!)
  'http://localhost:7700',
  'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783'
);

const SearchBar = () => {
  const currentSection = useCurrentSection();
  const [open, setOpen] = useState(false);
  const [filterBySection, setFilterBySection] = useState(true);

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
      if (
        (event.ctrlKey || event.metaKey) &&
        !event.altKey &&
        !event.shiftKey &&
        event.key === 'k'
      ) {
        event.preventDefault();
        setOpen((wasOpen) => !wasOpen);
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
  }, [setOpen]);

  return (
    <>
      <button className='search-button' onClick={handleOpenSearch}>
        Search
      </button>
      <Dialog open={open}>
        <InstantSearch indexName='resumos-leic-v2' searchClient={searchClient}>
          <Configure
            filters={
              currentSection && filterBySection ? `hierarchy_lvl0 = "${currentSection}"` : ''
            }
          />
          <div className='search-top'>
            <Search className='search-icon' />
            <SearchBox
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
              <button class='search-filterbysection' onClick={handleToggleFilterBySection}>
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
        </InstantSearch>
      </Dialog>
    </>
  );
};

export default SearchBar;
