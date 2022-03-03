import { IconButton } from '@mui/material';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useFontSettings } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';

const ThemeSettings = () => {
  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  useFontSettings();

  return (
    <IconButton onClick={toggleDarkMode}>
      {isDarkMode ? <DarkModeOn /> : <DarkModeOff />}
    </IconButton>
  );
};

export default ThemeSettings;
