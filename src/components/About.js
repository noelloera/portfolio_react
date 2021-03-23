import { Typography } from "@material-ui/core";
import useStyles from "../helpers/useStyles.js";

export default function About() {
  const classes = useStyles();
  return (
    <section id="#ABOUT" className={classes.about}>
      <Typography variant="subtitle1">ABOUT</Typography>
    </section>
  );
}
