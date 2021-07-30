import React from 'react';
import { useDarkMode } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';

const ThemeSettings = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => setDarkMode((enabled) => !enabled);

  return (
    <button className='dark-mode-toggle' onClick={toggleDarkMode}>
      {isDarkMode ? <DarkModeOn /> : <DarkModeOff />}
    </button>
  );
};

export default ThemeSettings;
