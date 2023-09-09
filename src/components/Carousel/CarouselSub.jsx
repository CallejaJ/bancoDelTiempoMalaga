import { Paper, Box, Typography } from "@mui/material";

function Item({ item }) {
    return (
        <Paper
            elevation={0}>
            <Box alignItems="center" justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "20%", height: "20%" }}
                />
            </Box>
            <Box alignItems="center" justifyContent="center" sx={{ display: { xs: "flex", sm: "none" } }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "20%", height: "20% " }}
                />
            </Box>
            <Box
                sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingBottom: "center",
                }}
            >
                <Typography
                    variant="h4"
                    marginTop={3}
                >
                    {item.title}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingBottom: "center",

                }}
            >
                <Typography
                    variant="h6"
                    marginTop={3}
                >{item.title}
                </Typography>
            </Box>
        </Paper>
    );
}

export default Item;