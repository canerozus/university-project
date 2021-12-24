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

function Event({ show, setShow, children }) {
  const handleClose = () => {
    setShow(false);
  };
  return (

    <Dialog open={show} onClose={handleClose}>
      <DialogTitle sx={{textAlign:'center'}}>Add Event</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>


    </Dialog >


  );
}

export default Event;
