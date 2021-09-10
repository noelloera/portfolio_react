import theme from "./theme";
const contrastColor = "#00b0c7";
const useStyles = () => ({
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
    padding: "0 1rem",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "3.5rem",
      height: "4rem",
      margin: "0.5rem",
      padding: "0",
    },
  },
  techIcons: {
    width: "100%",
  },
  //PORTFOLIO
  portfolioSection: {
    background: "#fff",
    height: "180vh",
    textAlign: "center",
    margin: "auto",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "300vh",
    },
  },
  projectContainer: {
    backgroundColor: "lightgray",
    maxWidth: "1200px",
    margin: "auto",
  },
  //Project
  projectPreview: {
    height: "250px",
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "center",
  },
  projectCoverImage: {
    maxWidth: "100%",
    height: "auto",
  },
  modalTechnologies: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  modalTechnology: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "auto",
  },
  techImg: {
    height: "1em",
    padding: "1em",
  },
  techName: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  coverContainer: {
    height: "300px",
  },
  coverImage: {
    height: "auto",
    maxWidth: "100%",
  },
  carouselContainer: {
    height: "auto",
    maxWidth: "100%",
  },
  modalDescription: {
    width: "100%",
  },
  modal: {
    position: "absolute",
    width: "700px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    outline: 0,
    minHeight: "550px",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: theme.spacing(1, 2, 2),
      minHeight: "450px",
    },
  },
});

export default useStyles;
