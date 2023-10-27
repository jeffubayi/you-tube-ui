import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: "#15192D" },
    secondary: { main: "#000" },
    warning: { main: "#c1004b" },
    divider: "#c8ccd0",
    text: {
      primary: "#000",
      secondary: "#9F7582",
    },
    background: {
      default: "#f7f9fc",
      paper: "#FFFF",
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;