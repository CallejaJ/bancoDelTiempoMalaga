import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import transfermessages from "../../assets/transfermessages.png"

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
// import CreditMessagesTable from "../../components/CreditsMessagesTable/CreditsMessagesTable";

export default function TransferOrders() {


    return (
        <>
            <Header title="Transferencias pendientes" />
            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={3}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={transfermessages} width={600} />
                </Grid>
                <Grid item xs={3}>
                    {/* <CreditMessagesTable /> */}
                </Grid>
            </Grid>

            <ScrollToTop />
            <Footer />
        </>
    )
}