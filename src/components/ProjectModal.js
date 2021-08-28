import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Modal, Grid } from "@material-ui/core";
import image from "../assets/images/grocerylistscover.png";
const useStyles = makeStyles((theme) => ({
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
}));

export default function SimpleModal() {
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
      <Grid item>image</Grid>
      <Grid item>
        <h2 id="simple-modal-title">Text in a modal</h2>
      </Grid>
      <Grid item>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Grid>
    </Grid>
  );

  const onHover = (
    <div>
      <Fade>this is the image being HOVERED placement</Fade>
    </div>
  );
  const onLeave = (
    <div>
      <img src={image} className={classes.coverImage}></img>
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
