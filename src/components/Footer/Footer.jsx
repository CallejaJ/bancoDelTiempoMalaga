import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";


export default function Footer() {
    return (

        <Box className='gradient_footer'
            sx={{
                backgroundColor: orange[300],
                p: 3,
                position: "absolute",
                marginBottom: 2,
                width: '100%'
            }}
        >
            <Container
                maxWidth="lg"
            >
                <Grid container
                    spacing={5}
                    paddingLeft={6}
                >
                    <Grid item xs={12} sm={4}
                        paddingLeft={3}
                    >
                        <Typography
                            display={"flex"}
                            variant="h6"
                            color="text.white"
                            gutterBottom>
                            Sobre nosotros
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.white"
                        >
                            Herramienta para intercambiar habilidades entre los miembros sin utilizar dinero.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}
                        paddingLeft={3}
                    >
                        <Typography variant="h6" color="text.white" gutterBottom>
                            Donde estamos
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            calle Victoria nº 11 oficina 5 correo:
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            info@bdtonlinemalaga.es
                        </Typography>


                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.white" gutterBottom>
                            Síguenos en las redes
                        </Typography>
                        <Link href="https://www.facebook.com/bdtmalaga" color="text.grey">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/banco_deltiempomalaga"
                            color="text.grey"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://twitter.com/BdTMalaga" color="text.grey">
                            <Twitter />
                        </Link>
                        <Link
                            href="https://github.com/CallejaJ/bancoDelTiempoMalaga"
                            color="text.grey"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <GitHub />
                        </Link>
                    </Grid>
                </Grid>
                <Box
                    mt={5}
                    paddingLeft={6}
                >
                    <Typography variant="body2" color="text.white" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                            www.bdtonlinemalaga.es
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

