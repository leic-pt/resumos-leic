import MeiliSearch from 'meilisearch';
import { useStaticQuery, graphql } from 'gatsby';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import Search from '../icons/Search';
import './SearchBar.css';
import SearchModal from './SearchModal';

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

  const data = useStaticQuery(graphql`
    query SearchConfigQuery {
      site {
        siteMetadata {
          search {
            host
            apiKey
            indexName
          }
        }
      }
    }
  `);
  const { host, apiKey, indexName } = data.site.siteMetadata.search;
  const searchClient = useMemo(
    () =>
      new MeiliSearch({
        host,
        apiKey,
      }),
    [host, apiKey]
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
          indexName={indexName}
          onClose={handleCloseSearch}
          filterBySection={filterBySection}
          handleToggleFilterBySection={handleToggleFilterBySection}
        />
      </Dialog>
    </>
  );
};

export default SearchBar;
