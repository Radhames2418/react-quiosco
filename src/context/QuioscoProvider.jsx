import {createContext, useState} from 'react'
import { categorias as categoriaDB } from "../data/categoria.js";


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {


    const [categorias, setCategoria] = useState(categoriaDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});

    const handleClickCategoria = id => {
        const categoria = categorias.filter( categoria => categoria.id === id)[0];

        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => setProducto(producto)


    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto
            }}
        >{children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext