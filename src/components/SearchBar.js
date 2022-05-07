import { navigate } from 'gatsby-link';
import React, { useCallback, useEffect, useState } from 'react';
import '../styles/searchbar.css';
import Dialog from './Dialog/Dialog';

const SearchBar = () => {
  useEffect(() => {
    Promise.all([
      import(
        /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.js'
      ),
      import(
        /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
      ),
    ]).then(([docsSearchBar]) => /*docsSearchBar.default({
        hostUrl: 'https://meilisearch.diogotc.com/',
        apiKey: 'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783',
        indexUid: 'resumos-leic-v2',
        enableDarkMode: true,
        inputSelector: '#searchbar-input',
        handleSelected: (_input, _event, suggestion) => {
          const url = new URL(suggestion.url);
          navigate(url.href.replace(url.origin, ''));
        },
      })*/ {});
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpenSearch = useCallback(() => setOpen(true), [setOpen]);
  const handleCloseSearch = useCallback(() => setOpen(false), [setOpen]);

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
        test
        <button onClick={handleCloseSearch}>Close</button>
      </Dialog>
    </div>
  );
};

export default SearchBar;
