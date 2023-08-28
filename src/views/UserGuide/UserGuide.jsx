import Footer from '../../components/Footer/Footer';
import guide from "../../assets/guide.png"
import credit from "../../assets/credit.png"
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Grid, AppBar, MenuItem, ListItemText, Toolbar, IconButton, Menu, Tooltip, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import menu from "../../assets/icons/menu.png"
import MenuIcon from '@mui/icons-material/Menu';

export default function UserGuide() {

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
                            Funcionamiento del Banco del Tiempo
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

            <div className="boxShadowOrange">
                Hello
            </div>


            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
                <Grid container padding={2} margin={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se trata, en definitiva, de un sistema de ayuda mutua
                            entre personas que viven en la misma comunidad, es
                            la ayuda informal de toda la vida pero en este caso la
                            formalizamos llevando un control de las ofertas y de-
                            mandas de cada persona.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            En el banco del tiempo se intercambian servicios y actividades en donde
                            la unidad de intercambio y de valor siempre es la misma: la hora, el tiempo.
                            Todos los servicios tienen el mismo valor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Una persona ofrece lo que puede y recibe lo que necesita.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                style={{ minHeight: '100vh' }}
                marginTop={1}
                marginBottom={1}
            >
                <Grid item xs={3}>
                    <img src={credit} width={500} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
                <Grid container padding={2} margin={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se trata, en definitiva, de un sistema de ayuda mutua
                            entre personas que viven en la misma comunidad, es
                            la ayuda informal de toda la vida pero en este caso la
                            formalizamos llevando un control de las ofertas y de-
                            mandas de cada persona.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            En el banco del tiempo se intercambian servicios y actividades en donde
                            la unidad de intercambio y de valor siempre es la misma: la hora, el tiempo.
                            Todos los servicios tienen el mismo valor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Una persona ofrece lo que puede y recibe lo que necesita.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                style={{ minHeight: '100vh' }}

            >
                <Grid
                    item xs={3}
                    marginTop={0}
                    marginBottom={0}
                >
                    <img src={guide} width={700} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
                <Grid container padding={2} margin={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se trata, en definitiva, de un sistema de ayuda mutua
                            entre personas que viven en la misma comunidad, es
                            la ayuda informal de toda la vida pero en este caso la
                            formalizamos llevando un control de las ofertas y de-
                            mandas de cada persona.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            En el banco del tiempo se intercambian servicios y actividades en donde
                            la unidad de intercambio y de valor siempre es la misma: la hora, el tiempo.
                            Todos los servicios tienen el mismo valor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Una persona ofrece lo que puede y recibe lo que necesita.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
            <ScrollToTop />
        </>
    );
}