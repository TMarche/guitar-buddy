import React from "react";
import AppBar from "../AppBar";
import Container from "@mui/material/Container";
import AddSessionButton from "../session/AddSessionButton";
import SessionList from "../session/SessionList";
import { getSessions } from "../../selectors";
import { connect } from "react-redux";

class Sessions extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <Container>
                    <AddSessionButton />
                </Container>
                <SessionList sessions={this.props.sessions.valueSeq()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: getSessions(state),
    };
};

export default connect(mapStateToProps, null)(Sessions);
