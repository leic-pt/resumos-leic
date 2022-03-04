import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';
import { drawerWidth } from './Sidebar';
import ThemeSettings from './ThemeSettings';

const ElevationScroll = (props) => {
  const { children } = props;

  return React.cloneElement(children, {});
};

const Navbar = ({ title }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={{
            pl: drawerWidth,
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
      </ElevationScroll>
      <Toolbar sx={{ mb: '1rem' }} />
    </>
  );
};

export default Navbar;
