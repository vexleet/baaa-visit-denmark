import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'VisitDenmarkRegular, Roboto, Arial'
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
