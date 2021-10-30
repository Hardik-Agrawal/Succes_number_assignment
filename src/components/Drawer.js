import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(5),
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));
  

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
    return (
    <>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/">Home</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/customer-info" > Customer Info </Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/search-customer" > Search Customer </Link>
                </ListItemText>
            </ListItem>
        
        </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
        </IconButton>
    </>
    );
}
export default DrawerComponent;