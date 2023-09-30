import { useNavigate } from "react-router-dom";
import hourglass5 from "../../assets/hourglass5.gif"
import { Box, Grid } from "@mui/material";


export default function Landing() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/home');
    }, 3000);



    return (
        <>
            <Grid className="gradient" >
                <Box sx={{
                    position: "absolute",
                    bottom: "30%",
                    left: "37%",
                }}>


                    <img src={hourglass5} width={350} />
                </Box>
            </Grid>

        </>
    )
}