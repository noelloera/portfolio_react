import {
  IconButton,
  List,
  ListItem,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-scroll";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const MobileDrawer = (props) => {
  const { classes } = props;
  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      style={{ background: "transparent" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((text, i) => (
          <Link
            to={`#${text}`}
            smooth
            duration={400}
            onClick={toggleDrawer("top", false)}
          >
            <ListItem
              primary={text}
              key={text}
              className={classes.drawerListItem}
            >
              <Typography variant="h2">{text}</Typography>
            </ListItem>
            {i < 3 ? <Divider /> : null}
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.mobileDrawer}>
      <IconButton onClick={toggleDrawer("top", true)}>
        <MenuSharpIcon color="secondary" />
      </IconButton>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </div>
  );
};
MobileDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(MobileDrawer);
