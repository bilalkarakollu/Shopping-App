import { Routes, Route } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}