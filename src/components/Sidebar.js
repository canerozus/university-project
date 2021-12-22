import React from 'react'
import Box from '@mui/material/Box';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import activitiesSlice from "../store/activitiesSlice";
import announcmentsSlice from '../store/announcmentsSlice';
import { CenterFocusStrong } from '@material-ui/icons';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: '#1976D2',
    padding: theme.spacing(1),
    borderRadius: '3px',
    color: 'white'
}));

function Sidebar() {
    const activities = useSelector(state => state.activities.data)
    const announcements = useSelector(state => state.announcements.data)
    console.log(announcements)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'space-between',
                width: '20%',
                height: '97%',
                backgroundColor: 'white',
                padding: '2px',
                boxShadow: '2px 0 5px -10px #888',
                marginRight: '10px',

            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', alignContent: 'space-between', flexDirection: 'column', height: '50%', WebkitBoxShadow: '0px 4px 10px -5px #888', marginBottom: '5%' }}>
                <Div>{"Upcoming Activities"}</Div>
                <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', overflowX: 'hidden', justifyContent: 'center', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxShadow: '4px 4px 10px -5px #888', marginRight: '5%', marginBottom: '5%', padding: '5%' }}>
                        <img src={activities?.[0].clubImg} width='20%' />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                            <h4 style={{ margin: 0 }}>{activities?.[0].title}</h4>
                            <p style={{ margin: 0, textAlign: 'center', width: '100%' }}>{activities?.[0].day}</p>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <p style={{ margin: 0, textAlign: 'left', width: '100%', marginRight: '5px', }}>{activities?.[0].time}</p>
                                <button style={{ backgroundColor: '#1976D2', borderRadius: '3px', border: '0', cursor: 'pointer', marginLeft: '10px', color:'white', textAlign: 'left' }}> Details></button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxShadow: '4px 4px 10px -5px #888', marginRight: '5%', marginBottom: '5%', padding: '5%' }}>
                        <img src={activities?.[1].clubImg} width='20%' />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                            <h4 style={{ margin: 0 }}>{activities?.[1].title}</h4>
                            <p style={{ margin: 0, textAlign: 'center', width: '100%' }}>{activities?.[1].day}</p>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <p style={{ margin: 0, textAlign: 'left', width: '100%', marginRight: '5px', }}>{activities?.[1].time}</p>
                                <button style={{ backgroundColor: '#1976D2', borderRadius: '3px', border: '0', cursor: 'pointer', marginLeft: '10px', color:'white', textAlign: 'left' }}> Details></button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', WebkitBoxShadow: '4px 4px 10px -5px #888', marginRight: '5%', marginBottom: '5%', padding: '5%' }}>
                        <img src={activities?.[2].clubImg} width='20%' />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                            <h4 style={{ margin: 0 }}>{activities?.[2].title}</h4>
                            <p style={{ margin: 0, textAlign: 'center', width: '100%' }}>{activities?.[2].day}</p>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <p style={{ margin: 0, textAlign: 'left', width: '100%', marginRight: '5px', }}>{activities?.[0].time}</p>
                                <button style={{ backgroundColor: '#1976D2', borderRadius: '3px', border: '0', cursor: 'pointer', marginLeft: '10px', color:'white', textAlign: 'left' }}> Details></button>
                            </Box>
                        </Box>
                    </Box>
                    <ArrowCircleDownIcon sx={{ color: '#1976D2' }} fontSize='large' />
                </Box>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', alignContent: 'space-between', flexDirection: 'column', height: '50%', WebkitBoxShadow: '0px 4px 10px -5px #888', overflowY:'hidden' }}>
                <Div>{"Announcement"}</Div>
                <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', overflowX: 'hidden', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', WebkitBoxShadow: '4px 4px 10px -5px #888', marginRight: '5%', marginBottom: '5%', padding: '5%', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={announcements?.[0].clubImg} width='20%' />
                            <h4 style={{ margin: 0 }}>{announcements?.[0].title}</h4>
                        </Box>
                        <p style={{ overFlowX: 'hidden', overflowY: 'scroll', height: '70px', margin: '0' }}>{announcements?.[0].announcment}</p>
                        <p style={{ margin: '5px' }}>{announcements?.[0].sent}</p>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', WebkitBoxShadow: '4px 4px 10px -5px #888', marginRight: '5%', marginBottom: '5%', padding: '5%', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <img src={announcements?.[1].clubImg} width='20%' />
                            <h4 style={{ margin: 0 }}>{announcements?.[1].title}</h4>
                        </Box>
                        <p style={{ overFlowX: 'hidden', overflowY: 'scroll', height: '70px', margin: '0' }}>{announcements?.[1].announcment}</p>
                        <p style={{ margin: '5px' }}>{announcements?.[1].sent}</p>
                    </Box>
                </Box>
                <ArrowCircleDownIcon sx={{ color: '#1976D2' }} fontSize='large' />
            </Box>
        </Box>
    )
}

export default Sidebar
