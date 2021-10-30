import React, { Component } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import { Router, Link } from "react-router-dom";
import DrawerComponent from './Drawer';

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

export function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
        <CssBaseline />
        <Toolbar>
            <Typography variant="h4" className={classes.logo}>
                Navbar
            </Typography>

            {
                isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
            
                        <Link to="/" className={classes.link}> Home </Link>
                        <Link to="/customer-info" className={classes.link}> Customer Info </Link>
                        <Link to="/search-customer" className={classes.link}> Search Customer </Link>
                    
                    </div>
                )
            }
            
        </Toolbar>
        </AppBar>
    );
}

export default NavBar;