import { AppBar, CssBaseline, Toolbar, Typography, Button, createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import * as React from 'react';
import './Frontpage.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Frontpage() {
    return(
    <>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline>
        <AppBar position="relative" className="top-bar">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Big Foot Tracker
                </Typography>
                <Button color="inherit">Click me!</Button>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm" className="container">
                    <Typography className="top-header" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Where He Been?
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Have you ever wondered where Big Foot has traveled?
                    </Typography>
                    <div>
                        
                    </div>
                </Container>
            </div>
        </main>
        <footer className="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Made by: Lando, Stephen, Noah and Evan
            </Typography>
        </footer>
        </CssBaseline>
        </ThemeProvider>
    </>
    );  
}

export default Frontpage;
