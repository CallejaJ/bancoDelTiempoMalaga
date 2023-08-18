import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";


export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.orange[800],
                p: 3,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Sobre nosotros
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Herramienta para intercambiar habilidades entre los miembros sin utilizar dinero.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Donde estamos
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            calle Victoria nº 11 oficina 5 correo:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            info@bdtonlinemalaga.es
                        </Typography>


                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Síguenos en las redes
                        </Typography>
                        <Link href="https://www.facebook.com/bdtmalaga" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/banco_deltiempomalaga"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://twitter.com/BdTMalaga" color="inherit">
                            <Twitter />
                        </Link>
                        <Link
                            href="https://github.com/CallejaJ/bancoDelTiempoMalaga"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <GitHub />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
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

