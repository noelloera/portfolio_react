import makeStyles from "@material-ui/styles/makeStyles";
import theme from "./theme.js";
const useStyles = makeStyles({
  //Home
  home: {
    height: "100vh",
    zIndex: "0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: "3rem",
    },
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
  //Mobile Drawer
  paper: {
    background: "rgba(255, 54, 151, 0.8)",
    color: "white",
    borderBottom: "2px solid #3ec6de",
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
  //About
  about: {
    background: "#fff",
    height: "170vh",
    textAlign: "center",
    margin: "auto",
  },
  underline: {
    borderBottom: "2px solid black",
    width: "10rem",
    margin: "auto",
  },
  header: {
    padding: "4rem",
  },
  categories: {
    margin: "auto",
    maxWidth: "1280px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  category: {
    width: "170px",
  },
  categoryIcon: {
    padding: "18px",
    background: "#3ec6de",
    borderBottom: "4px solid #ff3697",
  },
  //techIcons
  techIcons: {
    width: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: "2rem",
  },
  technology: {
    width: "4rem",
    height: "5rem",
    textAlign: "center",
    margin: "1rem",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
  },
});

export default useStyles;
