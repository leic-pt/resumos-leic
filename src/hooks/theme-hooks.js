import { useEffect, useState } from 'react';

// Custom hook
export function useFontSettings() {
  const [font, setFont] = useLocalStorage('customFont');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = window.document.body;
    element.style.fontFamily = font || null;
  }, [font, setFont]);
}

// Source: https://usehooks.com/useLocalStorage/
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;

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
