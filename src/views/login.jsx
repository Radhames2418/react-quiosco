import React, {createRef, useState} from 'react';
import {Link} from "react-router-dom";
import clienteAxios from "../config/axios.js";

function Login(props) {

    const emailRef = createRef();
    const passwordRef = createRef();
    const [errores, setErrores] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const response = await clienteAxios.post('/api/login', data);

            console.log(response);
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }




    return (
        <>
            <h1 className="text-4xl font-black">Inicia Sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>

            <div className='bg-white shadow-md roundend-md mt-10 px-5 py-10'>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >

                    <div className='mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor='email'>
                            Email:
                        </label>
                        <input
                            id='email'
                            className="mt-2 block p-3 bg-gray-50 w-full"
                            name='email'
                            placeholder='Tu Email'
                            type="email"
                            ref={emailRef}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor='password'>
                            Password:
                        </label>
                        <input
                            id='password'
                            className="mt-2 block p-3 bg-gray-50 w-full"
                            name='password'
                            placeholder='Tu Password'
                            type="password"
                            ref={passwordRef}
                        />
                    </div>

                    <input
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
                        type="submit"
                        value="Inicia Sesión"/>
                </form>
            </div>

            <nav className='mt-5'>
                <Link to="/auth/registro">
                    No tienes cuenta? Crea una
                </Link>
            </nav>

        </>
    );
}

export default Login;