import React from "react";
import AppBar from "../AppBar";
import Typography from "@mui/material/Typography";

class Practice extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Welcome to the Practice page!
                </Typography>
            </div>
        );
    }
}

export default Practice;
