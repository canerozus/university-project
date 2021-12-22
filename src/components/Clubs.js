import { Box } from "@mui/material";
import React from "react";

export default function Clubs() {
  return (
    <Box
      sx={{        
        height: "100%",
        ":hover": {
          
        },
        "::before": {
          content: '""',
          display: "block",
          
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
          backgroundImage:
            "url('https://www.remzihoca.com/storage/contents/1600171821-757171.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: " cover",
        },
      }}
    ></Box>
  );
}
