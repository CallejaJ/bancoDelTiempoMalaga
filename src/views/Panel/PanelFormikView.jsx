import { Alert, Box, Button, Container, CssBaseline, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { AppBar, MenuItem, ListItemText, Toolbar, Menu, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import menu from "../../assets/icons/menu.png"
import MenuIcon from '@mui/icons-material/Menu';
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { ImageUpload } from "./utils/Avatar/ImageUpload";

export default function PanelFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const { updateUserMessage } = useAuthContext();

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
                            Panel de usuario
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
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Grid container>
                            <CssBaseline />
                            <ImageUpload />

                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                component={Paper}
                                elevation={2}
                                square
                            >
                                <Box
                                    sx={{
                                        my: 1,
                                        mx: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography component="h1" variant="h5">
                                        Detalles de
                                    </Typography>
                                    <Typography color="primary" component="h1" variant="h6" sx={{ textTransform: 'uppercase' }}>
                                        {user.name}
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
                                            id="credits"
                                            label="Créditos disponibles"
                                            name="credits"
                                            autoComplete="credits"
                                            autoFocus
                                            type="text"
                                            value={values.credits}
                                        />


                                    </Box>
                                </Box>

                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                component={Paper}
                                elevation={2}
                                square
                            >
                                <Box
                                    sx={{
                                        my: 1,
                                        mx: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 9 }}
                                    >


                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Correo electrónico"
                                            name="email"
                                            autoComplete="newEmail"
                                            autoFocus
                                            type="email"
                                            placeholder="Modifica tu correo electrónico"
                                            value={values.email}

                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Contraseña"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder="Modifica tu contraseña"
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
                                            placeholder="Confirma tu nueva contraseña"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                            helperText={touched.confirmPassword && errors.confirmPassword}
                                        />


                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 3 }}
                                        >
                                            Actualizar
                                        </Button>

                                        {updateUserMessage ? (
                                            <Alert variant="outlined" severity="info" >
                                                {updateUserMessage}
                                            </Alert>
                                        ) : null}

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