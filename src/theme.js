import { experimental_sx as sx } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const baseTheme = {
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: sx({
          my: 2,
        }),
      },
    },
  },
};

const nordLightTheme = deepmerge(baseTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#81A1C1',
    },
    secondary: {
      main: '#EBCB8B',
    },
    info: {
      main: '#5E81AC',
    },
    success: {
      main: '#A3BE8C',
    },
    warning: {
      main: '#EBCB8B',
    },
    error: {
      main: '#BF616A',
    },
    background: {
      default: '#f2f4f8',
      paper: '#ffffff',
    },
  },
});

const nordDarkTheme = deepmerge(nordLightTheme, {
  palette: {
    mode: 'dark',
    info: {
      main: '#5E81AC',
    },
    success: {
      main: '#A3BE8C',
    },
    warning: {
      main: '#EBCB8B',
    },
    error: {
      main: '#BF616A',
    },
    background: {
      default: '#242933',
      paper: '#2E3440',
    },
  },
});

const solarizedLightTheme = deepmerge(baseTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#268bd2',
    },
    secondary: {
      main: '#b58900',
    },
    info: {
      main: '#268bd2',
    },
    success: {
      main: '#859900',
    },
    warning: {
      main: '#b58900',
    },
    error: {
      main: '#dc322f',
    },
    background: {
      default: '#eee8d5',
      paper: '#fdf6e3',
    },
  },
});

const solarizedDarkTheme = deepmerge(nordLightTheme, {
  palette: {
    mode: 'dark',
    info: {
      main: '#268bd2',
    },
    success: {
      main: '#859900',
    },
    warning: {
      main: '#b58900',
    },
    error: {
      main: '#dc322f',
    },
    background: {
      default: '#002b36',
      paper: '#073642',
    },
  },
});

const availableThemes = {
  light: {
    nord: nordLightTheme,
    solarized: solarizedLightTheme,
  },
  dark: {
    nord: nordDarkTheme,
    solarized: solarizedDarkTheme,
  },
};

export default availableThemes;
