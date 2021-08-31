import makeStyles from "@material-ui/styles/makeStyles";
import theme from "./theme.js";
const contrastColor = "#00b0c7";
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
      paddingBottom: "4.5rem",
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
    height: "3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "4px solid " + contrastColor,
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
    background: "rgba(255, 54, 151, 0.6)",
    borderBottom: "2px solid " + contrastColor,
  },
  //Mobile Drawer
  paper: {
    background: "rgba(255, 54, 151, 0.95)",
    color: "white",
    borderBottom: "2px solid " + contrastColor,
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
    "&:hover": { color: contrastColor },
    cursor: "pointer",
    paddingLeft: "2.6rem",
  },
  //About
  section: {
    background: "#fff",
    height: "110vh",
    maxHeight: "1100px",
    textAlign: "center",
    margin: "auto",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "130vh",
    },
  },
  underline: {
    borderBottom: "2px solid black",
    width: "6rem",
    margin: "auto",
  },
  header: {
    paddingTop: "5.4rem",
    paddingBottom: "4rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "5rem",
    },
  },
  subheader: {
    paddingTop: "2.5rem",
    padding: "1rem",
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
    paddingTop: "10px",
    width: "80px",
    padding: "15px",
    background: contrastColor,
    //borderBottom: "4px solid #ff3697",
  },
  //techIcons
  allTechnologies: {
    paddingTop: "4.5rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "3rem",
    },
  },
  row: {
    overflow: "hidden",
    margin: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: "2rem",
  },
  technology: {
    width: "4rem",
    height: "4rem",
    textAlign: "center",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "3.5rem",
      height: "4rem",
      margin: "0.5rem",
    },
  },
  techIcons: {
    width: "100%",
  },
  //PORTFOLIO
  projectContainer: {
    backgroundColor: "gray",
    maxWidth: "1200px",
    margin: "auto",
    height: "600px",
  },
  projectModals: {
    height: "250px",
  },
  coverImage: {
    height: "200px",
    width: "100px",
  },
});

export default useStyles;
