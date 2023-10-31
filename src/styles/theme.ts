import { Roboto} from 'next/font/google';
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
    secondary: { main: "#EBEBEB" },
    warning: { main: "#c1004b" },
    text: {
      primary: "#000",
      secondary: "grey",
    },
    background: {
      default: "#ffff",
      paper: "#FFFF",
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;