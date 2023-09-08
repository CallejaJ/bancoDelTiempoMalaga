import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import AddOfferForm from "../../components/AddOfferForm/AddOfferForm";
import OffersTableView from "../../components/OffersTable/OffersTableView";
import StepperOffers from "../../components/Steppers/StepperOffers";
import Header from "../../components/Header/Header";

export default function Offers() { 


    return (
        <>
            <Header />
            <Box>
                <StepperOffers />
                <OffersTableView />
                <AddOfferForm />
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}