import * as React from 'react';
import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SwiperHome from "../../components/SwipperHome/SwipperHome";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import video from "../../assets/video.mp4";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export default function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Header />

            <Box
                justifyContent={'center'}
                alignItems={'center'}
                style={{ minHeight: '100vh' }}

            >
                <Grid
                    item xs={3}
                    marginTop={3}
                    marginBottom={3}
                >
                    <video src={video} allow="autoPlay" controls muted width={800} />
                </Grid>
            </Box>

            {/* ventana de texto */}

            <Box padding={2} margin={2}>
                <Button onClick={handleOpen}>¿Qué es un banco de tiempo?</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                            ¿Qué es un banco del tiempo?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Box>
                </Modal>
            </Box>


            {/* bloque de texto */}

            <Box pt={9} sx={{ width: '100%' }}>
                <Grid container padding={2} margin={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se trata, en definitiva, de un sistema de ayuda mutua
                            entre personas que viven en la misma comunidad, es
                            la ayuda informal de toda la vida pero en este caso la
                            formalizamos llevando un control de las ofertas y de-
                            mandas de cada persona.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            En el banco del tiempo se intercambian servicios y actividades en donde
                            la unidad de intercambio y de valor siempre es la misma: la hora, el tiempo.
                            Todos los servicios tienen el mismo valor.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Una persona ofrece lo que puede y recibe lo que necesita.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <SwiperHome />
            {/* ventana de texto */}

            <Box padding={2} margin={2}>
                <Button onClick={handleOpen}>¿Qué es un banco de tiempo?</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                            ¿Qué es un banco del tiempo?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            El Banco del Tiempo es un proyecto que se desarrolla en varios países del mundo
                            y también en algunas ciudades de España.
                            Consiste en crear un sistema gratuito de colaboración mutua,
                            de intercambio de habilidades, conocimientos y ganas
                            para crear una comunidad mejor.
                        </Typography>
                    </Box>
                </Modal>
            </Box>

            <Footer />
            <ScrollToTop />
        </>
    );
}

