import { Avatar, Box, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function ProfileModal({ data }) {

    return (

        <Box sx={{
            width: '400px',
            height: '550px',
            position: "absolute",
            top: "50%",
            left: "58%",
            transform: "translate(-50%, -50%)",
            border: "solid 3px black",
            backgroundColor: "#f8e4e4",
            p: 3,
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-arround'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '75px' }}>
                    <Avatar src='https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg'
                        sx={{ width: 100, height: 100 }}
                        alt='Profile Picture'
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Typography>Name: {'name goes here'}</Typography>
                        <Typography>School: {'school name goes here'}</Typography>
                        <Typography>School ID: {'id goes here'}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>
                            <span style={{ color: "#2074d4" }}>Clubs Subscribed:</span>
                                <Typography>{'club one'}</Typography>
                                <Typography>{'club two'}</Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>
                            <span style={{ color: "#2074d4" }}>Clubs Directed:</span>
                                <Typography>{'club one'}</Typography>
                                <Typography>{'club two'}</Typography>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-evenly'}}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} sx={{cursor:'pointer'}} >
                            <PersonAddIcon style={{ color: "#2074d4" }}/>
                            <p>Add Friend</p>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={2} sx={{cursor:'pointer'}}>
                            <PersonRemoveIcon style={{ color: "#2074d4" }}/>
                            <p> Remove Friend</p>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} sx={{cursor:'pointer'}} >
                            <ChatBubbleIcon style={{color: "#2074d4" }}/>
                            <p> Send message</p>
                        </Stack>

                    </Box>
                </Box>

            </Box>


        </Box >

    )
}

export default ProfileModal
