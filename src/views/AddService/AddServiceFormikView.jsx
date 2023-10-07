import { Alert, Box, Container, CssBaseline, Paper, TextField, Grid } from "@mui/material";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../context/AuthContext";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import userguide from "../../assets/userguide.png"



export default function AddServiceFormikView({ formik }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { newServiceMessage } = useAuthContext();

    return (
        <>
            <Header title='Crear nuevo servicio' />


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
                                container
                                justifyContent={'center'}
                                direction={'column'}
                                alignItems={'center'}
                                marginTop={3}
                                marginBottom={3}
                            >
                                <Grid
                                    item xs={3}
                                    marginTop={0}
                                    marginBottom={0}
                                >
                                    <img src={userguide} width={500} />
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
                                            sx={{ mt: 3, alignContent: "center" }}
                                    >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Título"
                                            name="name"
                                            autoComplete="name"

                                            type="text"
                                            placeholder="Título de la categoría"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                        {newServiceMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {newServiceMessage}
                                            </Alert>
                                        ) : null}

                                        <LoadingButton
                                            color="secondary"
                                            loadingPosition="start"
                                            startIcon={<SaveIcon />}
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                                sx={{ mt: 2, mb: 2, height: "54px", width: "220px", }}
                                        >
                                            <span>Guardar cambios</span>
                                        </LoadingButton>
                                    </Box>
                                </Box>
                            </Grid>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}