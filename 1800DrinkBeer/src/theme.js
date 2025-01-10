import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#10375C', 
    },
    text: {
      primary: '#F4F6FF', 
    },
    primary: {
      main: '#F3C623', 
      contrastText: '#F4F6FF', 
    },
    secondary: {
      main: '#EB8317',
      contrastText: '#F4F6FF',
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", Arial, sans-serif', 
  },
});

export default theme;
