import React from "react";
import Universities from "../components/Universities";
import Sidebar from "../components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Clubs from "../components/Clubs";
import { Box } from "@mui/system";
import CalendarModal from '../components/CalendarModal';

export default function Dashboard({openModal, setOpenModal}) {
import ClubModal from "../components/ClubModal";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "94.5vh",
      }}
    >
      <Sidebar />
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Routes>
          <Route path="/" element={<Universities />} />
          <Route path="/:id" element={<Clubs />} />
          <Route
            path="/:id/:clubId/*"
            element={
              <>
                <Clubs />
                <ClubModal />
              </>
            }
          />
        </Routes>
        <CalendarModal open={openModal} close={setOpenModal} />
      </Box>
    </div>
  );
}
