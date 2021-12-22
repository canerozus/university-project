import React from "react";
import Universities from "../components/Universities";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', justifyContent:'flex-start', alignItems:'center', width: "100%", height: "94vh" }}>
      <Sidebar />
      <Universities />

    </div>
  );
}
