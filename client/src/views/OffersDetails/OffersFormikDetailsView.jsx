import { usePanelContext } from "../../context/PanelContext";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StepperModifyOffers from "../../components/Steppers/StepperModifyOffers";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Alert, Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';


export default function OffersFormikDetailsView({ formik, services }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { updateOfferMessage } = usePanelContext();


    return (
        <>
            <Header title='Editar tu oferta' />
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
                            <StepperModifyOffers />
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

                                            type="text"
                                            placeholder="Título de la oferta"
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
                                            multiline
                                            id="description"
                                            label="Descripción de la oferta"
                                            name="description"
                                            autoComplete="description"

                                            type="text"
                                            placeholder="Describe que ofreces"
                                            value={values.description}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.description && Boolean(errors.description)}
                                            helperText={touched.description && errors.description}
                                        />
                                        <TextField
                                            label="Tipo de servicio"
                                            placeholder="Por favor, selecciona uno de los servicios de la lista:"

                                            sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                                            name="services_id"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.services_id}
                                            error={touched.services_id && Boolean(errors.services_id)}
                                            helperText={touched.services_id && errors.services_id}
                                        >
                                            {services.map((service) => (
                                                <MenuItem key={service.id} value={`${service.id}`}>
                                                    {service.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="credits"
                                            label="Créditos"
                                            name="credits"
                                            autoComplete="credits"

                                            type="text"
                                            placeholder="Describe el tiempo de la tarea"
                                            value={values.credits}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.credits && Boolean(errors.credits)}
                                            helperText={touched.credits && errors.credits}
                                        />

                                        {updateOfferMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {updateOfferMessage}
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
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}