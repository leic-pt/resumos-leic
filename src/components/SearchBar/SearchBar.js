import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import React, { useCallback, useEffect, useState } from 'react';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { useCurrentSection } from '../../hooks/useCurrentSection';
import Dialog from '../Dialog/Dialog';
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
    <div className='searchbar'>
      <button onClick={handleOpenSearch}>Search</button>
      <Dialog open={open}>
        <button onClick={handleCloseSearch}>Close</button>
        {currentSection && (
          <button onClick={handleToggleFilterBySection}>
            Filter by section {filterBySection ? 'ON' : 'OFF'}
          </button>
        )}
        <InstantSearch indexName='resumos-leic-v2' searchClient={searchClient}>
          <Configure
            filters={
              currentSection && filterBySection ? `hierarchy_lvl0 = "${currentSection}"` : ''
            }
          />
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Dialog>
    </div>
  );
};

export default SearchBar;
