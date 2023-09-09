import { useAuthContext } from '../../context/AuthContext';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Container, IconButton, InputAdornment } from "@mui/material";
import Footer from "../../components/Footer/Footer"
import bdtlogin2 from "../../assets/bdtlogin2.png"
import Header from '../../components/Header/Header';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


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
            <Header />
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    ></Box>
                    <Grid
                        container
                        justify="center"
                    >
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
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
                                    Iniciar sesión
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
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
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
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Recordarme"
                                    />
                                    {loginMessage ? (
                                        <Alert variant="outlined" severity="info" >
                                            {loginMessage}
                                        </Alert>
                                    ) : null}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Entrar
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                                <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00" }}>
                                                    ¿Olvidaste tu contraseña?                                                </Typography>
                                            </Link>
                                        </Grid>
                                        <Grid item xs>
                                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                                <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00" }}>
                                                    ¿No tienes cuenta? Ir a registro
                                                </Typography>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
            </Container>
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    );
}
