import useQuiosco from "../hooks/useQuiosco.js";
import producto from "./Producto.jsx";
import ResumenProducto from "./ResumenProducto.jsx";
import {formatearDinero} from "../helpers/index.js";


export default function Resumen() {

  const { pedido, total } = useQuiosco();

  const comprobarPedido = () => pedido.length === 0;



  return (
    <aside className=" w-full md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className='text-4xl font-black'>
        Mi Pedido
      </h1>

      <p className='text-lg my-5'>
        Aquí podras ver el resumen y totales de tu pedido
      </p>

      <div className="p-5">
        {pedido.length === 0 ? (
            <p className='text-center text-2xl'>
              No hay elementos en tu pedidos aún
            </p>
        ) : (
            pedido.map( producto => (
                <ResumenProducto
                    key={producto.id}
                    producto={producto}
                />
            ))
        )}
      </div>

      <p className='text-xl mt-10'>
        Total: {formatearDinero(total)}
      </p>

      <form className='w-full'>
        <div className='mt-5'>
          <input
            type='submit'
            className={`${comprobarPedido()
             ? 'bg-indigo-100'
             : 'bg-indigo-600 hover:bg-indigo-800'
            }  px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
             value='confiramar pedido'
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  )
}
