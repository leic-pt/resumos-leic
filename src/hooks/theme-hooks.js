import { useCallback, useEffect, useState } from 'react';

// Custom hook
export function useFontSettings() {
  const [font, setFont] = useLocalStorage('custom-font');

  useEffect(() => {
    const element = window.document.body;
    element.style.fontFamily = font;
  }, [font, setFont]);
}

// Source: https://usehooks.com/useDarkMode/
export function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  const prefersDarkMode = usePrefersDarkMode();

  const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = 'dark';
    const element = window.document.documentElement;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}

export function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

// Source: https://usehooks.com/useLocalStorage/
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
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

// Source: https://usehooks.com/useMedia/
export function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryLists, values, defaultValue]);

  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, [getValue, mediaQueryLists]);

  return value;
}
