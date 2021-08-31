import { Grid, Typography, Paper } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useStyles from "../helpers/useStyles";
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/projects.js";
export default function Portfolio() {
  const classes = useStyles();
  const renderedModals = () => {
    return projects.map((project) => {
      return (
        <Grid item xs={4}>
          <Paper className={classes.projectModals}>
            <ProjectModal
              coverSrc={project.src}
              name={project.name}
              technologies={project.technologies}
              description={project.modal.description}
              fullDescription={project.modal.fullDescription}
              modalSrcs={project.modal.srcs}
              url={project.modal.url}
              gitUrl={project.modal.gitUrl}
            />
          </Paper>
        </Grid>
      );
    });
  };
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
            {renderedModals()}
          </Grid>
        </div>
      </Fade>
    </section>
  );
}
/*Will contain a mapping of multiple "Tiles.js" which will have their own database of recieving data*/
