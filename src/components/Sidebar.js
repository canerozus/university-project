import React from 'react'
import Box from '@mui/material/Box';
import Button from 'mui-button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { styled } from '@mui/material/styles';
import { border } from '@mui/system';
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: '#1976D2',
    padding: theme.spacing(1),
    borderRadius: '3px',
    color: 'white'
}));

function Sidebar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'space-between',
                width: '17%',
                height: '95%',
                backgroundColor: 'white',
                padding: '2px',
                boxShadow: '2px 0 5px -10px #888',
                marginRight: '10px',

            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', alignContent: 'space-between', flexDirection: 'column', height: '50%' }}>
                <Div>{"Upcoming Activities"}</Div>
                <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', overflowX: 'hidden' }}>

                </Box>
                <ArrowCircleDownIcon sx={{ color: '#1976D2' }} fontSize='large' />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', alignContent: 'space-between', flexDirection: 'column', height: '50%' }}>
                <Div>{"Announcement"}</Div>
                <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', overflowX: 'hidden' }}>

                </Box>
                <ArrowCircleDownIcon sx={{ color: '#1976D2' }} fontSize='large' />
            </Box>
        </Box>
    )
}

export default Sidebar
