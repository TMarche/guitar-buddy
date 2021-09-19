import React from "react";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

class SessionListItem extends React.Component {
    render() {
        return (
            <ListItem>
                <ListItemText
                    primary={
                        <React.Fragment>
                            {this.props.session.date.format("M/DD/YYYY")}
                            <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                {"  "}
                                {this.props.session.duration} {"minutes"}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={this.props.session.description}
                />
                <IconButton
                    onClick={() =>
                        this.props.handleDelete(this.props.session.id)
                    }
                    edge="end"
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        );
    }
}

export default SessionListItem;
