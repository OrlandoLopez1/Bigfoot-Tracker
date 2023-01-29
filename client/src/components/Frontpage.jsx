import { AppBar, CssBaseline, styled, Paper, Grid, Box, Toolbar, Typography, createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import * as React from 'react';
import './Frontpage.css'
import ImagePopover from './ImagePopover'
import Map from './Map'
import PredTable from './PredTable';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Frontpage() {
    return(
    <>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline>
        <AppBar position="relative" className="top-bar">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Bigfoot Tracker
                </Typography>
                <ImagePopover></ImagePopover>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography className="top-header" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Where is Bigfoot?
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Have you ever wondered where Bigfoot has traveled? Explore the map to find out!
                    </Typography>
                </Container>
            </div>
            <div>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item map>
                            <Item><Map/></Item>
                        </Grid>
                        <Grid item table>
                            <Item><PredTable/></Item>
                        </Grid>
                    </Grid>
                </Box>
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
