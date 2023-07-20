import React from 'react'
import {formatearDinero} from "../helpers/index.js";

function Producto({ producto }) {

    const { nombre, imagen, precio } = producto;


    return (
        <div className={'border p-3 shadow bg-white'}>
            <img
                className={'w-full'}
                src={`/img/${imagen}.jpg`}
                alt={`Imagen ${nombre}`}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500 ">{formatearDinero(precio)}</p>

                <button
                    type='button'
                    className={'bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'}
                >
                    agregar
                </button>
            </div>
        </div>
    );
}

export default Producto;