import { Link } from "react-router-dom";
import hourglass5 from "../../assets/hourglass5.gif"
import { Box, Grid } from "@mui/material";

export default function Landing() {

    return (
        <>
            <Grid className="gradient" >
                <Box sx={{
                    position: "absolute",
                    bottom: "30%",
                    left: "37%",
                }}>

                    <Link to="/home"><img src={hourglass5} width={350} /></Link>
                </Box>
            </Grid>

        </>
    )
}