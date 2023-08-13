import clienteAxios from "../config/axios.js";
import useSWR from "swr";
import ReactLoading from "react-loading";
import {formatearDinero} from "../helpers/index.js";
import useQuiosco from "../hooks/useQuiosco.js";
import ErrorSwr from "../components/ErrorSWR.jsx";
import {isUndefined} from "swr/_internal";

export default function Ordenes() {

    const {handleClickCompletar} = useQuiosco()

    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {refreshInterval: 1000});

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
      <h1 className='text-4xl font-black'>Ordenes</h1>
      <p className={'text-2xl my-10'} >
        Administra las odenes desde aqui.
      </p>

        <div className={'grid grid-cols-2 gap-5'}>
            {data.data.data.map(pedido => (
                <div key={pedido.id} className={'p-5 bg-white shadow space-y-2 border-b'}>
                    <p className={'text-xl font-bold text-slate-600'}>
                        Contenido del Pedido:
                    </p>

                    {pedido.productos.map(producto => (
                        <div
                            key={producto.id}
                            className={'border-b border-b-slate-200 last-of-type:border-none py-4'}
                        >
                            <p className={'text-sm'}>ID : {producto.id}</p>
                            <p>{producto.nombre}</p>
                            <p>
                                Cantidad: {''}
                                <span className={'font-bold'}>
                                    {producto.pivot.cantidad}
                                </span>
                            </p>

                        </div>
                    ))}

                    <p className={'text-lg font-bold text-slate-600'}>
                       Cliente: {''}
                        <span className={'font-normal'}>
                            {pedido.user.name}
                        </span>
                    </p>

                    <p className={'text-lg font-bold text-amber-600'}>
                        Total a pagar: {''}
                        <span className={'font-normal text-slate-600'}>
                            { formatearDinero(pedido.total) }
                        </span>
                    </p>

                    <button
                        type='button'
                        onClick={() => handleClickCompletar(pedido.id)}
                        className={`bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                    >
                        Completar
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
