import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import StepperRequests from "../../components/Steppers/StepperRequests";

import Header from "../../components/Header/Header";
// import RequestDataTable from "../../components/RequestData/RequestDataTable";

export default function Requests() {




    return (
        <>
            <Header />
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}>
                <StepperRequests />
            </Box>

            <ScrollToTop />
            <Footer />
        </>
    )
}