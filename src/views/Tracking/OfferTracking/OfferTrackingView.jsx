import { Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import { LoadingButton } from "@mui/lab";
import EmailIcon from '@mui/icons-material/Email';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Footer from "../../../components/Footer/Footer";
import OfferMessagesList from "../../../components/MessagesList/OfferMessagesList/OfferMessagesList";
import StepperSendMessage from "../../../components/Steppers/StepperSendMessage";
import clockbdt from "../../../assets/clockbdt.png"
import StepperTrackingOffer from "../../../components/Steppers/StepperTrackingOffer";



export default function OfferTrackingView({ formik, services,
    users
}) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    return (
        <>
            <Header title='Información de ofertas' />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={4}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={clockbdt} width={600} />
                </Grid>
            </Grid>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
                padding={1}
                margin={1}
            >
                <StepperSendMessage />

            </Box>
            <Box
                padding={1}
                margin={1}
                display={'flex'}
                justifyContent={'center'}>
            </Box>
            <Box
                sx={{
                    top: "modal",
                    position: "center",
                    marginTop: 1,
                    marginBottom: 1
                }}
            >
                <OfferMessagesList />
                <Container
                    component="main">
                    <Box
                        sx={{
                            marginTop: 3,
                            marginBottom: 3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Grid container>
                            <CssBaseline />
                            <StepperTrackingOffer />
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
                                            label="Usuario ofertante"
                                            name="offer_user_name"
                                            autoComplete="offer_user_name"
                                            placeholder="Usuario ofertante"
                                            autoFocus
                                            type="text"
                                            onBlur={handleBlur}
                                            value={values.offer_user_name}
                                        />
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
                                            label="Descripción de la oferta"
                                            name="description"
                                            autoComplete="description"
                                            autoFocus
                                            type="text"
                                            placeholder="Describe que ofreces"
                                            value={values.description}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.description && Boolean(errors.description)}
                                            helperText={touched.description && errors.description}
                                        />
                                        <TextField
                                            select
                                            sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                                            label="Tipo de servicio"
                                            placeholder="Por favor, selecciona uno de los servicios de la lista:"
                                            name="services_id"
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
                                            select
                                            sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                                            label="Usuario demandante"
                                            placeholder="Por favor, selecciona tu nombre de usuario de la lista:"
                                            name="holder_user_name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.holder_user_name}
                                            error={touched.holder_user_name && Boolean(errors.holder_user_name)}
                                            helperText={touched.holder_user_name && errors.holder_user_name}
                                        >
                                            {users.map((user) => (
                                                <MenuItem key={user.id} value={`${user.id}`}>
                                                    {user.name}
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
                                            autoFocus
                                            type="text"
                                            placeholder="Describe el tiempo de la tarea"
                                            value={values.credits}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={touched.credits && Boolean(errors.credits)}
                                            helperText={touched.credits && errors.credits}
                                        />
                                        <LoadingButton
                                            color="secondary"
                                            loadingPosition="start"
                                            startIcon={<EmailIcon />}
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                            sx={{ mt: 1, mb: 1, height: "54px" }}
                                        >
                                            <span>Solicitar créditos</span>
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