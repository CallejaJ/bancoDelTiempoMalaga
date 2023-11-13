import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import offers from "../../assets/offers.png"
import StepperOfferInfo from "../../components/Steppers/StepperOfferInfo";
import OffersTable from "../../components/OffersTable/OffersTable";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '2px solid #1565c0',
};

export default function Offers() { 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                    <img src={offers} width={500} />
                </Grid>
            </Grid>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}>
                <StepperOfferInfo />
            </Box>
            <Box
                padding={1}
                margin={2}
                display={'flex'}
                justifyContent={'center'}>
                <Button variant='contained' onClick={handleOpen}>
                    Añadir nueva oferta
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                            Cómo añadir una oferta
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Para añadir una nueva oferta a la lista de ofertas publicadas en el
                            Banco del Tiempo haz click <Link to="/panel/addoffer">aquí</Link>
                        </Typography>
                    </Box>
                </Modal>
            </Box>
            <OffersTable />
            <ScrollToTop />
            <Footer />
        </>
    )
}