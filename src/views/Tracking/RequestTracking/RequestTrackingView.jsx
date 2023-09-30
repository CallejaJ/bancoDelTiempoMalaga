import { Box, Container, CssBaseline, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import { LoadingButton } from "@mui/lab";
import EmailIcon from '@mui/icons-material/Email';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Footer from "../../../components/Footer/Footer";
import RequestMessagesList from "../../../components/MessagesList/RequestMessagesList/RequestMessagesList";
import StepperSendMessage from "../../../components/Steppers/StepperSendMessage";
import requestmessages from "../../../assets/requestmessages.png"
import StepperTrackingRequest from "../../../components/Steppers/StepperTrackingRequest";
import RequestDetailsCard from "../../../components/RequestDetailsCard/RequestDetailsCard";



export default function OfferTrackingView({ formik, users }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    return (
        <>
            <Header title='Información de demandas' />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={4}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={requestmessages} width={600} />
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
                <RequestDetailsCard />

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
                <RequestMessagesList />
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
                            <StepperTrackingRequest />
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
                                        padding={5}
                                        sx={{ mt: 4 }}
                                    >
                                        <TextField
                                            select
                                            sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                                            label="Usuario que ha realizado la tarea"
                                            placeholder="Por favor, selecciona su nombre de usuario en la lista:"
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
                                            label="Créditos a transferir"
                                            name="credits"
                                            autoComplete="credits"

                                            type="number"
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
                                            <span>Transferir créditos</span>
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