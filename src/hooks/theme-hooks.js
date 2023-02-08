import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../styles/themes/black.css';
import '../styles/themes/nord.css';
import '../styles/themes/solarized.css';

const fonts = {
  roboto: {
    cssFamily: 'Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
  },
  comicNeue: {
    cssFamily: 'Comic Neue, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap',
  },
  indieFlower: {
    cssFamily: 'Indie Flower, cursive',
    url: 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
  },
  nunito: {
    cssFamily: 'Nunito, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
  },
  openDyslexic: {
    cssFamily: 'OpenDyslexicRegular, Roboto, sans-serif',
    url: 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.min.css',
  },
  openSans: {
    cssFamily: 'Open Sans, Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
  },
  cursive: {
    cssFamily: 'cursive',
  },
  monospace: {
    cssFamily: 'monospace',
  },
  sansSerif: {
    cssFamily: 'sans-serif',
  },
  serif: {
    cssFamily: 'serif',
  },
};

export function useFontSettings() {
  const [font, setFont] = useLocalStorage('customFont', 'roboto');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    const selectedFont = fonts[font] || fonts.roboto;
    element.style.fontFamily = selectedFont.cssFamily;
  }, [font]);

  const fontLoader = useMemo(() => {
    const selectedFont = fonts[font] || fonts.roboto;
    if (!selectedFont.url) return null;

    return <link href={selectedFont.url} rel='stylesheet'></link>;
  }, [font]);

  return { fontLoader, font, setFont };
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

export function useTextAlign() {
  const [textAlign, setTextAlign] = useLocalStorage('textAlign', 'left');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    if (textAlign === 'justify') {
      element.classList.add('text-justify');
    } else {
      element.classList.remove('text-justify');
    }
  });

  return { textAlign, setTextAlign };
}

export function useThemeSettings() {
  const [theme, setTheme] = useLocalStorage('themeName', 'default');

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
