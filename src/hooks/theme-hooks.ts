import { createElement, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import '../styles/themes/black.css';
import '../styles/themes/gruvbox.css';
import '../styles/themes/nord.css';
import '../styles/themes/solarized.css';

export interface FontOption {
  cssFamily: string;
  url?: string;
  displayName: string;
}

type LocalStorageSetter<T> = (value: T | ((prevValue: T | null) => T | null)) => void;

export const fonts: Record<string, FontOption> = {
  roboto: {
    cssFamily: 'Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    displayName: 'Roboto (default)',
  },
  comicNeue: {
    cssFamily: 'Comic Neue, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap',
    displayName: 'Comic Neue',
  },
  indieFlower: {
    cssFamily: 'Indie Flower, cursive',
    url: 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
    displayName: 'Indie Flower',
  },
  nunito: {
    cssFamily: 'Nunito, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
    displayName: 'Nunito',
  },
  openDyslexic: {
    cssFamily: 'OpenDyslexicRegular, Roboto, sans-serif',
    url: 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.min.css',
    displayName: 'OpenDyslexic',
  },
  openSans: {
    cssFamily: 'Open Sans, Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
    displayName: 'Open Sans',
  },
  cursive: {
    cssFamily: 'cursive',
    displayName: 'cursive (system)',
  },
  monospace: {
    cssFamily: 'monospace',
    displayName: 'monospace (system)',
  },
  sansSerif: {
    cssFamily: 'sans-serif',
    displayName: 'sans-serif (system)',
  },
  serif: {
    cssFamily: 'serif',
    displayName: 'serif (system)',
  },
};

export function useFontSettings(): {
  fontLoader: ReactElement | null;
  font: string | null;
  setFont: LocalStorageSetter<string>;
} {
  const [font, setFont] = useLocalStorage<string>('customFont', 'roboto');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    const selectedFont = (font && fonts[font]) || fonts.roboto;
    element.style.fontFamily = selectedFont.cssFamily;
  }, [font]);

  const fontLoader = useMemo(() => {
    const selectedFont = (font && fonts[font]) || fonts.roboto;
    if (!selectedFont.url) return null;

    return createElement('link', { href: selectedFont.url, rel: 'stylesheet' });
  }, [font]);

  return { fontLoader, font, setFont };
}

export function useContentWidth(): {
  contentWidth: string | null;
  setContentWidth: LocalStorageSetter<string>;
} {
  const [contentWidth, setContentWidth] = useLocalStorage<string>('contentWidth', 'compact');

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

export function useTextAlign(): {
  textAlign: string | null;
  setTextAlign: LocalStorageSetter<string>;
} {
  const [textAlign, setTextAlign] = useLocalStorage<string>('textAlign', 'left');

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

export function useThemeSettings(): {
  theme: string | null;
  setTheme: LocalStorageSetter<string>;
} {
  const [theme, setTheme] = useLocalStorage<string>('themeName', 'default');

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

export function useDarkMode(): {
  darkMode: boolean | null;
  setDarkModeStored: LocalStorageSetter<boolean | null>;
} {
  const [darkModeStored, setDarkModeStored] = useLocalStorage<boolean | null>('darkMode', null);
  const prefersDarkMode = usePrefersDarkMode();

  const darkMode = darkModeStored ?? prefersDarkMode;

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T | null, LocalStorageSetter<T>] {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') return null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: LocalStorageSetter<T> = (value) => {
    if (typeof window === 'undefined') return;

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

function usePrefersDarkMode(): boolean {
  const w = typeof window === 'undefined' ? null : window;
  const mediaQuery = w?.matchMedia('(prefers-color-scheme: dark)');

  const [dark, setDark] = useState<boolean>(mediaQuery?.matches || false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const listener = (event: MediaQueryListEvent) => setDark(event.matches || false);
    mediaQuery?.addEventListener('change', listener);

    return () => {
      mediaQuery?.removeEventListener('change', listener);
    };
  }, [mediaQuery]);

  return dark;
}
