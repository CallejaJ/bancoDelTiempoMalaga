import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AddOfferForm from "../../components/AddOfferForm/AddOfferForm";
import StepperOffers from "../../components/Steppers/StepperOffers";
import Header from "../../components/Header/Header";
import OffersTable from "../../components/OffersTable/OffersTable";

export default function Offers() { 


    return (
        <>
            <Header />
            <Box>
                <StepperOffers />
                <OffersTable />
                <AddOfferForm />
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}