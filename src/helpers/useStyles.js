import makeStyles from "@material-ui/styles/makeStyles";
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
    overflow: "visible",
    position: "sticky",
    top: "0",
    height: "3rem",
    borderBottom: "3px solid #3ec6de",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    overflow: "hidden",
    maxWidth: "1200px",
    textAlign: "left",
    display: "flex",
    height: "2.7rem",
    width: "100%",
  },
  link: {
    position: "initial",
    fontFamily: "montserrat",
    ":hover": { color: "#3ec6de" },
    cursor: "pointer",
    paddingLeft: "2rem",
  },
  about: {
    background: "#fff",
    height: "200vh",
  },
});

export default useStyles;
