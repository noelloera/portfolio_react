import { AppBar, Toolbar } from "@material-ui/core";
import useStyles from "../helpers/useStyles";
import { Link } from "react-scroll";

export default function Navigation() {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar}>
        <Toolbar className={classes.toolbar}>
          {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((name) => {
            return (
              <Link to={"#" + name} smooth={true} className={classes.link}>
                {name}
              </Link>
            );
          })}
        </Toolbar>
    </AppBar>
  );
}
