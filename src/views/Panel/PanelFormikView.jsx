import { Alert, Box, Button, Container, CssBaseline, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { useAuthContext } from '../../context/AuthContext';
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ImageUpload } from "./utils/Avatar/ImageUpload";
import StepperPanel from "../../components/Steppers/StepperPanel";
import Header from "../../components/Header/Header";
import { useState } from "react";


export default function PanelFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    // Add these variables to your component to track the state
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const { updateUserMessage } = useAuthContext();

    const { user } = useAuthContext()


    return (
        <>
            <Header />
            <Box
                sx={{
                    top: "modal",
                    position: "center",
                    marginTop: 1,
                    marginBottom: 1
                }}
            >
                <Container
                    component="main">
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
                                elevation={0}
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
                                    <Typography component="h5" variant="h6">
                                        Bienvenido
                                    </Typography>
                                    <Typography color="primary" component="h5" variant="h6" sx={{ textTransform: 'uppercase' }}>
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
                                elevation={0}
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
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                component={Paper}
                                elevation={0}
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

                                    <StepperPanel />
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