import { useNavigate } from "react-router-dom";
// import hourglass5 from "../../assets/hourglass5.gif"
import { Box, Grid } from "@mui/material";
import { Watch } from 'react-loader-spinner';


export default function Landing() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/home');
    }, 4000);



    return (
        <>
            <Grid className="gradient" >
                <Box sx={{
                    position: "absolute",
                    bottom: "30%",
                    left: "37%",
                }}>

                    <Watch
                        height="350"
                        width="350"
                        radius="48"
                        color="#fafafa"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                    {/* <img src={hourglass5} width={350} /> */}
                </Box>
            </Grid>

        </>
    )
}