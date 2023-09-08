import Footer from '../../components/Footer/Footer';
import guide from "../../assets/guide.png"
import credit from "../../assets/credit.png"
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Box, Typography, Grid } from '@mui/material';
import Header from '../../components/Header/Header';

export default function UserGuide() {

    return (
        <>
            <Header />

            <div className="boxShadowOrange">
                Hello
            </div>


            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
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

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                style={{ minHeight: '100vh' }}
                marginTop={1}
                marginBottom={1}
            >
                <Grid item xs={3}>
                    <img src={credit} width={500} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
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

            <Grid
                container
                justifyContent={'center'}
                direction={'column'}
                alignItems={'center'}
                style={{ minHeight: '100vh' }}

            >
                <Grid
                    item xs={3}
                    marginTop={0}
                    marginBottom={0}
                >
                    <img src={guide} width={700} />
                </Grid>
            </Grid>

            {/* bloque de texto */}

            <Box pt={1} sx={{ width: '100%' }}>
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
            <Footer />
            <ScrollToTop />
        </>
    );
}