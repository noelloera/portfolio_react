import React from "react";
import Fade from "react-reveal/Fade";
import { Modal, Grid, Typography, Button } from "@material-ui/core";
//Material UI styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//Icons
import ClearIcon from "@material-ui/icons/Clear";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
const ProjectModal = (props) => {
  const { classes } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [hovered, setHover] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid
      item
      container
      alignContent="stretch"
      className={classes.modal}
      direction="column"
      xs={12}
    >
      <Grid item>
        <img className={classes.modalImage} src={props.coverSrc} />
      </Grid>
      <Grid item className={classes.modalDescription}>
        <Typography variant="subtitle1">{props.name}</Typography>
        <Typography>{props.fullDescription}</Typography>
      </Grid>
      <Grid item className={classes.modalPreviewTechnologies}>
        {props.technologies.map((technology) => {
          return (
            <div className={classes.technologyLayout}>
              <img className={classes.technologies} src={technology.src}></img>
              <p>{technology.title}</p>
            </div>
          );
        })}
      </Grid>
      <Grid item container>
        {" "}
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            window.open(props.url);
          }}
          startIcon={<LanguageIcon />}
        >
          Site
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            window.open(props.gitUrl);
          }}
          startIcon={<GitHubIcon />}
        >
          Code
        </Button>
        <Button onClick={handleClose} startIcon={<ClearIcon />} />
      </Grid>
    </Grid>
  );

  const onHover = (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid>
        <Typography variant="subtitle1" color="primary">
          {props.name}
        </Typography>
      </Grid>
      <Grid>
        <Typography>{props.description}</Typography>
      </Grid>
      <Grid className={classes.modalPreviewTechnologies}>
        {props.technologies.map((technology) => {
          return (
            <img className={classes.technologies} src={technology.src}></img>
          );
        })}
      </Grid>
    </Grid>
  );
  const onLeave = (
    <Grid item container xs={12}>
      <Fade>
        <img src={props.coverSrc} className={classes.projectCoverImage}></img>
      </Fade>
    </Grid>
  );

  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        sm={4}
        xs={12}
        type="button"
        onClick={handleOpen}
        onClose={handleClose}
        className={classes.projectPreview}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {hovered ? <Fade>{onHover}</Fade> : onLeave}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  );
};
ProjectModal.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ProjectModal);
