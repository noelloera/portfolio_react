import "./App.css";
import useStyles from "./helpers/useStyles";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
