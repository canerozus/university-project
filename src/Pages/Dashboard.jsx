import React from "react";
import Clubs from "../components/Clubs";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', justifyContent:'flex-start', alignItems:'center', width: "100%", height: "93vh" }}>
      <Sidebar />
      <Clubs />

    </div>
  );
}
