import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { navigate } from 'gatsby-link';
import React, { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: '1rem',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        id='searchbar-input'
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;
