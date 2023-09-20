import { useAuthContext } from '../../context/AuthContext';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Container, IconButton, InputAdornment } from "@mui/material";
import Footer from "../../components/Footer/Footer"
import bdtregister from "../../assets/bdtregister.png"
import Header from '../../components/Header/Header';
import Checkbox from "../../views/RegisterFormik/utils/UI/Checkbox"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

// const commonStyles = {
//     bgcolor: 'background.paper',
//     borderColor: 'text.primary',
//     m: 1,
//     border: 1,
// };

export default function RegisterFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { registerMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    setTimeout(() => {
        registerMessage
    }, 4000)

    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <>
            <Header title='Registro de usuario' />
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
                marginBottom={3}
                marginTop={2}  
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
                            // sx={{ ...commonStyles, borderRadius: '8px' }}

                        >
                        <CssBaseline />
                        <Grid
                            item
                                xs={6}
                                sm={4}
                                md={3}
                            sx={{
                                backgroundImage: 'url(' + bdtregister + ')',
                                backgroundRepeat: "inherit",
                                backgroundColor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                                backgroundSize: "cover",
                                    backgroundPosition: "right",
                                alignContent: "center",
                                }}
                            />
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}

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
                                    <Typography component="h1" variant="h5" style={{ alignContent: "space-around" }}>
                                        Regístrate
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
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
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
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 5 }}
                                    >

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
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
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

                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 5 }}
                                    >                                      

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

                                        <Checkbox type="checkbox" name="acceptedTC" label="Acepto los términos y condiciones del BDT. del BDT" />

                                        {registerMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {registerMessage}
                                            </Alert>
                                        ) : null}
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 1.8, mb: 2, height: "54px" }}
                                        >
                                            Terminar
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link to="/home" style={{ textDecoration: 'none' }}>
                                                    <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00" }}>
                                                        Volver al inicio
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item xs>
                                                <Link to="/login" style={{ textDecoration: 'none' }} >
                                                    <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#ef6c00", alignContent: "center" }}>
                                                        ¿Tienes cuenta? Iniciar sesion
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

    );
}