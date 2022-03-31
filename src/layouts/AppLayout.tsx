import { Outlet } from 'react-router-dom';
import Navbar from '../containers/Navbar';

export default function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}