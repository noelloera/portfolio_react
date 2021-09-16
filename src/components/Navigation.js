import { AppBar, Hidden, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer.js";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import { withStyles } from "@material-ui/core/styles";
//MaterialUI Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
const Navigation = (props) => {
  const { classes } = props;
  return (
    <AppBar elevation={0} className={classes.navBar}>
      <Hidden mdUp>
        <MobileDrawer />
      </Hidden>
      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
          <div className={classes.links}>
            {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((name, i) => {
              return (
                <Link
                  duration={400}
                  key={i}
                  to={"#" + name}
                  smooth={true}
                  className={classes.link}
                >
                  <Typography variant="h2">{name}</Typography>
                </Link>
              );
            })}
          </div>
          <div className={classes.navButtons}>
            <Button
              onClick={() => {
                window.open("https://github.com/noelloera");
              }}
              color="secondary"
            >
              <GitHubIcon />
            </Button>
            <Button color="secondary">
              <AttachFileOutlinedIcon />
            </Button>
          </div>
        </Toolbar>
      </Hidden>
    </AppBar>
  );
};

//Got rid of withRouter
export default withStyles(useStyles)(Navigation);
