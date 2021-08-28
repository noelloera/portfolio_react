import React from "react";
import { Hidden, Typography } from "@material-ui/core";
import useStyles from "../helpers/useStyles.js";
import { categories, frontTechs, backTechs } from "../assets/about.js";
import Fade from "react-reveal/Fade";
import theme from "../helpers/theme";

export default function About() {
  const classes = useStyles();
  return (
    <section id="#ABOUT" className={classes.section}>
      <header className={classes.header}>
        <Fade left duration={600}>
          <Typography variant="subtitle1">ABOUT</Typography>
        </Fade>
        <Fade left delay={500}>
          <div className={classes.underline}></div>
        </Fade>
      </header>
      <div className={classes.categories}>
        {categories.map(({ id, title, src, description }) => {
          return (
            <Fade delay={id * 500}>
              <div key={id} className={classes.category}>
                <img alt={title} src={src} className={classes.categoryIcon} />
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2">{description}</Typography>
              </div>
            </Fade>
          );
        })}
      </div>
      <Fade delay={3000}>
        <div className={classes.allTechnologies}>
          <div className={classes.row}>
            {frontTechs.map(({ id, title, src }) => {
              return (
                <Fade delay={[theme.breakpoints.down("md")] ? 0 : 2500}>
                  <div key={id} className={classes.technology}>
                    <img alt={title} src={src} className={classes.techIcons} />
                    <Hidden smDown>
                      <Typography>{title}</Typography>
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
                    <img alt={title} src={src} className={classes.techIcons} />
                    <Hidden smDown>
                      <Typography>{title}</Typography>
                    </Hidden>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
