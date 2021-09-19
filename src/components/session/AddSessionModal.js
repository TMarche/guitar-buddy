import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addSession } from "../../actions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import InputAdornment from "@mui/material/InputAdornment";

class AddSessionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            descriptionError: false,
            duration: "",
            durationError: false,
        };
    }

    handleDescriptionChanged = (e) => {
        this.setState({
            description: e.target.value,
            descriptionError: false,
        });
    };

    handleDurationChanged = (e) => {
        const pattern = /^[0-9]*$/;
        if (pattern.test(e.target.value)) {
            this.setState({
                duration: e.target.value,
                durationError: false,
            });
        }
    };

    render() {
        return (
            <React.Fragment>
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
                        label={
                            this.state.descriptionError
                                ? "Error"
                                : "Description"
                        }
                        fullWidth
                        multiline
                        variant="standard"
                        value={this.state.description}
                        onChange={this.handleDescriptionChanged}
                        maxRows={4}
                        helperText={
                            this.state.descriptionError ? "Enter a value" : ""
                        }
                    />
                    <TextField
                        margin="dense"
                        id="duration"
                        label={this.state.durationError ? "Error" : "Duration"}
                        fullWidth
                        variant="standard"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    minutes
                                </InputAdornment>
                            ),
                        }}
                        value={this.state.duration}
                        onChange={this.handleDurationChanged}
                        helperText={
                            this.state.durationError
                                ? "Enter a numeric value"
                                : ""
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>Cancel</Button>
                    <Button onClick={this.handleAdd}>Add</Button>
                </DialogActions>
            </React.Fragment>
        );
    }

    handleAdd = () => {
        let errors = false;
        if (!this.state.duration) {
            this.setState({
                durationError: true,
            });
            errors = true;
        }

        if (!this.state.description) {
            this.setState({
                descriptionError: true,
            });
            errors = true;
        }

        if (errors) {
            return;
        }

        const payload = {
            description: this.state.description,
            duration: this.state.duration,
        };
        this.props.addSession(uuid(), payload);
        this.props.handleClose();
    };
}

const mapDispatchToProps = {
    addSession,
};

export default connect(null, mapDispatchToProps)(AddSessionModal);
