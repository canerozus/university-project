import React from "react";
import Universities from "../components/Universities";
import Sidebar from "../components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Clubs from "../components/Clubs";
import { Box } from "@mui/system";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "93.4vh",
      }}
    >
      <Sidebar />
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Routes>
          <Route path="/" element={<Universities />} />
          <Route path="/:id" element={<Clubs />} />
        </Routes>
      </Box>
    </div>
  );
}
