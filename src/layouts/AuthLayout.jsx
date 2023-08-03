import {Outlet} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
export default function AuthLayout(props) {
    return (
        <div className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
            <img
                src='../img/logo.svg'
                alt="logo"
                className="max-w-xs"
            />

            <div className='p-10 w-full'>
                <Outlet />
            </div>

            <ToastContainer />
        </div>
    );
}