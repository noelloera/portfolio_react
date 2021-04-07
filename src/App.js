import "./App.css";
import useStyles from "./helpers/useStyles";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home />
      <Navigation />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
