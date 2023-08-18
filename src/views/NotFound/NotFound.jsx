import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const primary = purple[500]; // #f44336

export default function NotFound() {
    return (
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
            <Typography variant="h6" style={{ color: 'white' }}>
                La página que está intentando acceder no existe
            </Typography>
            <Link to="/home">
                <Button style={{ color: 'purple' }} variant="contained">Volver</Button>
            </Link>
        </Box>
    );
}
