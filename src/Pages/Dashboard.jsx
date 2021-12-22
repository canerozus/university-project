import * as React from 'react';
import Box from '@mui/material/Box';
import Button from 'mui-button';



export default function BoxSx() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems:'center',
                width: '34vh',
                height: '100%',
                backgroundColor: '#1976D2'
            }}>
                
            <Button variant="contained">Upcoming Activites</Button>
        </Box>

    );
import React from "react";
import Clubs from "../components/Clubs";

export default function Dashboard() {
  return (
    <div style={{ width: "100%", height: "93vh" }}>
      <Clubs />
    </div>
  );
}
