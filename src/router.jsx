import { createBrowserRouter } from 'react-router-dom';
import Layout from "./layouts/layout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Inicio from "./views/Inicio.jsx";
import Login  from "./views/login.jsx";
import Registro from "./views/Registro.jsx";
import Ordenes from './views/Ordenes.jsx';
import Productos from './views/Productos.jsx';


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
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            },
        ]
    },
])

export default router;