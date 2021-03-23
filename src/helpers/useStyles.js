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
    width: "100%",
    position: "sticky",
    top: "0",
    height: "3rem",
    borderBottom: "2px solid #3ec6de",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
      textAlign: "center",
      position: "fixed",
      backgroundColor: "transparent",
      borderBottom: "none",
    },
  },
  mobileDrawer: {
    background: "rgba(255, 54, 151, 0.4)",
  },
  //Mobile Drawer classes override
  paper: {
    background: "rgba(255, 54, 151, 0.6)",
    color: "white",
  },
  drawerListItem: {
    height: "3em",
    fontSize: "1em",
  },

  toolbar: {
    overflow: "hidden",
    maxWidth: "1280px",
    width: "95%",
  },
  link: {
    position: "initial",
    fontFamily: "montserrat",
    fontWeight: "500",
    "&:hover": { color: "#3ec6de" },
    cursor: "pointer",
    paddingLeft: "2rem",
  },

  about: {
    paddingTop: "5rem",
    background: "#fff",
    height: "100vh",
    textAlign: "center",
  },
});

export default useStyles;
