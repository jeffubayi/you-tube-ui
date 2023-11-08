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
    warning: { main: "#FE0100" },
    info: { main:  "#095ED5" },
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
    body1: {
      fontSize: "10pt",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: "8.5px",
          paddingBottom: "8.5px",
          "& .MuiListItemIcon-root": {
            fontSize: "medium",
          },
          "&.Mui-selected": {
            fontWeight: "bold",
            borderRadius: "0.5rem ",
            color: "#0000",
            padding: "8px",
            "& .MuiListItemIcon-root": {
              color: "#00acc1",
              fontSize: "medium",
            },
            "& .MuiTypography-root": {
              fontWeight: "bold",
            },
          },
          "&:hover": {
            borderRadius: "0.7rem ",
            fontWeight: "bold",
            color:  "black",
            "& .MuiListItemIcon-root": {
              color: "#0000",
            },
          },
        },
      },
    },
  },
});

export default theme;