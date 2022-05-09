import MeiliSearch from 'meilisearch';
import React, { useCallback, useEffect, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import Search from '../icons/Search';
import './SearchBar.css';
import SearchModal from './SearchModal';

const searchClient = new MeiliSearch({
  // TODO replace host with production server (and update it!)
  host: 'http://localhost:7700',
  apiKey: 'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783',
});

const SearchBar = () => {
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
          } else if (filterBySection !== !event.shiftKey) {
            // If toggling filterBySection, keep open
            setFilterBySection(!event.shiftKey);
            return true;
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
  }, [setOpen, setFilterBySection, filterBySection]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, inputRef]);

  return (
    <>
      <button className='search-button' onClick={handleOpenSearch}>
        <Search className='search-button--icon' />
        <span className='search-button--label'>Search</span>
        <span className='search-button--keybinds'>
          <kbd>CTRL</kbd>
          <kbd>K</kbd>
        </span>
      </button>
      <Dialog open={open} onClose={handleCloseSearch}>
        <SearchModal
          searchClient={searchClient}
          onClose={handleCloseSearch}
          filterBySection={filterBySection}
          handleToggleFilterBySection={handleToggleFilterBySection}
        />
      </Dialog>
    </>
  );
};

export default SearchBar;
