import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Modal, Grid, Typography, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  onHover: {
    height: "100%",
  },
  allTechnologies: {
    display: "flex",
    justifyContent: "center",
  },
  technologies: {
    height: "1em",
    padding: "1em",
  },
  coverContainer: {
    height: "300px",
  },
  coverImage: {
    height: "auto",
    maxWidth: "100%",
  },
  modalPreview: {
    height: "200px",
    width: "100%",
  },
  modalImage: {
    maxWidth: "100%",
    height: "auto",
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
        <img className={classes.modalImage} src={props.coverSrc} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" id="simple-modal-title">
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
        <Button>Site</Button>
        <Button>Code</Button>
      </Grid>
    </Grid>
  );

  const onHover = (
    <Grid xs={12} itemclassName={classes.onHover}>
      <Fade>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              {props.name}
            </Typography>
            <Typography>{props.description}</Typography>
            <div className={classes.allTechnologies}>
              {props.technologies.map((technology) => {
                return (
                  <img
                    className={classes.technologies}
                    src={technology.src}
                  ></img>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Fade>
    </Grid>
  );
  const onLeave = (
    <div className={classes.coverContainer}>
      <img src={props.coverSrc} className={classes.coverImage}></img>
    </div>
  );

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
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
      </Grid>
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
