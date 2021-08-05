import { navigate } from 'gatsby-link';
import React, { useEffect } from 'react';
import '../styles/searchbar.css';

const SearchBar = () => {
  useEffect(() => {
    Promise.all([
      import(
        /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.js'
      ),
      import(
        /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
      ),
    ]).then(([docsSearchBar]) =>
      docsSearchBar.default({
        hostUrl: 'https://meilisearch.diogotc.com/',
        apiKey: 'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783',
        indexUid: 'resumos-leic-v2',
        enableDarkMode: true,
        inputSelector: '#searchbar-input',
        handleSelected: (_input, _event, suggestion) => {
          const url = new URL(suggestion.url);
          navigate(url.href.replace(url.origin, ''));
        },
      })
    );
  }, []);

  return (
    <div className='searchbar'>
      <input id='searchbar-input' type='text' placeholder='Search'></input>
    </div>
  );
};

export default SearchBar;
