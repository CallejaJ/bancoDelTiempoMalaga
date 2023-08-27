import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import SearchBarRequests from "../../components/SearchBar/SearchBarRequests";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
// import RequestDataTable from "./RequestData/RequestDataTable";
import StepperRequests from "../../components/Steppers/StepperRequests";

export default function Requests() {



    return (
        <>
            <SearchBarRequests />
            <Box>
                <StepperRequests />
            </Box>
            {/* <Box>
                <RequestDataTable />
            </Box> */}
            <ScrollToTop />
            <Footer />
        </>


    )
}