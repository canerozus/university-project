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
import { useDispatch } from 'react-redux';
import { useForm, submitHandler } from 'react-hook-form'

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
interface form  {
    name: string;
    location: string;
    information: string;
}

export default function BasicModal({ open, close }) {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("Required");
    const [admin, setAdmin] = useState(false);
    const [selected, setSelected] = useState(new Date());


    const handleDateClick = () => {
        
        setShow(true)
    }


    return (
        <div>

            <Modal
                open={open}
                onClose={() => { close(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "solid 3px black",
                        backgroundColor: "#f8e4e4",
                        width: "1600px",
                        height: "900px",
                        p: 6,
                    }}
                >
                    <Event show={show} setShow={setShow} >
                        <Box sx={{ width: '450px', height: '500px', display: 'flex', flexDirection: 'column' }}>
                            
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
                                                color='black'
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
                        sx={{ height: '100%', width: '100%' }}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        dateClick={handleDateClick}
                        

                    >




                    </FullCalendar>


                </Box>
            </Modal>
        </div>
    );
}
