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
    <Modal
      open={show}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "500px",
          minHeight: "550px",
          maxHeight:'800px',
          backgroundColor: "white",
          border: "3px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}

export default Event;
