import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import StepperRequests from "../../components/Steppers/StepperRequests";
import Header from "../../components/Header/Header";
import RequestsTable from "../../components/RequestsTable/RequestsTable";
import requests from "../../assets/requests.png"

export default function Requests() {


    return (
        <>
            <Header title='Demandas' />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={4}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={requests} width={600} />
                </Grid>
            </Grid>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}>
                <StepperRequests />
            </Box>
            <RequestsTable />
            <ScrollToTop />
            <Footer />
        </>
    )
}