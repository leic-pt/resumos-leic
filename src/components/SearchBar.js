import { navigate } from 'gatsby-link';
import React, { useCallback, useEffect, useState } from 'react';
import '../styles/searchbar.css';
import Dialog from './Dialog/Dialog';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  // TODO replace host with production server (and update it!)
  'http://localhost:7700',
  'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783'
);

const SearchBar = () => {
  // const url = new URL(suggestion.url);
  // navigate(url.href.replace(url.origin, ''));

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
        <InstantSearch indexName='resumos-leic-v2' searchClient={searchClient}>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Dialog>
    </div>
  );
};

const Hit = ({ hit }) => <Highlight attribute='url' hit={hit} />;

export default SearchBar;
