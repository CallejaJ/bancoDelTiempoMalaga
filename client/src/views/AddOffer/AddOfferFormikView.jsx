import { Alert, Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import StepperAddOffer from "../../components/Steppers/StepperAddOffer";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from "../AddOffer/ui/Checkbox"
import { useAuthContext } from "../../context/AuthContext";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";


export default function AddOfferFormikView({ formik, services }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { newOfferMessage } = useAuthContext();


    return (
        <>
            <Header title="Añadir una oferta" />
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}>
                <Container
                    component="main">
                    <Box
                        sx={{
                            marginTop: 4,
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Grid container>
                            <CssBaseline />
                            <StepperAddOffer />
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
                                        alignItems: "right",
                                    }}
                                >


                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 8, width: "400px" }}
                                    >
                                        <TextField
                                            sx={{ width: 400 }}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Título de la oferta"
                                            name="name"
                                            autoComplete="name"

                                            type="text"
                                            placeholder="Resumen tu oferta"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                        <TextField
                                            sx={{ width: 400 }}
                                            multiline
                                            margin="normal"
                                            required
                                            fullWidth
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

                                            sx={{ width: 400, marginTop: 2, marginBottom: 1 }} name="services_id"
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
                                            sx={{ width: 400 }}
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
                                        <Checkbox type="checkbox" name="acceptedTC" label="Acepto los términos y condiciones del BDT." />
                                        {newOfferMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {newOfferMessage}
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
                                            <span>Crear oferta</span>
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