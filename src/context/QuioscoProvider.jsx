import {createContext, useState, useEffect} from 'react'
import { categorias as categoriaDB } from "../data/categoria.js";
import {toast} from "react-toastify";
import clienteAxios from "../config/axios.js";


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategoria] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total, producto) => (producto.precio * producto.cantidad) + total, 0 );
        setTotal(nuevoTotal)
    }, [pedido])
    
    const obtenerCategorias = async () => {
        try {
            const {data} = await clienteAxios(`/api/categorias`);
            setCategoria(data.data)
            setCategoriaActual(data.data[0]);
        } catch (error) {

        }
    }

    useEffect(() => {
        return () => {
            obtenerCategorias()
        };
    }, []);


    const handleClickCategoria = id => {
        const categoria = categorias.filter( categoria => categoria.id === id)[0];
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => setProducto(producto)

    const handleAgregarPedido = ({categoria_id, ...producto}) =>
    {
        if (pedido.some(pedidoState => pedidoState.id === producto.id))
        {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado)
            toast.success('Actualizado Correctamente');

        } else {
            setPedido([...pedido, producto]);
            toast.success('Agregado al pedido');
        }
    }

    const handleEditarCantidad = id =>  {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizar);
        handleClickModal();
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Eliminado Correctamente');

    }

    const handleSubmitNuevaOrden = async() => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            await clienteAxios.post('/api/pedidos',
                {
                    total,
                    productos: pedido.map(producto => {
                        return {
                            id: producto.id,
                            cantidad: producto.cantidad
                        }
                    })

                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
        } catch (error) {

        }
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProducto,
                total,
                handleSubmitNuevaOrden
            }}
        >{children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext