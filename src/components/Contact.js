import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Contact = (props) => {
  const { classes } = props;
  return (
    <section id="#CONTACT" className={classes.section}>
      <div className={classes.portfolioTriangle}></div>
      <header className={classes.header}>
        <Fade left>
          <Typography variant="subtitle1">CONTACT</Typography>
          <div className={classes.underline}></div>
        </Fade>
      </header>
    </section>
  );
};
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(Contact);
