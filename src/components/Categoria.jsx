import React from 'react';
import useQuiosco from "../hooks/useQuiosco.js";

function Categoria({categoria}) {

    const { categoriaActual, handleClickCategoria } = useQuiosco();
    const { icono, id, nombre } = categoria;

    return (
        <div
            className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer ${ categoriaActual.id === id ? "bg-amber-400" : "" }`}>
            <img
                className='w-12'
                alt='imagen icono'
                src={`/img/icono_${icono}.svg`}
            />

            <button
                className='text-lg font-bold cursor-pointer truncate'
                type='button'
                onClick={() =>  handleClickCategoria(id) }
            >
                {nombre}
            </button>
        </div>
    );
}

export default Categoria;