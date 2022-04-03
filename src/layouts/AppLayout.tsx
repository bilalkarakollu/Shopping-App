import {Outlet} from 'react-router-dom';
import { useIsLoggedIn } from "../config/hooks";
import Navbar from '../containers/Navbar';
import { Box } from '@mui/material';

export default function AppLayout() {

    const isLoggedIn = useIsLoggedIn();

    /*if (isLoggedIn === null) return null;
    else if (isLoggedIn === false) return <Navigate replace to="/login"/>;*/

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}