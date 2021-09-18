import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class AddSessionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
        };
    }

    handleDescriptionChanged = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    render() {
        return (
            <>
                <DialogTitle>Add New Session</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new session by filling out the 'Description' and
                        'Duration' fields.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                        multiline
                        variant="standard"
                        value={this.state.description}
                        onChange={this.handleDescriptionChanged}
                        maxRows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleAdd}>Add</Button>
                </DialogActions>
            </>
        );
    }

    handleAdd = () => {
        this.props.handleClose();
    };
}

export default AddSessionModal;
