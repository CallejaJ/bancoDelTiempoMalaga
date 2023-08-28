import { Alert, Box, Button, Checkbox, Container, CssBaseline, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { AppBar, MenuItem, ListItemText, Toolbar, Menu, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import menu from "../../assets/icons/menu.png"
import MenuIcon from '@mui/icons-material/Menu';
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import bdtlogin2 from "../../assets/bdtlogin2.png"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";


export default function PanelFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const { updateUserMessage } = useUserContext();

    setTimeout(() => {
        updateUserMessage
    }, 4000)

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
                            Panel del usuario `${user.name}`
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
            <Box
                sx={{
                    top: "modal",
                    position: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}
            >
                <Container
                    component="main" maxWidth="md">
                    <Box
                        sx={{
                            marginTop: 8,
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Grid container>
                            <CssBaseline />
                            <Grid
                                item
                                xs={false}
                                sm={5}
                                md={7}
                                sx={{
                                    backgroundImage: 'url(' + bdtlogin2 + ')',
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: (t) =>
                                        t.palette.mode === "light"
                                            ? t.palette.grey[50]
                                            : t.palette.grey[900],
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={5}
                                component={Paper}
                                elevation={6}
                                square
                            >
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography component="h1" variant="h5">
                                        Datos de usuario
                                    </Typography>
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 1 }}
                                    >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nombre"
                                            name="name"
                                            autoComplete="name"
                                            autoFocus
                                            type="text"
                                            placeholder="Escribe tu nombre"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="surname"
                                            label="Apellidos"
                                            name="surname"
                                            autoComplete="surname"
                                            autoFocus
                                            type="text"
                                            placeholder="Escribe tus apellidos"
                                            value={values.surname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.surname && Boolean(errors.surname)}
                                            helperText={touched.surname && errors.surname}
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="address"
                                            label="Dirección"
                                            name="address"
                                            autoComplete="address"
                                            autoFocus
                                            type="text"
                                            placeholder="Escribe tu dirección"
                                            value={values.address}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.address && Boolean(errors.address)}
                                            helperText={touched.address && errors.address}
                                        />


                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="district"
                                            label="Distrito"
                                            name="district"
                                            autoComplete="district"
                                            autoFocus
                                            type="number"
                                            placeholder="Escribe tu distrito"
                                            value={values.district}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.district && Boolean(errors.district)}
                                            helperText={touched.district && errors.district}
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="pobox"
                                            label="Código postal"
                                            name="pobox"
                                            autoComplete="pobox"
                                            autoFocus
                                            type="text"
                                            placeholder="Escribe tu código postal"
                                            value={values.pobox}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.pobox && Boolean(errors.pobox)}
                                            helperText={touched.pobox && errors.pobox}
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="newEmail"
                                            label="Correo electrónico"
                                            name="newEmail"
                                            autoComplete="newEmail"
                                            autoFocus
                                            type="email"
                                            placeholder="Escribe tu email"
                                            value={values.newEmail}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.newEmail && Boolean(errors.newEmail)}
                                            helperText={touched.newEmail && errors.newEmail}
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Contraseña"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder="Escribe tu contraseña"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                            InputProps={{ // <-- This is where the toggle button is added.
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}

                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password} />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirmar contraseña"
                                            id="confirmPassword"
                                            autoComplete="current-password"
                                            placeholder="Confirma tu contraseña"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                            helperText={touched.confirmPassword && errors.confirmPassword}
                                        />

                                        <Checkbox type="checkbox" name="acceptedTC" label="Acepto los términos y condiciones" />

                                        {updateUserMessage ? (
                                            <Alert variant="outlined" severity="info" >
                                                {updateUserMessage}
                                            </Alert>
                                        ) : null}
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Terminar
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link to="/home">
                                                    <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00" }}>
                                                        Volver al inicio
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item xs>
                                                <Link to="/login">
                                                    <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00" }}>
                                                        ¿Tienes cuenta? Ir a login
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
            <ScrollToTop />
        </>
    )
}