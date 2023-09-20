import { Box, Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';

const primary = blue[800]; // #f44336

export default function NotFound() {
    return (
        <>
        <Box

            sx={{
                maxWidth: "xl",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: primary,
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
                <Typography variant="h6" marginBottom={4} style={{ color: 'white' }}>
                La página que está intentando acceder no existe
            </Typography>
            <Link to="/home">
                    <Button style={{ color: '#1565c0' }} variant="contained">Volver</Button>
            </Link>
        </Box>
            <ScrollToTop />
            <Footer />
        </>
    );
}
