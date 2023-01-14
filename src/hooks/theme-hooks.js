import { useEffect, useState } from 'react';
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
