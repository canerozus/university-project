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
}
