import Canvas from "./Canvas.js";
import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Home = (props) => {
  const { classes } = props;
  return (
    <div id="#HOME" className={classes.home}>
      <Canvas />
      <div className={classes.homeText}>
        <Box pb={3}>
          <div className={classes.homeTypo}>
            <Typography variant="h1" color="secondary">
              Hi, my name is&nbsp;
            </Typography>
            <Typography variant="h1" color="primary">
              Noel Loera
            </Typography>
            <Typography variant="h1" color="secondary"></Typography>
          </div>
          <Typography variant="h1" color="secondary">
            I'm a Full Stack Developer
          </Typography>
        </Box>
        <Link to="#ABOUT" smooth={true} duration={400}>
          <Button
            className={classes.homeButton}
            variant="outlined"
            color="primary"
          >
            <Typography>PROCEED</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(Home);
