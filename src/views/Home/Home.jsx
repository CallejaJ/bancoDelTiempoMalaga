import * as React from 'react';
import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import video from "../../assets/video.mp4";
import CarouselHome from '../../components/Carousel/CarouselHome';


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


export default function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Header title="Inicio" />

            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}

            >
                <Grid
                    item xs={4}
                    marginTop={4}
                    marginBottom={3}


                >
                    <video src={video} allow="autoPlay" controls muted width={800} />
                </Grid>
            </Box>

            {/* ventana de texto */}

            <Box
                padding={2}
                margin={2}
                display={'flex'}
                justifyContent={'center'}>
                <Button variant='outlined' onClick={handleOpen}>¿Cúales son sus ventajas?</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                            ¿Cúales son sus ventajas?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            El Banco del Tiempo resuelve necesidades de la vida diaria,
                            permite conciliar la vida personal, familiar y laboral. Además facilita
                            ocupar el tiempo libre de forma útil y gratificante, fomentando las relaciones
                            intergeneracionales, multiculturales y en general, las relaciones sociales.
                        </Typography>
                    </Box>
                </Modal>
            </Box>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
                <Grid container padding={5} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
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




            <CarouselHome />

            {/* bloque de texto */}

            <Box
                pt={1}
                sx={{ width: '100%' }}
            >
                <Grid container padding={5} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Una hora siempre es a cambio de otra hora, independientemente
                            de los servicios y actividades que tú ofrezcas o
                            demandes, es decir, vale lo mismo una hora de clases de
                            inglés que una hora para arreglar un enchufe o acompañar
                            a una persona.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Cuando muchas personas se unen para ofrecer y recibir
                            su tiempo se generan numerosas actividades y recursos
                            de los que comunidad en general se puede beneficiar.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Todos tenemos habilidades, capacidades y conocimientos
                            que ofrecer y de los cuales se pueden beneficiar otras personas.
                            Cuanto más intercambiamos con los demás más nos enriquecemos como personas y como
                            grupo.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Todos los servicios tienen el mismo valor.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
            <ScrollToTop />
        </>
    );
}

