import * as React from "react";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddSessionModal from "./AddSessionModal";

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Fab
                onClick={handleOpen}
                color="primary"
                size="medium"
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                }}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <AddSessionModal handleClose={handleClose} />
            </Dialog>
        </div>
    );
}
