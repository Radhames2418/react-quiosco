import { createBrowserRouter } from 'react-router-dom';
import Layout from "./layouts/layout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Inicio from "./views/Inicio.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Inicio />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />
    },
])

export default router;