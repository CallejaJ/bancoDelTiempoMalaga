import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Box, Container, AppBar, MenuItem, ListItemText, Toolbar, IconButton, Typography, Menu, Tooltip, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import menu from "../../assets/icons/menu.png"
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);



export default function Header({ title }) {


    const { user, logout } = useAuthContext()
    function loggingOut() {
        logout();
    }

    const userMenuPages = [
        { Text: "Inicio", location: "/home", Image: menu },
        { Text: "Panel de usuario", location: "/panel", Image: menu },
        { Text: "Ofertas", location: "/offers", Image: menu },
        { Text: "Demandas", location: "/requests", Image: menu },
        { Text: "¿Cómo funciona?", location: "/userguide", Image: menu },
    ]

    const visitorMenuPages = [
        { Text: "Inicio", location: "/home", Image: menu },
        { Text: "Ofertas", location: "/offers", Image: menu },
        { Text: "Demandas", location: "/requests", Image: menu },
        { Text: "¿Cómo funciona?", location: "/userguide", Image: menu },
    ]

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <React.Fragment>
                <AppBar position='fixed' className='gradient_appbar'>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Menu de navegación">
                            <IconButton
                                size="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2, p: 2 }}
                                onClick={handleOpenUserMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {user ? (
                                userMenuPages.map((Text, index) => [
                                    <MenuItem key={index}
                                        onClick={handleCloseUserMenu}
                                        component={Link}
                                        to={Text.location}>
                                        <ListItemText
                                            primary={Text.Text}
                                            sx={{ display: "flex", justifyContent: "space-between" }} />
                                    </MenuItem>
                                ])
                            )
                                : (
                                    visitorMenuPages.map((Text, index) => [
                                        <MenuItem key={index}
                                            onClick={handleCloseUserMenu}
                                            component={Link}
                                            to={Text.location}>
                                            <ListItemText
                                                primary={Text.Text}
                                                sx={{ display: "flex", justifyContent: "space-between" }} />
                                        </MenuItem>
                                    ])
                                )
                            }
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                                textAlign="center"
                        sx={{ flexGrow: 1, color: 'whitesmoke' }}>
                                {title}
                            </Typography>
                    {user ? (
                        <>
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="primary"
                                >
                                    <AccountCircle style={{ color: '#FFF' }} />
                                </IconButton>
                                        <Button 
                                            style={{
                                                color: '#FFF',
                                                m: 1,
                                                textDecoration: "none"
                                            }}
                                            onClick={loggingOut}>Cerrar sesión</Button>
                            </Box>

                        </>
                    ) : (
                        <>
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                </IconButton>
                                            <Button >
                                                <Link style={{
                                                    color: '#FFF',
                                                    m: 1,
                                                    textDecoration: "none"
                                                }}
                                                    to="/login">Iniciar sesión</Link>
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
                <Offset />
            </React.Fragment>

        </>
    );
}