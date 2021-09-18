import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "@reach/router";

import { white } from "@mui/material/colors";

const iconMapping = [
    {
        icon: (
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon sx={{ color: "white" }} />
            </IconButton>
        ),
        anchor: "left",
    },
];

const pageMapping = [
    {
        text: "Dashboard",
        to: "/dashboard",
    },
    {
        text: "Sessions",
        to: "/sessions",
    },
    {
        text: "Practice",
        to: "/practice",
    },
];

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pageMapping.map((page, index) => (
                    <Link to={page.to}>
                        <ListItem button key={page.text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={page.text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {iconMapping.map((mappingItem) => (
                <React.Fragment key={mappingItem.anchor}>
                    <Button onClick={toggleDrawer(mappingItem.anchor, true)}>
                        {mappingItem.icon}
                    </Button>
                    <Drawer
                        anchor={mappingItem.anchor}
                        open={state[mappingItem.anchor]}
                        onClose={toggleDrawer(mappingItem.anchor, false)}
                    >
                        {list(mappingItem.anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
