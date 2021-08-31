import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Modal, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  allTechnologies: {
    display: "flex",
    justifyContent: "center",
  },
  technologies: {
    height: "1em",
    padding: "1em",
  },
  coverImage: {
    width: "400px",
  },
  modalPreview: {
    height: "200px",
    width: "100%",
  },
  paper: {
    position: "absolute",
    width: "700px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
    outline: 0,
    height: "90%",
  },
  modalImages: {
    width: "100%",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
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
    <Grid container className={classes.paper} direction="column" xs={12}>
      <Grid item>
        <img className={classes.modalImages} src={props.coverSrc} />
      </Grid>
      <Grid item>
        <Typography variant="h1" id="simple-modal-title">
          {props.name}
        </Typography>
        <Typography>{props.fullDescription}</Typography>
      </Grid>
      <Grid item>
        <div className={classes.allTechnologies}>
          {props.technologies.map((technology) => {
            return (
              <img className={classes.technologies} src={technology.src}></img>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );

  const onHover = (
    <div>
      <Fade>
        <Typography variant="h2" color="primary">
          {props.name}
        </Typography>
        <Typography>{props.description}</Typography>
        <div className={classes.allTechnologies}>
          {props.technologies.map((technology) => {
            return (
              <img className={classes.technologies} src={technology.src}></img>
            );
          })}
        </div>
      </Fade>
    </div>
  );
  const onLeave = (
    <div>
      <img src={props.coverSrc} className={classes.coverImage}></img>
    </div>
  );

  return (
    <div>
      <div
        className={classes.modalPreview}
        type="button"
        onClick={handleOpen}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {hovered ? onHover : onLeave}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
