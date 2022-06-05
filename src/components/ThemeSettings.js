import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useFontSettings, useThemeSettings } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';

const ThemeSettings = () => {
  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  useFontSettings();
  useThemeSettings();

  return (
    <button className='dark-mode-toggle' onClick={toggleDarkMode}>
      {isDarkMode ? <DarkModeOn /> : <DarkModeOff />}
    </button>
  );
};

export default ThemeSettings;
