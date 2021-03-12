import "./App.css";
import useStyles from "./helpers/useStyles";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home />
      <Navigation />
    </div>
  );
}

export default App;
