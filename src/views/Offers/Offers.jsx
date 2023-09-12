import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import StepperOffers from "../../components/Steppers/StepperOffers";
import Header from "../../components/Header/Header";
import OffersTable from "../../components/OffersTable/OffersTable";
import offers from "../../assets/offers.png"




export default function Offers() { 


    return (
        <>
            <Header title='Ofertas' />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={4}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={offers} width={600} />
                </Grid>
            </Grid>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}>
                <StepperOffers />
            </Box>
            <OffersTable />
            <ScrollToTop />
            <Footer />
        </>
    )
}