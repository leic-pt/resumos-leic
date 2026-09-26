import { useEffect, useState } from 'react';
import { fonts, readingDefaults, readingStorageKeys } from '../lib/reading-options';

import '../styles/themes/black.css';
import '../styles/themes/gruvbox.css';
import '../styles/themes/nord.css';
import '../styles/themes/solarized.css';

type LocalStorageSetter<T> = (value: T | ((prevValue: T | null) => T | null)) => void;

export function useFontSettings(): {
  font: string | null;
  setFont: LocalStorageSetter<string>;
} {
  const [font, setFont] = useLocalStorage<string>(
    readingStorageKeys.customFont,
    readingDefaults.customFont
  );
  const normalizedFont =
    typeof font === 'string' && Object.prototype.hasOwnProperty.call(fonts, font)
      ? font
      : readingDefaults.customFont;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const selectedFont = fonts[normalizedFont];
    window.document.body.style.fontFamily = selectedFont.cssFamily;

    let stylesheet = window.document.getElementById(
      'selected-font-stylesheet'
    ) as HTMLLinkElement | null;
    if (!stylesheet) {
      stylesheet = window.document.createElement('link');
      stylesheet.id = 'selected-font-stylesheet';
      stylesheet.rel = 'stylesheet';
      window.document.head.appendChild(stylesheet);
    }

    if (selectedFont.url) {
      stylesheet.href = selectedFont.url;
    } else {
      stylesheet.removeAttribute('href');
    }
  }, [normalizedFont]);

  return { font: normalizedFont, setFont };
}

export function useContentWidth(): {
  contentWidth: string | null;
  setContentWidth: LocalStorageSetter<string>;
} {
  const [contentWidth, setContentWidth] = useLocalStorage<string>(
    readingStorageKeys.contentWidth,
    readingDefaults.contentWidth
  );
  const normalizedContentWidth = contentWidth === 'full' ? 'full' : readingDefaults.contentWidth;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    if (normalizedContentWidth === 'full') {
      element.classList.add('full-width');
    } else {
      element.classList.remove('full-width');
    }
  }, [normalizedContentWidth]);

  return { contentWidth: normalizedContentWidth, setContentWidth };
}

export function useTextAlign(): {
  textAlign: string | null;
  setTextAlign: LocalStorageSetter<string>;
} {
  const [textAlign, setTextAlign] = useLocalStorage<string>(
    readingStorageKeys.textAlign,
    readingDefaults.textAlign
  );
  const normalizedTextAlign = textAlign === 'justify' ? 'justify' : readingDefaults.textAlign;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    if (normalizedTextAlign === 'justify') {
      element.classList.add('text-justify');
    } else {
      element.classList.remove('text-justify');
    }
  }, [normalizedTextAlign]);

  return { textAlign: normalizedTextAlign, setTextAlign };
}

export function useThemeSettings(): {
  theme: string | null;
  setTheme: LocalStorageSetter<string>;
} {
  const [theme, setTheme] = useLocalStorage<string>(
    readingStorageKeys.themeName,
    readingDefaults.themeName
  );
  const normalizedTheme =
    typeof theme === 'string' && theme.length > 0 && /^[A-Za-z0-9_-]+$/.test(theme)
      ? theme
      : readingDefaults.themeName;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    [...element.classList]
      .filter((c) => c.startsWith('theme-'))
      .forEach((c) => element.classList.remove(c));
    element.classList.add(`theme-${normalizedTheme}`);
  }, [normalizedTheme]);

  return { theme: normalizedTheme, setTheme };
}

export function useDarkMode(): {
  darkMode: boolean | null;
  setDarkModeStored: LocalStorageSetter<boolean | null>;
} {
  const [darkModeStored, setDarkModeStored] = useLocalStorage<boolean | null>(
    readingStorageKeys.darkMode,
    readingDefaults.darkMode
  );
  const prefersDarkMode = usePrefersDarkMode();

  const normalizedDarkModeStored =
    typeof darkModeStored === 'boolean' ? darkModeStored : readingDefaults.darkMode;
  const darkMode = normalizedDarkModeStored ?? prefersDarkMode;

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

  return { darkMode: normalizedDarkModeStored, setDarkModeStored };
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
