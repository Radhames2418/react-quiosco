import useQuiosco from "../hooks/useQuiosco.js";
import clienteAxios from "../config/axios.js";
import useSWR from "swr";
import ReactLoading from "react-loading";
import Producto from "../components/Producto.jsx";
import ErrorSwr from "../components/ErrorSWR.jsx";
import {isUndefined} from "swr/_internal";


export default function Productos() {


    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/productos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(datos => datos.data);

    const {data, error, isLoading} = useSWR('/api/productos', fetcher, {refreshInterval: 10000});

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

  return (
    <div>
      <h1 className='text-4xl font-black'>Productos</h1>
      <p className={'text-2xl my-10'} >
        Maneja la disponibilidad desde aqui.
      </p>

        <div className={'grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}>
                {data.data.map( producto => (
                    <Producto
                        key={producto.imagen}
                        producto={producto}
                        botonDisponible={true}
                    />
                ))}
        </div>
    </div>
  )
}
