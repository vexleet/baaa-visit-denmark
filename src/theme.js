import {createTheme} from "@mui/material";
import VisitDenmarkRegular from "./assets/fonts/VisitDenmark-Regular.otf";

const theme = createTheme({
  typography: {
    fontFamily: 'VisitDenmarkRegular, Roboto, Arial',
  },
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
})

export default theme;