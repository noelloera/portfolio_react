import Canvas from "./Canvas.js";
import useStyles from "../helpers/useStyles";
import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

export default function Home() {
  const classes = useStyles();
  return (
    <div id="#HOME" className={classes.home}>
      <Canvas />
      <div className={classes.homeText}>
        <Box pb={3}>
          <div className={classes.homeTypo}>
            <Typography variant="h1" color="secondary">
              Hi, my name is&nbsp;
            </Typography>
            <Typography variant="h1" color="primary">
              Noel Loera
            </Typography>
            <Typography variant="h1" color="secondary">
              
            </Typography>
          </div>
          <Typography variant="h1" color="secondary">
            I'm a Full Stack Developer
          </Typography>
        </Box>
        <Link to="#ABOUT" smooth={true}>
          <Button
            className={classes.homeButton}
            variant="outlined"
            color="primary"
          >
            <Typography>PROCEED</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
