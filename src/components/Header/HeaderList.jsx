//Picture/Icon Imports
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import SupportIcon from '@mui/icons-material/Support';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "@emotion/react"
import CssBaseline from '@mui/material';
import Drawer from '@mui/material';
import Hidden from '@mui/material';
import IconButton from '@mui/icons-material';
import List from '@mui/material';
import ListItem from '@mui/material';
import ListItemText from '@mui/material';
import MenuIcon from '@mui/material';
import CloseIcon from '@mui/icons-material';
import Toolbar from '@mui/material';
import Typography from '@mui/material';
import { makeStyles, useTheme } from '@mui/material';
import { Link } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));


export function HeaderList() {

    const DifferentPages = [
        { Text: "Inicio", location: "/", Image: HomeIcon },
        { Text: "Panel", location: "/panel", Image: AccountBoxIcon },
        { Text: "Ofertas", location: "/offers", Image: PersonSearchIcon },
        { Text: "Demandas", location: "/request", Image: SupportIcon },
        { Text: "Funcionamiento", location: "/userguide", Image: PsychologyAltIcon },
    ]

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <div>
            <List>
                {DifferentPages.map((Text, index) => (
                    <ListItem key={index} button component={Link} to={Text.location}>
                        <img src={Text.Image} width={"25"} height={"25"} />
                        <ListItemText primary={Text.Text} />
                    </ListItem>
                ))}
                {/* <ListItem button href={"example.com"}>
                    <img src={github} width={"25"} height={"25"} />
                    <ListItemText>
                        Github
                    </ListItemText>
                </ListItem> */}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
            </div>
        </div>
    );
}
HeaderList.propTypes = {
    container: PropTypes.object,
};



