import { Fab, IconButton, Modal, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { Avatar, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import universityData from "../data";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import ClubModal from "./ClubModal";
import AddIcon from "@mui/icons-material/Add";

export default function Clubs() {
  const location = useLocation().pathname.split("/")[1];
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(universityData[location]);

    setLoading(false);
  }, [location]);

  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    !isLoading && (
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.3)), url(${data["bg"]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            width: "100%",
            height: "200px",

            alignItems: "center",
            position: "absolute",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Avatar
              sx={{ width: "100%", height: "100%" }}
              alt="University Logo"
              src={data.logo}
            />
          </Box>
        </Box>
        <Box sx={{}}>
          <Box
            sx={{
              px: 30,
              py: 10,
              overflowY: "scroll",
              width: "100%",
              height: "93.4vh",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {data.clubs.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "300px",
                    height: "300px",
                    border: "solid 3px black",
                    margin: "15px",
                    padding: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setModalData(item);
                    setOpen(true);
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(${item.clubImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  ></Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <ClubModal modalData={modalData} open={open} setOpen={setOpen} />
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer'
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <AddIcon sx={{ color: "white", fontSize: "36px" }} />
          </Box>
          <Typography variant="h5">
            <span style={{ color: "blue", fontWeight:'bold' }}>Create a Club</span>
          </Typography>
        </Stack>
      </Box>
    )
  );
}
