import { useMemo } from 'react';
import useSWR from "swr";
import Producto from "../components/Producto.jsx";
import useQuiosco from "../hooks/useQuiosco.js";
import clienteAxios from "../config/axios.js";
import ReactLoading from 'react-loading';
import {isUndefined} from "swr/_internal";


const Inicio = () => {

    const { categoriaActual } = useQuiosco()

    //Consulta SWR
    const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
        refreshInterval: 1000
    });


    if (!isUndefined(error)) {
        return (
            <div className='flex h-screen w-full items-center justify-center'>
                <div className='flex items-center space-y-2 flex-col'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20	 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <p className={`text-3xl font-bold text-indigo-600`}>UPS, HAY UN ERROR !!!</p>
                    <p className={`text-lg font-bold`}>prueba mas tarde</p>
                </div>
            </div>
        )
    }


    if (isLoading) {
        return (
            <div className='flex h-screen w-full items-center justify-center'>
                <ReactLoading type='spin' color='#3949AB' height={'20%'} width={'5%'} />
            </div>
        )
    }

    const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);


    return (
        <>
            <h1 className='text-4xl font-black'>{ categoriaActual.nombre }</h1>
            <p className='text-2xl my-10'>
                Eligue y personaliza tu pedido a continuación
            </p>

            <div className={'grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}>
                {productos.map( producto => (
                    <Producto
                        key={producto.imagen}
                        producto={producto}
                    />
                ))}
            </div>
        </>
    );
};

export default Inicio;