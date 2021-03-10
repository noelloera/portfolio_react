import "./App.css";
import useStyles from "./helpers/useStyles";
import Home from "./components/Home";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home />
    </div>
  );
}

export default App;
