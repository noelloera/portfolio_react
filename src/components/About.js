import React from "react";
import { Hidden, Typography, Grid, Button } from "@material-ui/core";
import { categories, frontTechs, backTechs } from "../assets/about.js";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import theme from "../helpers/theme";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//MaterialUI Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
//Images
import noelLogo from "../assets/images/noelloeralogo.png";
const About = (props) => {
  const { classes } = props;
  return (
    <section id="#ABOUT" className={classes.section}>
      <header className={classes.header}>
        <Fade left>
          <Typography variant="subtitle1">ABOUT</Typography>
        </Fade>
        <Zoom left>
          <div className={classes.underline}></div>
        </Zoom>
      </header>
      <div className={classes.categories}>
        {categories.map(({ id, title, src, description }) => {
          return (
            <Zoom left delay={id * 150}>
              <div key={id} className={classes.category}>
                <img alt={title} src={src} className={classes.categoryIcon} />
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2">{description}</Typography>
              </div>
            </Zoom>
          );
        })}
      </div>
      <Grid container className={classes.aboutContainer}>
        <Grid item lg={1}></Grid>
        <Grid item lg={4} md={12}>
          <Fade left>
            <Fade left>
              <img src={noelLogo} />
            </Fade>
            <Typography variant="subtitle2">
              Hello I am Noel Loera a full stack developer based in Phoenix, AZ.
              Always eager to expand my knowledge in the ever changing field of
              technology.
            </Typography>
            <Grid item container justifyContent="center">
              <Button
                variant="outlined"
                className={classes.buttons}
                startIcon={<LinkedInIcon />}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/noelloera/");
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                className={classes.buttons}
                startIcon={<GitHubIcon />}
                onClick={() => {
                  window.open("https://github.com/noelloera");
                }}
              >
                GitHub
              </Button>
              <Button
                color="primary"
                variant="outlined"
                className={classes.buttons}
                startIcon={<AttachFileOutlinedIcon />}
                onClick={() => {
                  window.open("");
                }}
              >
                Resume
              </Button>
            </Grid>
          </Fade>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Fade right>
            <div className={classes.allTechnologies}>
              <div className={classes.row}>
                {frontTechs.map(({ id, title, src }) => {
                  return (
                    <Fade delay={[theme.breakpoints.down("md")] ? 0 : 2500}>
                      <div key={id} className={classes.technology}>
                        <img
                          alt={title}
                          src={src}
                          className={classes.techIcons}
                        />
                        <Hidden mdDown>
                          <Typography
                            style={{ fontSize: "0.7rem" }}
                            variant="subtitle2"
                          >
                            {title}
                          </Typography>
                        </Hidden>
                      </div>
                    </Fade>
                  );
                })}
              </div>
              <div className={classes.underline}></div>
              <div className={classes.row}>
                {backTechs.map(({ id, title, src }) => {
                  return (
                    <Fade delay={[theme.breakpoints.down("md")] ? 0 : 2500}>
                      <div key={id} className={classes.technology}>
                        <img
                          alt={title}
                          src={src}
                          className={classes.techIcons}
                        />
                        <Hidden mdDown>
                          <Typography
                            style={{ fontSize: "0.7rem" }}
                            variant="subtitle2"
                          >
                            {title}
                          </Typography>
                        </Hidden>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </Fade>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </section>
  );
};
About.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(About);
