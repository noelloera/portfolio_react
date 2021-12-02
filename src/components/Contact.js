import { Box, TextField, Typography, Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
//MaterialUI Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
//EmailJS
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_lntu7SP3AK6rjQNhf0ZZt");

const Contact = (props) => {
  const { classes } = props;
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_i699rf3", "template_f4tnbq7", e.target).then(
      (result) => {
        console.log(result.text);
        alert(
          "Successfully sent message! I will respond to you as quickly as possible."
        );
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
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
          <form action="." onSubmit={sendEmail} className={classes.contactForm}>
            <TextField
              className={classes.contactField}
              label="Name"
              name="name"
              required
            ></TextField>
            <TextField
              className={classes.contactField}
              label="Email:"
              name="email"
              required
            ></TextField>
            <TextField
              className={classes.contactField}
              label="Enter Message..."
              name="message"
              required
              multiline
              rows={5}
            ></TextField>
            <Button
              className={classes.buttons}
              color="primary"
              variant="outlined"
              type="submit"
              style={{ marginTop: "2rem" }}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </header>
      <footer className={classes.contactFooter}>
        <Button
          color="secondary"
          onClick={() => {
            window.open("https://www.linkedin.com/in/noelloera/");
          }}
        >
          <LinkedInIcon />
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            window.open("https://github.com/noelloera");
          }}
        >
          <GitHubIcon />
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            window.open("https://www.facebook.com/noelloeradev/");
          }}
        >
          <FacebookIcon />
        </Button>
        <div className={classes.copyright}>
          <Typography color="secondary">NOEL LOERA</Typography>
          <Typography color="primary">©2021</Typography>
        </div>
      </footer>
    </section>
  );
};
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(Contact);
