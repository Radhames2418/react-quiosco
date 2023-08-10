import {useState, createRef} from "react";
import {Link} from "react-router-dom";
import Alerta from "../components/Alerta.jsx";
import {useAuth} from "../hooks/useAuth.js";


function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const [errores, setErrores] = useState([])
    const { registro } = useAuth({middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        registro(data, setErrores);
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>

            <div className='bg-white shadow-md roundend-md mt-10 px-5 py-10'>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errores ? errores.map(error =>
                            <Alerta
                            key={error}
                            >
                                {error}
                            </Alerta>
                        )
                        : null}
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
                            type="text"
                            ref={nameRef}
                        />
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
                            type="password"
                            ref={passwordConfirmationRef}
                        />
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