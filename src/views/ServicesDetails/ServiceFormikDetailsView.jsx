import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Alert, Box, Container, CssBaseline, Grid, Paper, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import StepperModifyServices from "../../components/Steppers/StepperModifyServices";
import { useAuthContext } from "../../context/AuthContext";



export default function ServiceFormikDetailsView({ formik }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { updateServiceMessage } = useAuthContext();


    return (
        <>
            <Header title='Editar la categoría' />
            <Box
                sx={{
                    top: "modal",
                    position: "center",
                    marginTop: 3,
                    marginBottom: 1
                }}
            >
                <Container
                    component="main">
                    <Box
                        sx={{
                            marginTop: 6,
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Grid container>
                            <CssBaseline />
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
                                        sx={{ mt: 8 }}
                                    >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Título"
                                            name="name"
                                            autoComplete="name"
                                            autoFocus
                                            type="text"
                                            placeholder="Título de la categoría"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                        {updateServiceMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {updateServiceMessage}
                                            </Alert>
                                        ) : null}

                                        <LoadingButton
                                            color="secondary"
                                            loadingPosition="start"
                                            startIcon={<SaveIcon />}
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                            sx={{ mt: 2, mb: 2, height: "54px" }}
                                        >
                                            <span>Guardar cambios</span>
                                        </LoadingButton>
                                    </Box>
                                </Box>
                            </Grid>
                            <StepperModifyServices />
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}