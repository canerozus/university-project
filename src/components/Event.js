
import { Button, Box, DialogActions, DialogContent, DialogTitle, Modal, TextField } from '@mui/material';
import React from 'react';


function Event({setShow}) {

const handleClose = () =>  { 
    setShow(false)
}
    return (
        <Dialog open={true} >
            <DialogTitle>Add Event</DialogTitle>
            <form>
                <DialogContent>
                    <TextField placeholder='Title'/>
                    <TextField placeholder='Amount'/>
                </DialogContent>
                <DialogActions>
                    <Button>Add</Button>
                    <Button onClose={handleClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default Event
