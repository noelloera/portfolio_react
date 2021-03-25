import { Typography } from "@material-ui/core";
import useStyles from "../helpers/useStyles.js";

export default function About() {
  const classes = useStyles();
  return (
    <section id="#ABOUT" className={classes.about}>
      <header>
        <Typography variant="subtitle1">ABOUT</Typography>
          </header>
        
      <div>
        <Typography>Responsive</Typography>
      </div>
      <div>
        <Typography>Dynamic</Typography>
      </div>
      <div>
        <Typography>Functional</Typography>
      </div>
      <div>
        <Typography>Efficient</Typography>
      </div>
    </section>
  );
}
