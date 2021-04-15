import { createMuiTheme } from "@material-ui/core";
//import desired fonts
import "typeface-montserrat";
import "typeface-work-sans";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff3697", contrastText: "#fff" },
    secondary: { main: "#ffffff", contrastText: "#fff" },
  },
  overrides: {
    MuiAppBar: {
      regular: {
        borderBottom: "none",
      },
    },
    MuiToolbar: {
      regular: {
        borderBottom: "none",
        minHeight: "3px",
        "@media (min-width: 600px)": {
          minHeight: "0px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: "400",
      fontSize: "2.7em",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.7em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "1.4em",
      },
    },
    h2: {
      fontWeight: "500",
      fontFamily: "Work Sans",
      fontSize: "1.2em",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: ".8em",
      },
    },
    //Try refactoring subtitle to use h4 attributes
    subtitle1: {
      fontWeight: "600",
      fontSize: "1.8em",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.7em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "1.4em",
      },
    },
    subtitle2: {
      fontWeight: "300",
      fontFamily: "Work Sans",
      fontSize: "1.15em",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "0.8em",
      },
    },
  },
});

export default theme;
