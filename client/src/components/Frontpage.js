import { ClassNames } from "@emotion/react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from 'react';

function Frontpage() {
    return(
    <>
        <CssBaseline enableColorScheme>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">
                    Big Foot Tracker
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Where He Been?
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Have you ever wondered where Big Foot has traveled?
                    </Typography>
                </Container>
            </div>
        </main>
        <footer>
            <Typography variant="h6" align="center" gutterBottom>
                Made by: Lando, Stephen, Noah and Evan
            </Typography>
        </footer>
        </CssBaseline>
    </>
    );  
}

export default Frontpage;
