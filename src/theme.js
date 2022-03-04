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
        message: {
          flexGrow: 1,
        },
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
    markdownColors: {
      red: '#b54a55',
      green: '#5a7642',
      blue: '#527196',
      pink: '#84657c',
      purple: '#8e5784',
      yellow: '#7e6c4a',
      orange: '#966251',
      brown: '#90663a',
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
    markdownColors: {
      red: '#c87981',
      green: '#A3BE8C',
      blue: '#5E81AC',
      pink: '#FEC3EE',
      purple: '#B48EAD',
      yellow: '#EBCB8B',
      orange: '#D08770',
      brown: '#bc854b',
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
    markdownColors: {
      red: '#dc322f',
      green: '#859900',
      blue: '#2aa198',
      pink: '#d33682',
      purple: '#6c71c4',
      yellow: '#b58900',
      orange: '#cb4b16',
      brown: '#9e571a',
    },
    background: {
      default: '#eee8d5',
      paper: '#fdf6e3',
    },
  },
});

const solarizedDarkTheme = deepmerge(solarizedLightTheme, {
  palette: {
    mode: 'dark',
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
