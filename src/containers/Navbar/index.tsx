import React from 'react';
import { Button, AppBar, Toolbar, Container, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { PersonAddAltRounded, LoginRounded, ShoppingCartRounded } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';

export default function Navbar() {

    const basketTotal = useAppSelector(state => state.basket.basketTotal);

    const NavLinkButton = styled(Button)`
        color: #3A5E74;
        margin-top: 16px;
        margin-bottom: 16px;
        margin-left: 16px;
        display: block;
        font-size: 1rem;
        border-color: #3A5E74;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        
        &:hover {
            background-color: #f5f5f5;
            border-color: #f5f5f5;
        }

        .link-text{
            margin-left: 8px;
        }

        @media (max-width: 600px) {
            min-width: 44px;
            min-height: 24px;
            padding: 1px 1px;
            margin-left: 10px;
            span{
                font-size: 0.8rem;
            }
            svg{
                font-size: 1rem;
            }
        }
    `;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = ['Home', 'Products', 'About', 'Contact'];

    return (
        <>
            <AppBar position="static" color='inherit'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold', fontSize: '1.2rem' }}
                        >
                            <Link to={'/'}>
                                Shoping App
                            </Link>
                        </Typography>




                        {/*Mobil Start */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                {pages.map((page, index) => (
                                    <NavLink to={page.toLowerCase() !== 'home' ? `/${page.toLowerCase()}` : '/'}>
                                        <MenuItem key={index} onClick={handleCloseNavMenu} >
                                            {page}
                                        </MenuItem>
                                    </NavLink>
                                ))}

                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link to={'/'}>
                                Shoping App
                            </Link>
                        </Typography>
                        {/*Mobil End */}



                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <NavLink
                                    to={page.toLowerCase() !== 'home' ? `/${page.toLowerCase()}` : '/'}
                                >
                                    <NavLinkButton
                                        key={index}
                                    >

                                        {page}

                                    </NavLinkButton>
                                </NavLink>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>

                            <NavLink to={'/login'}>
                                <NavLinkButton
                                    variant="outlined"
                                >
                                    <LoginRounded />
                                    <Typography className='link-text' sx={{ display: { xs: 'none', lg: 'block' } }} component={'span'}>
                                        Login
                                    </Typography>
                                </NavLinkButton>
                            </NavLink>

                            <NavLink to={'/register'}>
                                <NavLinkButton
                                    variant="outlined"
                                >
                                    <PersonAddAltRounded />

                                    <Typography className='link-text' sx={{ display: { xs: 'none', lg: 'block' } }} component={'span'}>
                                        Register
                                    </Typography>


                                </NavLinkButton>
                            </NavLink>

                            <NavLink to={'/cart'}>
                                <NavLinkButton
                                    variant="outlined"
                                >
                                    <ShoppingCartRounded />
                                    <Typography className='link-text' sx={{ display: { xs: 'none', lg: 'block' } }} component={'span'}>
                                        Cart
                                    </Typography>
                                    <Typography sx={{ ml: '2px' }} component={'span'}>
                                        ({basketTotal})
                                    </Typography>

                                </NavLinkButton>
                            </NavLink>
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}