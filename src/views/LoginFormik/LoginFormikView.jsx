import { useAuthContext } from '../../context/AuthContext';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Header from '../../components/Header/Header';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Checkbox, Container, FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import Footer from "../../components/Footer/Footer"
import wallpaperlogin from "../../assets/wallpaperlogin.png"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { grey } from '@mui/material/colors';


export default function LoginFormikView({ formik }) {


    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { loginMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    setTimeout(() => {
        loginMessage
    }, 4000)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    return (
        <>
            <Header title='Iniciar sesión' />
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
                marginBottom={3}
                marginTop={3}
                style={{ position: 'sticky' }}
            >
                <Container
                >
                    <Box
                        sx={{
                            marginTop: 3,
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container
                        >
                            <CssBaseline />
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}

                            >
                                <img src={wallpaperlogin} />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={5}

                            >
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginLeft: "122px"
                                    }}
                                >
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
                                            id="email"
                                            label="Correo electrónico"
                                            name="email"
                                            autoComplete="email"

                                            type="email"
                                            placeholder="Escribe tu email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
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
                                            type={showPassword ? "text" : "password"}
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
                                            helperText={touched.password && errors.password}
                                        />

                                        <FormControlLabel
                                            control={<Checkbox

                                                value="remember"
                                            />}
                                        label="Recordarme"
                                            style={{ fontSize: "8px", color: grey[800] }}
                                        />
                                        {loginMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {loginMessage}
                                            </Alert>
                                        ) : null}
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ height: "50px", mt: 3, mb: 2 }}
                                        >
                                            Entrar
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                                    <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00", alignContent: "center" }}>
                                                        ¿No tienes cuenta? Ir a registro de usuario
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
            <ScrollToTop />
            <Footer />
        </>
    );
}
