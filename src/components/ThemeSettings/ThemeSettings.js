import React, { useCallback, useState } from 'react';
import {
  useContentWidth,
  useDarkMode,
  useFontSettings,
  useThemeSettings,
} from '../../hooks/theme-hooks';
import Close from '../icons/Close';
import DarkModeOff from '../icons/DarkModeOff';
import DarkModeOn from '../icons/DarkModeOn';
import DarkModeSystem from '../icons/DarkModeSystem';
import WidthCompact from '../icons/WidthCompact';
import WidthFull from '../icons/WidthFull';
import SidePanel from '../SidePanel';
import Option from './Option';
import './ThemeSettings.css';

const ThemeSettings = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const closePanel = useCallback(() => setPanelOpen(false), [setPanelOpen]);
  const togglePanel = useCallback(() => setPanelOpen((v) => !v), [setPanelOpen]);
  const { darkMode, setDarkModeStored } = useDarkMode();
  const { contentWidth, setContentWidth } = useContentWidth();
  useFontSettings();
  useThemeSettings();

  return (
    <>
      <button className='icon-btn' onClick={togglePanel}>
        {darkMode ? <DarkModeOn /> : <DarkModeOff />}
      </button>
      <SidePanel open={panelOpen} onClose={closePanel} className='theme-settings'>
        <div className='theme-settings-header'>
          <p>Reading Options</p>
          <button className='icon-btn' onClick={closePanel}>
            <Close />
          </button>
        </div>
        <Option name='Theme Style'>
          <div className='button-group'>
            <button
              className={darkMode === false ? 'selected' : ''}
              onClick={() => setDarkModeStored(false)}
            >
              <DarkModeOff size={16} /> Light
            </button>
            <button
              className={darkMode === null ? 'selected' : ''}
              onClick={() => setDarkModeStored(null)}
            >
              <DarkModeSystem size={16} /> System
            </button>
            <button
              className={darkMode === true ? 'selected' : ''}
              onClick={() => setDarkModeStored(true)}
            >
              <DarkModeOn size={16} /> Dark
            </button>
          </div>
        </Option>
        <Option name='Content Width'>
          <div className='button-group'>
            <button
              className={contentWidth === 'compact' ? 'selected' : ''}
              onClick={() => setContentWidth('compact')}
            >
              <WidthCompact size={16} /> Compact
            </button>
            <button
              className={contentWidth === 'full' ? 'selected' : ''}
              onClick={() => setContentWidth('full')}
            >
              <WidthFull size={16} /> Full Width
            </button>
          </div>
        </Option>
      </SidePanel>
    </>
  );
};

export default ThemeSettings;
