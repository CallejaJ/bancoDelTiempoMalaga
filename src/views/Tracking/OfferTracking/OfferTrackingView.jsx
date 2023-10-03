import { Alert, Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import { LoadingButton } from "@mui/lab";
import EmailIcon from '@mui/icons-material/Email';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Footer from "../../../components/Footer/Footer";
import OfferMessagesList from "../../../components/MessagesList/OfferMessagesList/OfferMessagesList";
import StepperSendMessage from "../../../components/Steppers/StepperSendMessage";
import offermessages from "../../../assets/offermessages.png"
import StepperTrackingOffer from "../../../components/Steppers/StepperTrackingOffer";
import OfferDetailsCard from "../../../components/OfferDetailsCard/OfferDetailsCard";



export default function OfferTrackingView({ formik, users, ultimateOfferMessage, userOffer, user }) {

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
                    <img src={offermessages} width={600} />
                </Grid>
                <Grid item xs={3}>
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
                <OfferDetailsCard />
            </Box>
            <Box
                padding={1}
                margin={1}
                display={'flex'}
                justifyContent={'center'}>
            </Box>
            <OfferMessagesList />
            {userOffer.user_id == user.id ? (
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
                                            sx={{ mt: 10 }}
                                            padding={4}
                                        >
                                            <TextField
                                                select
                                                sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                                                label="Usuario que ha recibido el servicio"
                                                placeholder="Por favor, selecciona tu nombre de usuario de la lista:"
                                                name="service_recipient"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.service_recipient}
                                                error={touched.service_recipient && Boolean(errors.service_recipient)}
                                                helperText={touched.service_recipient && errors.service_recipient}
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
                                                label="Créditos a solicitar"
                                                name="credits"
                                                type="number"
                                                placeholder="Describe el tiempo de la tarea"
                                                value={values.credits}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={touched.credits && Boolean(errors.credits)}
                                                helperText={touched.credits && errors.credits}
                                            />
                                            {ultimateOfferMessage ? (
                                                <Alert
                                                    sx={{ mt: 1, mb: 1, height: "60px", width: "300px" }}
                                                    variant="outlined" severity="info" >
                                                    {ultimateOfferMessage}
                                                </Alert>
                                            ) : null}
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
            ) : null} 

            <ScrollToTop />
            <Footer />
        </>
    )
}