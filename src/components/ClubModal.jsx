import { Modal, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { Avatar, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
export default function ClubModal({ modalData, open, setOpen }) {
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "58%",
          transform: "translate(-50%, -50%)",
          border: "solid 3px black",
          backgroundColor: "#f8e4e4",
          width: "1100px",
          height: "800px",
          p: 6,
        }}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            right: 5,
            top: 5,
            fontSize: 48,
            color: "purple",
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(false);
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            alt="club"
            src={modalData?.clubImg}
            style={{ width: "200px", height: "200px" }}
          />

          <Stack spacing={2} justifyContent="center">
            <Typography variant="h4">
              <span style={{ color: "purple" }}>{modalData?.clubName}</span>
            </Typography>
            <Typography variant="h5" sx={{ display: "flex" }}>
              <span style={{ color: "purple", fontWeight: "bold" }}>Type:</span>{" "}
              {modalData?.type}
            </Typography>
            <Typography variant="h5">
              <span style={{ color: "purple", fontWeight: "bold" }}>
                School:
              </span>{" "}
              {modalData?.school}
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            direction="row"
            justifyContent="center"
            sx={{ px: 5 }}
          >
            <Stack spacing={1} alignItems="center" sx={{ cursor: "pointer" }}>
              <HomeIcon fontSize="large" />
              <Typography variant="body1">Home</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ cursor: "pointer" }}>
              <EventIcon fontSize="large" />
              <Typography variant="body1">Calendar</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ cursor: "pointer" }}>
              <PeopleIcon fontSize="large" />
              <Typography variant="body1">People</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ cursor: "pointer" }}>
              <SettingsIcon fontSize="large" />
              <Typography variant="body1">Settings</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ cursor: "pointer" }}>
              <ChatBubbleIcon fontSize="large" />
              <Typography variant="body1">Chat</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ mt: 15, display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Box
              sx={{
                border: "solid 3px purple",
                width: "350px",
                height: "180px",
                py: 1,
                px: 2,
                overflowY: "scroll",
                backgroundColor: "#b0b4e4",
                mb: 5,
              }}
            >
              <Typography variant="h5">
                <span style={{ color: "red" }}>About:</span>{" "}
              </Typography>
              <Typography variant="body1">{modalData?.about} </Typography>
            </Box>
            <Box>
              <Stack spacing={2} direction="row" alignItems="center">
                <Typography variant="h5">
                  <span style={{ color: "red" }}>Contact:</span>{" "}
                </Typography>
                <Avatar
                  alt="contact"
                  src={modalData?.contact.contactImg}
                  sx={{width:48, height:48}}
                />
                <Typography variant="body1">
                  <span style={{ color: "black" }}>
                    {modalData?.contact.contactName}
                  </span>{" "}
                </Typography>
                <Box
                  backgroundColor="purple"
                  sx={{
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChatBubbleIcon sx={{ color: "white" }} />
                </Box>
              </Stack>
              <Box sx={{ mt: 7 }}>
                <Typography variant="h6">
                  <span style={{ color: "red" }}>
                    {modalData?.acceptOthers
                      ? "*This club accepts from other schools."
                      : "*This club does not accept from other schools."}
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "solid 3px purple",
              width: "550px",
              height: "380px",
              py: 2,
              px: 3,
              overflowY: "scroll",
              backgroundColor: "#b0b4e4",
            }}
          >
            <Stack spacing={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Typography variant="h5">
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Announcements
                  </span>
                </Typography>
              </Box>
              {modalData?.announcements.map((item,index) => {
                return (
                  <Stack spacing={2} direction='row' key={index}>
                    <Avatar src={modalData?.contact.contactImg} />
                    <Typography variant="body1">{item.announcmentDesc}</Typography>
                  </Stack>
                );
              })}
              {modalData?.announcements.map((item, index) => {
                return (
                  <Stack spacing={2} direction='row'  key={index}>
                    <Avatar src={modalData?.contact.contactImg} />
                    <Typography variant="body1">{item.announcmentDesc}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
