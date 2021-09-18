import React from "react";
import AppBar from "../AppBar";
import Typography from "@mui/material/Typography";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
            </div>
        );
    }
}

export default Dashboard;
