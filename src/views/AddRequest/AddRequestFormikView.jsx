import { Alert, Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from "../AddOffer/ui/Checkbox"
import { useAuthContext } from "../../context/AuthContext";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import StepperAddRequest from "../../components/Steppers/StepperAddRequest";


export default function AddRequestFormikView({ formik, services }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { newRequestMessage } = useAuthContext();

    return (
        <>
            <Header title="Añadir una demanda" />
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
                            <StepperAddRequest />
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
                                            label="Título de la demanda"
                                            name="name"
                                            autoComplete="name"

                                            type="text"
                                            placeholder="Resumen tu demanda"
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
                                            label="Descripción de la demanda"
                                            name="description"
                                            autoComplete="description"

                                            type="text"
                                            placeholder="Describe que necesitas"
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
                                        <Checkbox
                                            type="checkbox" name="acceptedTC" label="Acepto los términos y condiciones del BDT." />
                                        {newRequestMessage ? (
                                            <Alert
                                                sx={{ mt: 2, mb: 2, height: "54px" }}
                                                variant="outlined" severity="info" >
                                                {newRequestMessage}
                                            </Alert>
                                        ) : null}
                                        <LoadingButton
                                            color="secondary"
                                            loadingPosition="start"
                                            startIcon={<SaveIcon />}
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                            sx={{ mt: 1, mb: 1, height: "54px" }}
                                        >
                                            <span>Crear demanda</span>
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