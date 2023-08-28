import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, IconButton, InputBase, ListItemText, MenuItem, Toolbar, Typography, Menu, Tooltip, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import hourglass5 from "../../assets/hourglass5.gif"
import menu from "../../assets/icons/menu.png"
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBarOffers({ value, onChange }) {

    const DifferentPages = [
        { Text: "Inicio", location: "/home", Image: menu },
        { Text: "Panel", location: "/panel", Image: menu },
        { Text: "Ofertas", location: "/offers", Image: menu },
        { Text: "Demandas", location: "/requests", Image: menu },
        { Text: "Guía de uso", location: "/userguide", Image: menu },
    ]

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" className='gradient_appbar'>
                <Toolbar>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Menu de navegación">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                                <img src={hourglass5} width={40} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {DifferentPages.map((Text, index) => (
                                <MenuItem key={index}
                                    onClick={handleCloseUserMenu}
                                    component={Link}
                                    to={Text.location}>
                                    <ListItemText
                                        primary={Text.Text}
                                        sx={{ display: "flex", justifyContent: "space-between" }} />
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'whitesmoke' }}
                    >
                        Ofertas del banco del tiempo
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={value}
                            onChange={onChange}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}