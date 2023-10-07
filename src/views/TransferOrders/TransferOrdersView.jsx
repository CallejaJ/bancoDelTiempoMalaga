import { Box, Grid, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import transfermessages from "../../assets/transfermessages.png"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import OfferTransferMessages from "../../components/OfferTransferMessagesTable/OfferTransferMessages";
import StepperTrackingOffers from "../../components/Steppers/StepperTrackingOffers";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function TransferOrdersView({ userDetails }) {



    return (
        <>
            <Header title="Transferencias pendientes" />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={5}
                padding={3}
            >
                <Grid item xs={3}>
                    <img src={transfermessages} width={500} />
                </Grid>
                <Grid item xs={3}>
                    <OfferTransferMessages />
                </Grid>
                <Box
                    alignItems={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                    marginTop={1}
                    marginBottom={1}
                >

                    <AccessTimeIcon
                        color="primary"
                        sx={{ fontSize: 40 }}
                    />
                    {userDetails.map((user, index) => {
                        return (
                            <>
                                <Typography
                                    color="secondary"
                                    marginLeft={2}
                                    variant="h5"
                                    key={index}
                                >
                                    Dispones de
                                </Typography>
                                <Typography
                                    color="primary"
                                    marginLeft={2}
                                    variant="h4"
                                    key={index}
                                >
                                    {user.credits}
                                </Typography>
                                <Typography
                                    color="secondary"
                                    marginLeft={2}
                                    variant="h5"
                                    key={index}
                                >
                                    {user.credits === 1 || user.credits === -1 ? ("crédito") : ("créditos")}
                                </Typography>
                            </>
                        );
                    })}

                </Box>
                <Grid
                    marginTop={0} item xs={3}>
                    <StepperTrackingOffers />
                </Grid>
            </Grid>

            <ScrollToTop />
            <Footer />
        </>
    )
}