import { Meilisearch } from 'meilisearch';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { siteConfig } from '../../config';
import Dialog from '../Dialog/Dialog';
import Search from '../icons/Search';
import type { HomepageYear } from './autocomplete';
import './SearchBar.css';
import SearchModal from './SearchModal';

interface SearchBarProps {
  section?: string;
  years?: HomepageYear[];
}

const SearchBar = ({ section, years }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [filterBySection, setFilterBySection] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenSearch = useCallback(() => setOpen(true), []);
  const handleCloseSearch = useCallback(() => setOpen(false), []);
  const handleToggleFilterBySection = useCallback(() => setFilterBySection((v) => !v), []);

  const { host, apiKey, indexName } = siteConfig.search;
  const searchClient = useMemo(
    () =>
      new Meilisearch({
        host,
        apiKey,
      }),
    [host, apiKey]
  );

  // Global keybinds
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
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
  }, [filterBySection]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

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
          indexName={indexName}
          onClose={handleCloseSearch}
          section={section}
          years={years}
          filterBySection={filterBySection}
          handleToggleFilterBySection={handleToggleFilterBySection}
        />
      </Dialog>
    </>
  );
};

export default SearchBar;
