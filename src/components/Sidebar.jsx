import Categoria from "./Categoria.jsx";
import useQuiosco from "../hooks/useQuiosco.js";
import {useAuth} from "../hooks/useAuth.js";

export default function Sidebar() {

    const { categorias }  = useQuiosco();
    const { logout, user } = useAuth({middleware: 'auth'});

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    className="w-40" 
                    src="img/logo.svg" 
                    alt="imagen sidebar"
                />
            </div>

            <p className={`my-10 text-xl text-center`}>Hola: {user?.name}</p>

            <div className="mt-10">
                {categorias.map( categoria => (
                     <Categoria
                         key = { categoria.id }
                        categoria = {categoria}
                     />
                ))}
            </div>

            <div className='my-5 px-5'>
                <button
                    type='button'
                    className='text-center bg-red-500 w-full p-3 font-bold text-white truncate'
                    onClick={logout}
                >
                    Cancelar Orden
                </button>
            </div>
        </aside>
    )
}