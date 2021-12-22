import React from 'react'
import Box from '@mui/material/Box';
import Button from 'mui-button';

function Sidebar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'space-evenly',
                width: '17%',
                height: '100%',
                backgroundColor: '#1976D2'
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin:'50'}}>
                <Button variant="contained" color='white' >Upcoming Activites</Button>
                <Box sx={{ backgroundColor:'white', width:'20vh'}}>
                <p>sdfgsadf</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Button variant="contained" color='white' >Announcements </Button>
                
            </Box>
        </Box>
    )
}

export default Sidebar
