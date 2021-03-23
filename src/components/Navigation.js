import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import useStyles from "../helpers/useStyles";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer.js";

export default function Navigation() {
  const classes = useStyles();
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
                key={i}
                to={"#" + name}
                smooth={true}
                className={classes.link}
              >
                {name}
              </Link>
            );
          })}
        </Toolbar>
      </Hidden>
    </AppBar>
  );
}
