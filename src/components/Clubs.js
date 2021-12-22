import { Box } from "@mui/material";
import React from "react";
import bg from "../assets/bg.png";

export default function Clubs() {
  return (
    <Box
      style={{
        m: 0,
        display: "flex",
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCidJKHciuYbnoJnOMQp0h5eEa49ZAQkIiDA&usqp=CAU)`,
        width: "100vh",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  );
}
