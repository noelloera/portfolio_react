import theme from "./theme";
const pinkColor = "#e31b86";
const blueColor = "#00b0c7";
/*    <a href="https://www.freepik.com/psd/mockup"
      >Mockup psd created by syifa5610 - www.freepik.com</a
    >*/
const useStyles = () => ({
  //HOME
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
  buttons: {
    height: "2.4rem",
    borderRadius: "0",
  },
  //NAVIGATION
  navBar: {
    background: "#1b242f",
    width: "100%",
    position: "sticky",
    top: "0",
    height: "3.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "4px solid " + blueColor,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0",
      margin: "0 auto",
      textAlign: "center",
      position: "fixed",
      backgroundColor: "transparent",
      borderBottom: "none",
    },
  },
  mobileDrawer: {
    background: "#1b242f",
    borderBottom: "2px solid " + blueColor,
  },
  //Mobile Navigation
  paper: {
    background: "#1b242f",
    color: "white",
    borderBottom: "2px solid " + blueColor,
  },
  drawerListItem: {
    height: "3em",
    fontSize: "1em",
  },
  toolbar: {
    overflow: "hidden",
    maxWidth: "1210px",
    width: "95%",
  },
  link: {
    position: "initial",
    fontFamily: "montserrat",
    fontWeight: "200",
    "&:hover": { color: pinkColor },
    cursor: "pointer",
    paddingLeft: "2.6rem",
  },
  //ABOUT
  section: {
    background: "#fff",
    height: "110vh",
    maxHeight: "1100px",
    textAlign: "center",
    margin: "auto",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "135vh",
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
    width: "200px",
  },
  categoryIcon: {
    paddingTop: "10px",
    width: "70px",
    padding: "15px",
    background: pinkColor,
    borderBottom: "3px solid " + blueColor,
  },
  //techIcons
  allTechnologies: {
    paddingTop: "3rem",
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
    textAlign: "center",
    margin: "1rem",
    display: "flex",
    padding: "0 1rem",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "3rem",
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
    height: "130vh",
    textAlign: "center",
    margin: "auto",
    maxHeight: "900px",
    [theme.breakpoints.down("xs")]: {
      height: "235vh",
      maxHeight: "235vh",
    },
  },
  projectContainer: {
    backgroundColor: "lightgray",
    maxWidth: "1200px",
    margin: "auto",
    overflow: "scroll",
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
    justifyContent: "space-between",
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
  modalDivider: {
    margin: "0.3rem 0",
  },
  modalButtons: {
    display: "flex",
  },
  portfolioTriangle: {
    width: "0",
    height: "0px",
    borderLeft: "80px solid transparent",
    borderRight: "80px solid transparent",
    borderTop: "80px solid #ebebeb",
    margin: "auto",
  },
  //CONTACT
  contactSection: {
    background: "#252934",
    height: "90vh",
    maxHeight: "1100px",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      height: "80vh",
    },
  },
  contactSubheader: {
    color: blueColor,
  },
  contactForm: {
    display: "flex",
    alignItems: "center",
    width: "400px",
    flexDirection: "column",
    margin: "auto",
  },
  contactField: {
    width: "100%",
    backgroundColor: "white",
    color: "purple",
  },
  contactFooter: {
    height: "30vh",
    backgroundColor: "#1b242f",
  },
});

export default useStyles;
