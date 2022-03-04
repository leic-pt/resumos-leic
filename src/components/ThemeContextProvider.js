import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { useLocalStorage } from '../hooks/theme-hooks';
import availableThemes from '../theme';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeStyle, setThemeStyle] = useLocalStorage('theme-style', 'system');
  const [themeName, setThemeName] = useLocalStorage('theme-name', 'nord');
  const [contentWidth, setContentWidth] = useLocalStorage('content-width', 'compact');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const calculatedTheme =
    themeStyle === 'system' ? (prefersDarkMode ? 'dark' : 'light') : themeStyle;

  console.log(themeStyle, themeName);

  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme(availableThemes[calculatedTheme][themeName]));
  }, [calculatedTheme, themeName]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          themeStyle,
          setThemeStyle,
          themeName,
          setThemeName,
          contentWidth,
          setContentWidth,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
