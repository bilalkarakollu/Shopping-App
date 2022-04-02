import { Container, Box, Typography, ButtonGroup, Button } from '@mui/material';
import { Link, useLocation, useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from "../redux/app/hooks";
import { useIsLoggedIn } from "../config/hooks";

export default function LogRegLayout() {

    const isLoggedIn = useIsLoggedIn();
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const error = useAppSelector(state => state.auth.error)

    const router = (page: string) => navigate(page);

    if (isLoggedIn === null) return null;
    else if (isLoggedIn === true) return <Navigate replace to="/" />;

    return (
        <>
            <Container maxWidth='xs'>
                <Box display={'flex'} justifyContent={'center'} mt={3} mb={3}>
                    <Typography component={'h1'} fontSize={'25px'} fontWeight={'bold'}>
                        <Link to={'/'}>
                            Shoping App
                        </Link>
                    </Typography>
                </Box>
                {error && (
                    <Typography textAlign={'center'}>
                        {error}
                    </Typography>
                )}
                <Box sx={{ boxShadow: 1, p: 4 }}>
                    <Box>
                        <ButtonGroup fullWidth>
                            <Button onClick={() => router('/login')} variant='text' sx={{ boxShadow: 1, color: 'black', mr: 1, backgroundColor: pathname === '/login' ? '#e8e8e8' : '' }}>
                                Login
                            </Button>
                            <Button onClick={() => router('/register')} variant='text' sx={{ boxShadow: 1, color: 'black', ml: 1, backgroundColor: pathname === '/register' ? '#e8e8e8' : '' }}>
                                Register
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box mt={3}>
                        <Outlet />
                    </Box>
                </Box>
            </Container>
        </>
    )
}