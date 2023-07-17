import React from "react";
import {Link} from "react-router-dom";

function Registro(props) {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>

            <div className='bg-white shadow-md roundend-md mt-10 px-5 py-10'>
                <form >
                    <div className='mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor='name'>
                            Nombre:
                        </label>
                        <input
                            id='name'
                            className="mt-2 block p-3 bg-gray-50 w-full"
                            name='name'
                            placeholder='Tu Nombre'
                            type="text" />
                    </div>
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
                    <div className='mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor='password_confirmation'>
                            Repetir Password:
                        </label>
                        <input
                            id='password_confirmation'
                            className="mt-2 block p-3 bg-gray-50 w-full"
                            name='password_confirmation'
                            placeholder='Repite el Password'
                            type="password" />
                    </div>

                    <input
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
                        type="submit"
                        value="Crear Cuenta"/>
                </form>
            </div>

            <nav className='mt-5'>
                <Link to="/auth/login">
                    Ya tienes cuenta? Inicia Sesión
                </Link>
            </nav>
        </>
    );
}

export default Registro;