import React, { useCallback, useState } from 'react';
import { useDarkMode, useFontSettings, useThemeSettings } from '../hooks/theme-hooks';
import DarkModeOff from './icons/DarkModeOff';
import DarkModeOn from './icons/DarkModeOn';
import SidePanel from './SidePanel';

const ThemeSettings = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const closePanel = useCallback(() => setPanelOpen(false), [setPanelOpen]);
  const togglePanel = useCallback(() => setPanelOpen((v) => !v), [setPanelOpen]);
  const { darkMode, toggle: toggleDarkMode } = useDarkMode();
  useFontSettings();
  useThemeSettings();

  return (
    <>
      <button className='dark-mode-toggle' onClick={togglePanel}>
        {darkMode ? <DarkModeOn /> : <DarkModeOff />}
      </button>
      <SidePanel open={panelOpen} onClose={closePanel}>
        <p>Reading Options</p>
        <hr />
        Test
      </SidePanel>
    </>
  );
};

export default ThemeSettings;
