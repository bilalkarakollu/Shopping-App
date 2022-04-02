import {Outlet, Navigate} from 'react-router-dom';
import { useIsLoggedIn } from "../config/hooks";
import Navbar from '../containers/Navbar';

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