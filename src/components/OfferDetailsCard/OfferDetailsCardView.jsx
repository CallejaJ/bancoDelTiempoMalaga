
import bdtcard from "../../assets/bdtcard.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function OfferDetailsCardView({ userOffer }) {

    return (
        <Card
            sx={{ maxWidth: 400, padding: 1, marginLeft: 6, marginTop: 1 }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={bdtcard}
                    sx={{ width: '100%', alignContent: "center", alignItems: "center" }}
                    alt="maintenance"
                />
                <CardContent>
                    <Typography
                        marginTop={2}
                        gutterBottom
                        variant="h5"
                        component="div">
                        {userOffer.name}
                    </Typography>
                    <Typography
                        marginTop={2}
                        variant="body1"
                        color="text.primary">
                        {userOffer.credits} créditos
                    </Typography>
                    <Typography
                        marginTop={2}
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                        component="div">
                        {userOffer.description}
                    </Typography>
                    <Typography
                        marginTop={2}
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                        component="div"
                    >
                        Publicado por {userOffer.offer_user_name}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
