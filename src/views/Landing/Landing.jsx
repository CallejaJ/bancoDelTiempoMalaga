import { Link } from "react-router-dom";
import hourglass3 from "../../assets/hourglass3.gif"
import { Box, Grid } from "@mui/material";

export default function Landing() {

    return (
        <>
            <Grid className="gradient" >Esta es la landing
                <Box sx={{
                    position: "absolute",
                    bottom: "40%",
                    left: "46%",
                }}>

                    <Link to="/home">  <img src={hourglass3} width={70} /></Link>
                </Box>
            </Grid>

        </>
    )
}