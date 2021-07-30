import React from 'react';
import { useDarkMode, useFontSettings } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';

const ThemeSettings = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  useFontSettings();

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <button className='dark-mode-toggle' onClick={toggleDarkMode}>
      {isDarkMode ? <DarkModeOn /> : <DarkModeOff />}
    </button>
  );
};

export default ThemeSettings;
