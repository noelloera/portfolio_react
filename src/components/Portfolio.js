import { Grid, Typography, Paper } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useStyles from "../helpers/useStyles";
import ProjectModal from "./ProjectModal";

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
      <Fade delay={1500}>
        <div className={classes.projectContainer}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>
                <ProjectModal />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.projectModals}>project1</Paper>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </section>
  );
}
/*Will contain a mapping of multiple "Tiles.js" which will have their own database of recieving data*/
