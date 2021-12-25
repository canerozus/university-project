import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useState } from 'react';
import Event from './Event';
import { FormControl, Switch } from '@material-ui/core';
import { InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function ClubModalCalendar({ open, close }) {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("Required");
    const [admin, setAdmin] = useState(false);
    const [selected, setSelected] = useState(new Date());


    const handleDateClick = () => {

        setShow(true)
    }


    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "900px",
                    height: "500px",
                    backgroundColor: "#2074d4",
                    border: "3px solid black",
                    p: 1,
                }}
                alignItems={"center"}

            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#f8e4e4",
                        overflowY: "auto",
                    }}
                >
                    <Event show={show} setShow={setShow} >
                        <Box sx={{  display: 'flex', flexDirection: 'column' }}>

                            <FormControl >
                                <form width='100%'>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                        <InputLabel>Name :</InputLabel>
                                        <OutlinedInput sx={{ width: '80%' }} ></OutlinedInput>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                        <InputLabel>Location :</InputLabel>
                                        <OutlinedInput sx={{ width: '80%' }}></OutlinedInput>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '15px' }}>
                                        <InputLabel>Priority</InputLabel>
                                        <Select sx={{ width: '50%' }}
                                            onChange={(e) => setType(e.target.value)}
                                            defaultValue={type}
                                            value={type}
                                            direction='column'
                                        >
                                            <MenuItem value={'Require'}>Required</MenuItem>
                                            <MenuItem value={'NotRequire'}>Not Required</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '15px' }}>
                                        <InputLabel>Participants</InputLabel>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Switch
                                                value={admin}
                                                color='primary'
                                                onClick={() => {
                                                    setAdmin(!admin);
                                                }}
                                            />
                                            {admin ? (
                                                <Typography>Admin only</Typography>
                                            ) : (
                                                <Typography>Everyone</Typography>
                                            )}
                                        </Stack>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '40px' }}>
                                        <InputLabel>Information</InputLabel>
                                        <TextField fullWidth id="fullWidth" ></TextField>
                                    </Box>

                                    <Button variant="contained" sx={{ width: '100%', marginTop: '50px' }} type='submit'>
                                        Create
                                    </Button>
                                </form>

                            </FormControl>


                        </Box>
                    </Event>

                    <FullCalendar                        
                        plugins={[dayGridPlugin, interactionPlugin]}
                        dateClick={handleDateClick}


                    >
                    </FullCalendar>


                </Box>
            </Box>
        </Box>

    );
}

