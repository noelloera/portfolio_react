import { Grid, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/projects.js";
//Material UI Styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const Portfolio = (props) => {
  const { classes } = props;
  const renderedModals = () => {
    return projects.map((project) => {
      return (
        <ProjectModal
          coverSrc={project.src}
          name={project.name}
          technologies={project.technologies}
          description={project.modal.description}
          fullDescription={project.modal.fullDescription}
          modalSrcs={project.modal.srcs}
          url={project.modal.url}
          gitUrl={project.modal.git}
        />
      );
    });
  };
  return (
    <section
      id="#PORTFOLIO"
      className={classes.portfolioSection}
      style={{ background: "#ebebeb" }}
    >
      <header className={classes.header}>
        <Fade left>
          <Typography variant="subtitle1">PORTFOLIO</Typography>
          <div className={classes.underline}></div>
        </Fade>
      </header>
      <Fade>
        <Grid container md={12} className={classes.projectContainer}>
          {renderedModals()}
        </Grid>
      </Fade>
    </section>
  );
};
Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};
//Got rid of withRouter
export default withStyles(useStyles)(Portfolio);
