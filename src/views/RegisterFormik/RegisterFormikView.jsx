import { useAuthContext } from '../../context/AuthContext';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Container } from "@mui/material";
import Footer from "../../components/Footer/Footer"
import bdtlogin from "../../assets/bdtlogin.png"


export default function RegisterFormikView({ formik }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { registerMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    setTimeout(() => {
        registerMessage
    }, 4000)


    return (
        <>
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        marginTop: 8,
                        marginBottom: 5
                    }}
                >
                    <Grid container>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(' + bdtlogin + ')',
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
                                    Registro de usuario
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
                                        type="text"
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}

                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        type="text"
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}

                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        type="text"
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}

                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        type="text"
                                        placeholder="Escribe tu email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}

                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        type="text"
                                        placeholder="Escribe tu email"
                                        value={values.newEmail}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.email && touched.email ? "input-error" : ""}

                                    />
                                    {errors.email && touched.email && (
                                        <p className="error">{errors.email}</p>
                                    )}
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
                                        type="password"

                                        className={errors.password && touched.password ? "input-error" : ""}
                                    />
                                    {errors.password && touched.password && (
                                        <p className="error">{errors.password}</p>
                                    )}
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Recordarme"
                                    />
                                    {registerMessage ? (
                                        <Alert variant="outlined" severity="info" >
                                            {registerMessage}
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
                                            <Link href="#" variant="body2">
                                                ¿Olvidaste tu contraseña?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                {"¿No tienes cuenta? Ir a registro"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </>

    );
}