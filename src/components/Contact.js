import { Box, TextField, Typography, Grid, Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Contact = (props) => {
  const { classes } = props;
  return (
    <section id="#CONTACT" className={classes.contactSection}>
      <div className={classes.portfolioTriangle}></div>
      <header className={classes.header}>
        <Fade left>
          <Typography color="secondary" variant="subtitle1">
            CONTACT
          </Typography>
          <div
            style={{ borderBottom: "2px solid white" }}
            className={classes.underline}
          ></div>
        </Fade>
        <Box pt={4}>
          <Typography variant="subtitle2" color="secondary">
            would love to hear from you, lets work together!
          </Typography>
        </Box>
        <Box pt={3}>
          <form className={classes.contactForm}>
            <TextField
              className={classes.contactField}
              label="Name:"
            ></TextField>
            <TextField
              className={classes.contactField}
              label="Email:"
            ></TextField>
            <TextField
              className={classes.contactField}
              label="Enter Message..."
              multiline
              rows={5}
            ></TextField>
            <Button
              className={classes.buttons}
              color="primary"
              variant="outlined"
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </header>

      <footer className={classes.contactFooter}></footer>
    </section>
  );
};
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(Contact);
