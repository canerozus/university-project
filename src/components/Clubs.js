import { Box } from "@mui/material";
import React from "react";
import bg from "../assets/bg.png";

export default function Clubs() {
  return (
    <Box
      style={{
        m: 0,
        display: "flex",

        width: "100%",
        height: "100%",

        '&::before': {
         
          content: '""',
          top: "0px",
          bottom: "0px",
          right: "0px",
          left: "0px",
        },
      }}
    ></Box>
  );
}
