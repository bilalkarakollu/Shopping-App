import { Outlet } from 'react-router-dom';
import { Container, Box, Typography, ButtonGroup, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function LogRegLayout() {

    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const router = (page: string) => navigate(page);

    return (
        <>
            <Container maxWidth='xs'>
                <Box display={'flex'} justifyContent={'center'} mt={3}>
                    <Typography component={'h1'} fontSize={'25px'} fontWeight={'bold'}>
                        <Link to={'/'}>
                            Shoping App
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{ boxShadow: 1, mt: 5, p: 4 }}>
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