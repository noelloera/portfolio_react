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
    height: "2.4rem",
    borderRadius: "0",
  },
  navBar: {
    overflow: "visible",
    position: "WebkitSticky",
    position: "sticky",
    top: "0",
    height: "2.7rem",
  },
  toolbar: {
    height: "2.7rem",
    borderBottom: "3px solid #3ec6de",
  },
  link: {
    fontFamily: "montserrat",
    ":hover": { color: "#3ec6de" },
    cursor: "pointer",
    paddingLeft: "2rem",
  },
  about: {
    height: "200vh",
  },
});

export default useStyles;
