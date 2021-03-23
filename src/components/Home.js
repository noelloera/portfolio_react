import Canvas from "./Canvas.js";
import useStyles from "../helpers/useStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, animateScroll } from "react-scroll";

export default function Home() {
  const classes = useStyles();
  return (
    <div
      id="#HOME"
      className={classes.home}
      onKeyPress={(event) => {
        //Add on enter event that will show the about page
        console.log(event.key);
        if (event.key === "Enter") {
          console.log(event.key);
          animateScroll.scrollTo(200);
        }
      }}
    >
      <Canvas />
      <div>
        <div className={classes.homeTypo}>
          <Typography variant="h4" color="secondary">
            Hi, my name is
          </Typography>
          <Typography
            style={{ paddingLeft: "0.7rem", fontWeight: "500" }}
            variant="h4"
            color="primary"
          >
            Noel Loera
          </Typography>
          <Typography variant="h4" color="secondary">
            &nbsp;,
          </Typography>
        </div>
        <Typography
          style={{ paddingBottom: "1.5rem" }}
          variant="h4"
          color="secondary"
        >
          I am a Full Stack Developer
        </Typography>
        <Link to="#ABOUT" smooth={true}>
          <Button
            className={classes.homeButton}
            variant="outlined"
            color="primary"
          >
            PROCEED
          </Button>
        </Link>
      </div>
    </div>
  );
}
