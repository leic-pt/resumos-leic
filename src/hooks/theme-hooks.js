import { useCallback, useEffect, useState } from 'react';
import '../styles/themes/black.css';
import '../styles/themes/nord.css';
import '../styles/themes/solarized.css';

// Custom hook
export function useFontSettings() {
  const [font, setFont] = useLocalStorage('customFont');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    element.style.fontFamily = font || null;
  }, [font, setFont]);
}

export function useContentWidth() {
  const [contentWidth, setContentWidth] = useLocalStorage('contentWidth', 'compact');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    if (contentWidth === 'full') {
      element.classList.add('full-width');
    } else {
      element.classList.remove('full-width');
    }
  });

  return { contentWidth, setContentWidth };
}

export function useThemeSettings() {
  const [theme, setTheme] = useLocalStorage('themeName');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    [...element.classList]
      .filter((c) => c.startsWith('theme-'))
      .forEach((c) => element.classList.remove(c));
    element.classList.add(`theme-${theme || 'default'}`);
  });

  return { theme, setTheme };
}

export function useDarkMode() {
  const [darkModeStored, setDarkModeStored] = useLocalStorage('darkMode', null);
  const prefersDarkMode = usePrefersDarkMode();

  const darkMode = darkModeStored ?? prefersDarkMode;

  useEffect(() => {
    if (typeof window === 'undefined') return null;

    const element = window.document.body;
    if (darkMode) {
      element.classList.add('dark-mode');
      element.classList.remove('light-mode');
    } else {
      element.classList.add('light-mode');
      element.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return { darkMode: darkModeStored, setDarkModeStored };
}

// Source: https://usehooks.com/useLocalStorage/
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    if (typeof window === 'undefined') return null;

    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function usePrefersDarkMode() {
  const w = typeof window === 'undefined' ? null : window;
  const mediaQuery = w?.matchMedia('(prefers-color-scheme: dark)');

  const [dark, setDark] = useState(mediaQuery?.matches || false);

  useEffect(() => {
    if (typeof window === 'undefined') return null;

    const handler = mediaQuery.addEventListener('change', (event) =>
      setDark(event.matches || false)
    );

    return () => mediaQuery.removeEventListener('change', handler);
  }, [mediaQuery]);

  return dark;
}
