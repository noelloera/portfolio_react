import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useStyles from "../helpers/useStyles";

export default function Portfolio() {
  const classes = useStyles();
    return (
      <section
        id="#PORTFOLIO"
        className={classes.section}
        style={{ background: "#ebebeb" }}
      >
        <header className={classes.header}>
          <Fade left>
            <Typography variant="subtitle1">PORTFOLIO</Typography>
            <div className={classes.underline}></div>
          </Fade>
        </header>
        <div>
        </div>
      </section>
    );
}
/*Will contain a mapping of multiple "Tiles.js" which will have their own database of recieving data*/