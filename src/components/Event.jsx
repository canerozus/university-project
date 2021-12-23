import { Dialog } from "@material-ui/core";
import {
  Button,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";

function Event({ show, setShow }) {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>Add Event</DialogTitle>
      <form>
        <DialogContent>
          <TextField placeholder="Title" />
          <TextField placeholder="Amount" />
        </DialogContent>
        <DialogActions>
          <Button>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default Event;
