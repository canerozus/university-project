import { Box, Container } from "@mui/material";
import React from "react";
import universityData from "../data";
import { Link } from "react-router-dom";

export default function Universities() {
  return (
    <Box
      sx={{
        margin: 0,
        backgroundColor: "#f8e4e4",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {universityData.map((item, index) => {
        {
          console.log(item);
        }
        return (
          <Link to={`/university/${index}`}
            style={{
              width: "350px",
              height: "350px",
              margin: "25px",
              border: "solid 3px black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "90%",
                backgroundImage: `url(${item.logo})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Link>
        );
      })}
    </Box>
  );
}
