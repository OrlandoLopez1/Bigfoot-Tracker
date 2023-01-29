import Box from '@mui/material/Box';
import * as React from 'react';

function Frontpage() {
    return(
    <div>
        <Box sx={{ 
             typography: 'title', 
             textAlign: 'center',
             fontWeight: 'bold',
             fontFamily: 'monospace',
             color: 'white',
             lineHeight: '5',
             fontSize: 30
            }}>
                The BigFoot Tracker
            </Box>
        <Box sx={{ 
             typography: 'body1',
             textAlign: 'center',
             fontFamily: 'monospace',
             color: 'white',
             lineHeight: '5',
             fontWeight: 'bold'
         }}>
            Where He Been:
        </Box>
        <Box sx={{
             typography: 'body1',
             textAlign: 'center',
             fontFamily: 'monospace',
             color: 'white',
             lineHeight: '40',
             fontWeight: 'bold'
             }}>
            Where He Might Be:
        </Box>
    </div>
    );  
}

export default Frontpage
