import Footer from '../../components/Footer/Footer';
import guide from "../../assets/guide.png"
import advantages1 from "../../assets/advantages1.png"

import credit from "../../assets/credit.png"
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Box, Typography, Grid, Button, Modal } from '@mui/material';
import Header from '../../components/Header/Header';
import React from 'react';
import { Link } from 'react-router-dom';


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





export default function UserGuide() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Header title='Guía y funcionamiento' />

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                marginTop={3}
                padding={1}

            >
                <Grid item xs={3}>
                    <img src={advantages1} width={600} />
                </Grid>
            </Grid>


            {/* bloque de texto */}

            <Box sx={{ width: '100%' }}>
                <Grid container padding={5} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El intercambio consiste en ofrecer un determinado servicio
                            a cambio del tiempo que cueste realizarlo y demandar
                            otros servicios a cambio del valor que se esté dispuesto a
                            “pagar”.
                            Mediante este sistema las personas se ponen en contacto
                            para intercambiar ayudas y habilidades de manera gratuita.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            No prometemos enriquecimiento, sino la posibilidad de
                            ahorrar dinero y poder acceder a servicios o productos que
                            de otra forma no sería posible; mediante la vinculación con
                            otras personas, para tener interrelación entre todos los
                            miembros de nuestro barrio.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            El Banco del tiempo ofrece la oportunidad de que la gente
                            se conozca y confíe en los demás para resolver necesidades
                            de la vida diaria, de esta forma se intenta mejorar la
                            calidad de vida de las personas y dinamizar la vida local.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Además las personas no se comprometen a participar
                            durante un tiempo determinado, sino que pueden hacerlo
                            en la medida de sus posibilidades.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}

            >
                <Grid item xs={3}>
                    <img src={credit} width={400} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box sx={{ width: '100%' }}>
                <Grid container padding={5} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Para formar parte del Banco del Tiempo y formar partes de los intercambios
                            y otras actividades es necesario registrarse y realizar una entrevista con uno de los
                            gestores del banco del tiempo. Es importante rellenar el perfil personal y añadir las ofertas
                            y demandas para comenzar a utilizar la aplicación.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se pueden realizar intercambios entre usuarios, grupales, y con el banco del tiempo.
                            En los intercambios grupales un usuario ofrece un servicio a varias personas a la vez, como
                            pueden ser clases o talleres grupales. En los intercambios con el propio banco se aportan
                            materiales, servicios grupales o actividades de ocio.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Todos los servicios tienen el mismo valor, tanto recoger a los niños del colegio como
                            arreglar un enchufe o enseñar a coser. Cualquier actividad por extraña que te parezca, puede
                            ser ofrecida o demandada: informática, sevillanas,ayudar a hacer los deberes,
                            facilitar desplazamientos en coche, acompañar a personas mayores, pequeñas labores domésticas
                            como planchar, cocinar o reparaciones.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Se organizarán reuniones entre los socios, excursiones, jornadas y talleres para que los socios puedan conocerse,
                            compartir momentos de ocio y usar sus créditos.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
            >
                <Grid
                    item xs={3}
                    marginTop={0}
                    marginBottom={0}
                >
                    <img src={guide} width={500} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
                <Grid container padding={5} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Por ejemplo, si un usuario ha realizado servicios a
                            otras personas durante 8 horas, tendrá 8 créditos de
                            tiempo. Si un usuario no ha prestado ningún servicio a otras personas
                            y desea asistir a una excursión de 4 horas de duración,
                            su cuenta de tiempo se quedará en -4 créditos. Esto
                            quiere decir que deberá realizar 4 horas de servicios a
                            otras personas para poner su cuenta a 0.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" align="justify" style={{ color: 'grey' }} gutterBottom>
                            Los gestores del banco de tiempo garantizan la confidencialidad de los usuarios, por lo que
                            en ningún caso aparece información detallada en los listados de ofertas y demandas.
                            Para ello se facilita un buzón de mensajería interna entre usuarios. Los usuarios se
                            comunican a través de la aplicación para que queden registrados los mensajes en caso de
                            incidencias.
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
                            Cuando muchas personas se unen para ofrecer y recibir su tiempo se generan numerosas actividades y recursos
                            de los que comunidad en general se puede beneficiar.
                        </Typography>
                    </Grid>
                </Grid>

                {/* ventana de texto */}

                <Box
                    padding={2}
                    margin={4}
                    display={'flex'}
                    justifyContent={'center'}>
                    <Button variant='outlined' onClick={handleOpen}>Me interesa el Banco del Tiempo</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                                Me interesa el Banco del Tiempo
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Accede al formulario de registro <Link to="/register">aquí</Link>
                            </Typography>
                        </Box>
                    </Modal>
                </Box>

            </Box>
            <Footer />
            <ScrollToTop />
        </>
    );
}