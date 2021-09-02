import "./App.css";
import useStyles from "./helpers/useStyles.jsx";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./helpers/theme";
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Home />
        <Navigation />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(App);
