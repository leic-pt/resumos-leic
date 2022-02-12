import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const nordTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#81A1C1',
    },
    secondary: {
      main: '#EBCB8B',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#242933',
      paper: '#2E3440',
    },
  },
  shape: {
    borderRadius: 20,
  },
});

export default nordTheme;
