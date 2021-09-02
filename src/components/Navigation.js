import { AppBar, Hidden, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer.js";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Navigation = (props) => {
  const { classes } = props;
  return (
    <AppBar elevation={0} className={classes.navBar}>
      <Hidden mdUp>
        <MobileDrawer />
      </Hidden>
      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
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
        </Toolbar>
      </Hidden>
    </AppBar>
  );
};

//Got rid of withRouter
export default withStyles(useStyles)(Navigation);
