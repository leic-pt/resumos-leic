import React from 'react';
import { useDarkMode, useFontSettings, useThemeSettings } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';

const ThemeSettings = () => {
  const { darkMode, toggle: toggleDarkMode } = useDarkMode();
  useFontSettings();
  useThemeSettings();

  return (
    <button className='dark-mode-toggle' onClick={toggleDarkMode}>
      {darkMode ? <DarkModeOn /> : <DarkModeOff />}
    </button>
  );
};

export default ThemeSettings;
