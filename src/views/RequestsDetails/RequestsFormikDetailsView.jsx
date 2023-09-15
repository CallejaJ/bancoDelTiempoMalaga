import { usePanelContext } from "../../context/PanelContext";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Alert, Box, Container, CssBaseline, Grid, Paper, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import StepperModifyRequests from "../../components/Steppers/StepperModifyRequests";



export default function RequestsFormikDetailsView({ formik }) {
    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;
    const { updateRequestMessage,
        deleteRequest, deleteRequestMessage
    } = usePanelContext();


    return (
        <>
            <Header title='Editar tu demanda' />
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
                            <StepperModifyRequests />
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
                                            placeholder="Título de la demanda"
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
                                            id="description"
                                            label="Descripción de la oferta"
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

                                        <TextField
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
                                        {updateRequestMessage ? (
                                            <Alert variant="outlined" severity="info" >
                                                {updateRequestMessage}
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
                                            <span>Guardar cambios</span>
                                        </LoadingButton>
                                        <LoadingButton
                                            onClick={() => deleteRequest()}
                                            color="secondary"
                                            loadingPosition="start"
                                            startIcon={<DeleteIcon />}
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mt: 2, mb: 2 }}
                                        >
                                            <span>Eliminar demanda</span>
                                        </LoadingButton>
                                        {deleteRequestMessage ? (
                                            <Alert variant="outlined" severity="info" >
                                                {deleteRequestMessage}
                                            </Alert>
                                        ) : null}
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