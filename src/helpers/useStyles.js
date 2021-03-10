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
  },
  homeTypo: {
    display: "flex",
  },
  homeButton: {
    topMargin: "1rem",
    topPadding: "6rem",
  },
});

export default useStyles;
