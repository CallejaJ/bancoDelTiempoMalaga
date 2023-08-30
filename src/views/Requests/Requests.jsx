import { AppBar, Box, Button, Container, IconButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import menu from "../../assets/icons/menu.png"
import MenuIcon from '@mui/icons-material/Menu';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import StepperRequests from "../../components/Steppers/StepperRequests";
import { useAuthContext } from "../../context/AuthContext";
import React from "react";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
// import RequestDataTable from "../../components/RequestData/RequestDataTable";

export default function Requests() {

    const { user, logout } = useAuthContext()
    function loggingOut() {
        logout();
    }

    const userMenuPages = [
        { Text: "Inicio", location: "/home", Image: menu },
        { Text: "Panel", location: "/panel", Image: menu },
        { Text: "Ofertas", location: "/offers", Image: menu },
        { Text: "Demandas", location: "/requests", Image: menu },
        { Text: "Guía de uso", location: "/userguide", Image: menu },
    ]

    const visitorMenuPages = [
        { Text: "Inicio", location: "/home", Image: menu },
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
        <>
            <AppBar position="absolute" className='gradient_appbar'>
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
                            sx={{ flexGrow: 1, color: 'whitesmoke' }}>
                            Demandas del banco del tiempo
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
            <Box>
                <StepperRequests />
            </Box>
            <Box>
                {/* <RequestDataTable /> */}
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}