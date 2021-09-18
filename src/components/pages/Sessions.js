import React from "react";
import AppBar from "../AppBar";
import Container from "@mui/material/Container";
import AddSessionButton from "../session/AddSessionButton";

class Sessions extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <Container>
                    <AddSessionButton />
                </Container>
            </div>
        );
    }
}

export default Sessions;
