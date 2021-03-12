import makeStyles from "@material-ui/styles/makeStyles";
import theme from "./theme.js";
const useStyles = makeStyles({
  home: {
    height: "100vh",
    zIndex: "0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
    position: "relative",
  },
  homeTypo: {
    display: "flex",
  },
  homeButton: {
    height: "2.4rem",
    borderRadius: "0",
  },
  navBar: {
    zIndex: "0",
    position: "relative",
  },
});

export default useStyles;
