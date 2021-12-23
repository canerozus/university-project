import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useState } from 'react';
import Event from './Event';

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
export default function BasicModal({ open, close }) {
    const [show, setShow] = useState(false);
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
                    <Event show={show} setShow={setShow}/>
                    <FullCalendar
                        sx={{ height: '500px', width: '500px' }}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        dateClick={handleDateClick}
                        
                    >


                    </FullCalendar>



                </Box>
            </Modal>
        </div>
    );
}
