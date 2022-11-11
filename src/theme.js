import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E70013'
    },
    secondary: {
      main: '#022B52'
    }
  },
  typography: {
    fontFamily: 'VisitDenmarkRegular, Roboto, Arial',
    button: {
      textTransform: 'none'
    }
  
  },
  shape: {
    borderRadius: 0
  }
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'VisitDenmarkRegular';
  //         font-style: normal;
  //         font-weight: 400;
  //         src: url(${VisitDenmarkRegular}) format('opentype');
  //       }
  //     `,
  //   },
  // }
});

export default theme;

