import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import SearchBarOffers from "../../components/SearchBar/SearchBarOffers";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import StepperOffers from "../../components/Steppers/StepperOffers";

export default function Offers() {


    return (
        <>
            <SearchBarOffers />
            <Box>
                <StepperOffers />

            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}