import { Outlet } from 'react-router-dom';
export default function AuthLayout(props) {
    return (
        <div>
            Hola desde Authlayout
            <Outlet />
        </div>
    );
}