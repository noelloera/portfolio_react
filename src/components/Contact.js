import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useStyles from "../helpers/useStyles";

export default function Portfolio() {
  const classes = useStyles();
  return (
    <section id="#CONTACT" className={classes.section}>
      <header className={classes.header}>
        <Fade left>
          <Typography variant="subtitle1">CONTACT</Typography>
          <div className={classes.underline}></div>
        </Fade>
      </header>
    </section>
  );
}
