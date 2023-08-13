import React from 'react';
import useSWR from "swr";
import Producto from "../components/Producto.jsx";
import useQuiosco from "../hooks/useQuiosco.js";
import clienteAxios from "../config/axios.js";
import ReactLoading from 'react-loading';
import {isUndefined} from "swr/_internal";
import ErrorSwr from "../components/ErrorSWR.jsx";


const Inicio = () => {

    const token = localStorage.getItem('AUTH_TOKEN');
    const { categoriaActual } = useQuiosco()

    //Consulta SWR
    const fetcher = () => clienteAxios('/api/productos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => data.data);

    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
        refreshInterval: 1000
    });


    if (!isUndefined(error)) {
        return <ErrorSwr />
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
            <h1 className='text-4xl font-black'>{ categoriaActual?.nombre }</h1>
            <p className='text-2xl my-10'>
                Eligue y personaliza tu pedido a continuación
            </p>

            <div className={'grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}>
                {productos.map( producto => (
                    <Producto
                        key={producto.imagen}
                        producto={producto}
                        botonAgregar = {true}
                    />
                ))}
            </div>
        </>
    );
};

export default Inicio;