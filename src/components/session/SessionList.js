import * as React from "react";
import List from "@mui/material/List";
import { deleteSession } from "../../actions";
import { connect } from "react-redux";
import SessionListItem from "./SessionListItem";

class SessionList extends React.Component {
    render() {
        return (
            <List
                sx={{
                    width: "100%",
                    maxWidth: "960px",
                    bgcolor: "background.paper",
                    margin: "10px auto",
                }}
            >
                {this.props.sessions.map((session) => (
                    <SessionListItem
                        key={session.id}
                        session={session}
                        handleDelete={this.handleDelete}
                    />
                ))}
            </List>
        );
    }

    handleDelete = (id) => {
        this.props.deleteSession(id);
    };
}

const mapDispatchToProps = {
    deleteSession,
};

export default connect(null, mapDispatchToProps)(SessionList);
