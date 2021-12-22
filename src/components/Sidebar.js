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
    borderRadius:'3px',
    color:'white'
  }));

function Sidebar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'space-evenly',
                width: '17%',
                height: '100%',
                backgroundColor: 'white',
                padding:'2px',
                boxShadow:'5px 0 5px -2px #888'
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height:'50%', margin:'15px'}}>
                 <Div>{"Upcoming Activities"}</Div>
                <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis massa vitae sapien scelerisque aliquam. Sed feugiat porttitor nunc, vitae pharetra lectus tincidunt a. Morbi vehicula mauris sit amet vulputate egestas. Maecenas facilisis ex at ligula euismod, ut mollis dui faucibus. Praesent vulputate sodales congue. Nullam eu ex tellus. Sed non finibus mi. Duis vehicula ullamcorper tempor. Praesent ac felis risus. Vestibulum non sodales ligula.</p>
                </Box>
                <ArrowCircleDownIcon sx={{ color: '#1976D2'}} fontSize='large'/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', height:'50%', margin:'15px' }}>
            <Div>{"Announcement"}</Div>
                <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis massa vitae sapien scelerisque aliquam. Sed feugiat porttitor nunc, vitae pharetra lectus tincidunt a. Morbi vehicula mauris sit amet vulputate egestas. Maecenas facilisis ex at ligula euismod, ut mollis dui faucibus. Praesent vulputate sodales congue. Nullam eu ex tellus. Sed non finibus mi. Duis vehicula ullamcorper tempor. Praesent ac felis risus. Vestibulum non sodales ligula.</p>
                </Box>
                <ArrowCircleDownIcon sx={{ color: '#1976D2'}} fontSize='large'/>
            </Box>
        </Box>
    )
}

export default Sidebar
