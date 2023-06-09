import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="absolute" style={{ background: '#5b3e31' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Reviewer
          </Typography>
          <Button href="/Home" color="inherit">Home</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}