import { createMuiTheme } from "@material-ui/core";
//import desired fonts
import "typeface-montserrat";
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff3697", contrastText: "#fff" },
    secondary: { main: "#ffffff", contrastText: "#fff" },
  },
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: "32px",
        "@media (min-width: 600px)": {
          minHeight: "0px",
        },
      },
    },
  },
  typography: {
    h4: {
      fontSize: "2.5rem",
      fontFamily: "Montserrat",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.7rem",
      },
    },
  },
});

export default theme;
