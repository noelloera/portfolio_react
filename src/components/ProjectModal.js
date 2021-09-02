import React from "react";
import Fade from "react-reveal/Fade";
import { Modal, Grid, Typography, Button } from "@material-ui/core";
//Material UI styling
import useStyles from "../helpers/useStyles.jsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
    <Grid container className={classes.modal} direction="column" xs={12}>
      <Grid item>
        <img className={classes.modalImage} src={props.coverSrc} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" id="simple-modal-title">
          {props.name}
        </Typography>
        <Typography>{props.fullDescription}</Typography>
      </Grid>
      <Grid item>
        <div className={classes.modalPreviewTechnologies}>
          {props.technologies.map((technology) => {
            return (
              <img className={classes.technologies} src={technology.src}></img>
            );
          })}
        </div>
        <Button>Site</Button>
        <Button>Code</Button>
      </Grid>
    </Grid>
  );

  const onHover = (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid>
        <Typography variant="h2" color="primary">
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
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      md={4}
      xs={12}
      type="button"
      onClick={handleOpen}
      className={classes.projectPreview}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hovered ? <Fade>{onHover}</Fade> : onLeave}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Grid>
  );
};
ProjectModal.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ProjectModal);
