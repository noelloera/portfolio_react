import { AppBar, Toolbar } from "@material-ui/core";
import useStyles from "../helpers/useStyles";

export default function Navigation() {
  const classes = useStyles();
  return (
    <div>
          <AppBar className={classes.navBar}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}
