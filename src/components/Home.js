import Canvas from "./Canvas.js";
import useStyles from "../helpers/useStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Canvas />
      <div>
        <div className={classes.homeTypo}>
          <Typography variant="h4" color="secondary">
            Hi, my name is
          </Typography>
          <Typography
            style={{ paddingLeft: "0.7rem", fontWeight: "bold" }}
            variant="h4"
            color="primary"
          >
            Noel Loera
          </Typography>
          <Typography variant="h4" color="secondary">
            ,
          </Typography>
        </div>
        <Typography variant="h4" color="secondary">
          I am a Full stack Developer
        </Typography>
        <Button
          style={{ topPadding: "1rem" }}
          className={classes.homeButton}
          variant="outlined"
          color="primary"
        >
          Projects & Contributions
        </Button>
      </div>
    </div>
  );
}
