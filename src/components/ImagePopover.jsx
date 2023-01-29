import bigfoot from '../bigfoot.jpg';
import { Popover, Button } from "@mui/material";
import * as React from 'react';

export default function ImagePopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button color="inherit" onClick={handleClick}>
                Click me!
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <img src={bigfoot} alt="bigfoot"/>
            </Popover>
        </div>
    );
}