import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <>
            <h1 className="text-4xl font-black">Inicia Sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>

            <div className='bg-white shadow-md roundend-md mt-10 px-5 py-10'>
                <form >

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
                            type="email" />
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
                            type="password" />
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