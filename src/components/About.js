import { Typography } from "@material-ui/core";
import useStyles from "../helpers/useStyles.js";
import categories from "../assets/about.js";

export default function About() {
  const classes = useStyles();
  return (
    <section id="#ABOUT" className={classes.about}>
      <header>
        <Typography variant="subtitle1">ABOUT</Typography>
      </header>
      <div>
        {categories.map((item, index) => {
          return (
            <div>
              <img alt={item.title} src={item.icon} />
              <Typography>{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
}
