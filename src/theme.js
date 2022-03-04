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

const baseLightTheme = deepmerge(baseTheme, {
  palette: {
    mode: 'light',
    primary: {
      main: '#0576a7',
    },
    secondary: {
      main: '#0576a7',
    },
    info: {
      main: '#4283b9',
    },
    success: {
      main: '#42b983',
    },
    warning: {
      main: '#e7c000',
    },
    error: {
      main: '#da5961',
    },
    text: {
      primary: '#2c3e50',
    },
    markdownColors: {
      red: '#e03e3e',
      green: '#0f7b6c',
      blue: '#0b6e99',
      pink: '#ad1a72',
      purple: '#6940a5',
      yellow: '#dfab01',
      orange: '#d9730d',
      brown: '#64473a',
    },
    background: {
      default: '#fff',
      paper: '#f3f5f7',
    },
  },
});

const baseDarkTheme = deepmerge(baseLightTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a0e4',
    },
    secondary: {
      main: '#00a0e4',
    },
    info: {
      main: '#4283b9',
    },
    success: {
      main: '#42b983',
    },
    warning: {
      main: '#e7c000',
    },
    error: {
      main: '#fb7981',
    },
    text: {
      primary: '#e2e2e2',
    },
    markdownColors: {
      red: '#ff7369',
      green: '#4dab9a',
      blue: '#529cca',
      pink: '#e255a1',
      purple: '#946dd7',
      yellow: '#ffdc49',
      orange: '#ffa334',
      brown: '#937264',
    },
    background: {
      default: '#25272a',
      paper: '#3e3b3b',
    },
  },
});

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
    default: baseLightTheme,
    nord: nordLightTheme,
    solarized: solarizedLightTheme,
  },
  dark: {
    default: baseDarkTheme,
    nord: nordDarkTheme,
    solarized: solarizedDarkTheme,
  },
};

export default availableThemes;
