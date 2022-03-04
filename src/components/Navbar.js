import { AppBar, IconButton, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';
import { drawerWidth } from './Sidebar';
import ThemeSettings from './ThemeSettings';
import MenuIcon from '@mui/icons-material/MenuRounded';

const Navbar = ({ title, toggleSidebar }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <>
      <AppBar
        sx={{
          display: { xs: 'none', lg: 'block' },
          pl: toggleSidebar && drawerWidth,
          backgroundImage: 'none',
          transition: (theme) => theme.transitions.create(['background-color', 'box-shadow']),
        }}
        elevation={trigger ? 4 : 0}
        color={trigger ? 'default' : 'transparent'}
      >
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            noWrap
            sx={{
              flexGrow: 1,
              opacity: trigger ? 1 : 0,
              transition: (theme) => theme.transitions.create(['opacity']),
            }}
          >
            {title}
          </Typography>
          <SearchBar />
          <ThemeSettings />
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{
          display: { lg: 'none' },
          backgroundImage: 'none',
          top: 'auto',
          bottom: 0,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
        }}
        elevation={4}
      >
        <Toolbar>
          {toggleSidebar && (
            <IconButton
              onClick={toggleSidebar}
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h6' component='div' noWrap sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {/*<SearchBar />*/}
          <ThemeSettings />
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: '1rem' }} />
    </>
  );
};

export default Navbar;
