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
            <Box>
                <StepperRequests />
            </Box>
            <Box>
                {/* <RequestDataTable /> */}
            </Box>
            <ScrollToTop />
            <Footer />
        </>
    )
}