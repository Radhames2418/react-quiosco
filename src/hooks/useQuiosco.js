import { useContext } from 'react'
import QuioscoContext from "../context/QuioscoProvider.jsx";

const useQuiosco = () => {
    return useContext(QuioscoContext);
}

export default useQuiosco;