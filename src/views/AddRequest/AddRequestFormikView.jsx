import { Alert, Box, Container, CssBaseline, Grid, Paper, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import StepperAddOffer from "../../components/Steppers/StepperAddOffer";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Select from "./ui/Select";
import Checkbox from "../AddOffer/ui/Checkbox"
import { useAuthContext } from "../../context/AuthContext";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";


export default function AddRequestFormikView({ formik }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { newRequestMessage } = useAuthContext();


    // endpoint a getServices
    // const services = [
    //     { value: 1, key: "Cuidado de ancianos" }, { value: 2, key: "Conductor" }, { value: 3, key: "Cuidado de niños" }, { value: 4, key: "Clases de idiomas" },
    //     { value: 5, key: "Limpieza del hogar" }, { value: 6, key: "Reformas" }, { value: 7, key: "Clases de gramática" }, { value: 8, key: "Jardinería" },
    //     { value: 9, key: "Mantenimiento general" }, { value: 10, key: "Clases de matemáticas" }, { value: 11, key: "Clases de música" }, { value: 12, key: "Pintura y bricolaje" },
    //     { value: 13, key: "Clases de pintura" }, { value: 14, key: "Pasear mascotas" }, { value: 15, key: "Fontanería" }, { value: 16, key: "Mudanzas" },
    //     { value: 17, key: "Acompañamiento niños" }, { value: 18, key: "Hacer la compra" }, { value: 19, key: "Apoyo tecnológico" }, { value: 20, key: "Clases de yoga" },
    // ]

    // const [servicesValue, setServicesValue] = useState('');
    // const handleChangeServiceValue = (event) => {
    //     setServicesValue(event.target.value);
    // };

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
                                        sx={{ mt: 8 }}
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
                                            autoFocus
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

                                            margin="normal"
                                            required
                                            fullWidth
                                            id="description"
                                            label="Descripción de la demanda"
                                            name="description"
                                            autoComplete="description"
                                            autoFocus
                                            type="text"
                                            placeholder="Describe que necesitas"
                                            value={values.description}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.description && Boolean(errors.description)}
                                            helperText={touched.description && errors.description}
                                        />
                                        <Select

                                            name="services_id"
                                            style={{ height: '60px', width: "400px", marginTop: 9 }}
                                        >
                                            <option value="">Por favor, selecciona un servicio</option>
                                            <option value="1">Cuidado de ancianos</option>
                                            <option value="2">Conductor</option>
                                            <option value="3">Cuidado de niños</option>
                                            <option value="4">Clases de idiomas</option>
                                            <option value="5">Reparaciones del hogar</option>
                                            <option value="6">Clases de idiomas: gramática</option>
                                            <option value="7">Jardinería</option>
                                            <option value="8">Mantenimiento y reparaciones</option>
                                            <option value="9">Clases de matemáticas</option>
                                        </Select>
                                        {/* <TextField
                                            label="Tipo de servicio"
                                            placeholder="Por favor, selecciona uno de los servicios de la lista:"

                                            sx={{ width: 300 }}
                                            name="services_id"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            onChangeService={handleChangeServiceValue}
                                            value={values.servicesValue}

                                        >
                                            {services.map((service) => (
                                                <MenuItem key={service.value} value={services.value}>
                                                    {service.key}
                                                </MenuItem>
                                            ))}
                                        </TextField> */}

                                        <TextField
                                            sx={{ width: 400 }}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="credits"
                                            label="Créditos"
                                            name="credits"
                                            autoComplete="credits"
                                            autoFocus
                                            type="text"
                                            placeholder="Describe el tiempo de la tarea"
                                            value={values.credits}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.credits && Boolean(errors.credits)}
                                            helperText={touched.credits && errors.credits}
                                        />
                                        <Checkbox type="checkbox" name="acceptedTC" label="Acepto los términos y condiciones del BDT." />
                                        {newRequestMessage ? (
                                            <Alert variant="outlined" severity="info" >
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
                                            sx={{ mt: 2, mb: 2, height: "50px" }}
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