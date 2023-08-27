import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Box, Container, AppBar, MenuItem, ListItemText, Toolbar, IconButton, Typography, Menu, Tooltip, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import hourglass5 from "../../assets/hourglass5.gif"
import menu from "../../assets/icons/menu.png"


export default function Header() {

    const { user, logout } = useAuthContext()
    function loggingOut() {
        logout();
    }

    const DifferentPages = [
        { Text: "Inicio", location: "/home", Image: menu },
        { Text: "Panel", location: "/panel", Image: menu },
        { Text: "Ofertas", location: "/offers", Image: menu },
        { Text: "Demandas", location: "/requests", Image: menu },
        { Text: "Guía de uso", location: "/userguide", Image: menu },
    ]

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="absolute" className='gradient_appbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Menu de navegación">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                                <img src={hourglass5} width={40} />
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
                            {DifferentPages.map((Text, index) => (
                                <MenuItem key={index}
                                    onClick={handleCloseUserMenu}
                                    component={Link}
                                    to={Text.location}>
                                    <ListItemText
                                        primary={Text.Text}
                                        sx={{ display: "flex", justifyContent: "space-between" }} />
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: 'whitesmoke' }}>
                        Banco del Tiempo de Málaga
                    </Typography>
                    {user ? (
                        <>
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle style={{ color: '#FFF' }} />
                                </IconButton>
                                <Button style={{ color: '#FFF' }} onClick={loggingOut}>Cerrar sesión</Button>
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
                                <Button>
                                        <Link style={{ color: '#FFF' }} to="/login">Iniciar sesión</Link>
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}