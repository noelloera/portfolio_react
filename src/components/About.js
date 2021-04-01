import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../helpers/useStyles.js";
import { categories, frontTechs, backTechs } from "../assets/about.js";
import Fade from "react-reveal/Fade";

export default function About() {
  const classes = useStyles();
  return (
    <section id="#ABOUT" className={classes.about}>
      <header className={classes.header}>
        <Fade left>
          <Typography variant="subtitle1">ABOUT</Typography>
        </Fade>
        <Fade left delay="1000">
          <div className={classes.underline}></div>
        </Fade>
      </header>
      <div className={classes.categories}>
        {categories.map(({ id, title, src, description }) => {
          return (
            <Fade left delay={id * 250}>
              <div key={id} className={classes.category}>
                <img alt={title} src={src} className={classes.categoryIcon} />
                <Typography variant="h2">{title}</Typography>
                <Typography>{description}</Typography>
              </div>
            </Fade>
          );
        })}
      </div>
      <header className={classes.header}>
        <Typography variant="h2">TECHNOLOGIES</Typography>
      </header>
      <div className={classes.allTechnologies}>
        <div className={classes.row}>
          {frontTechs.map(({ id, title, src }) => {
            return (
              <Fade left delay={id * 250}>
                <div key={id} className={classes.technology}>
                  <img alt={title} src={src} className={classes.techIcons} />
                  <Typography>{title}</Typography>
                </div>
              </Fade>
            );
          })}
        </div>
        <div className={classes.underline}></div>

        <div className={classes.row}>
          {backTechs.map(({ id, title, src }) => {
            return (
              <Fade left delay={id * 250}>
                <div key={id} className={classes.technology}>
                  <img alt={title} src={src} className={classes.techIcons} />
                  <Typography>{title}</Typography>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
