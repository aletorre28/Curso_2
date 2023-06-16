import axios from "axios";
import {useEffect, useState} from "react";

const ApiAxios = () => {
    const [personaje, setPersonaje] = useState([]);
    const [pagina, setPagina] = useState(1);

    async function obtenerDatos(){
        try{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${pagina}`);
            console.table(res.data);
            setPersonaje(res.data);
        }catch(error){
            console.log(`Ocurrio un error: ${error}`);
        }
    }

    useEffect(()=>{
        obtenerDatos();
    },[pagina]);

    const estilos = {
        Main: "grid grid-cols-5 h-[auto] w-full items-center justify-center gap-6 p-4 bg-gradient-to-b from-green-400 to-green-900",
        Caja: "col-span-1 bg-white/20 flex flex-col items-center justify-center h-[auto] rounded-2xl shadow-[-7px_15px_15px_3px_rgba(0,0,0,0.3)] gap-3 p-2 w-[240px]",
        Imagen: "rounded-r-lg w-[180px] h-[180px] shadow-md shadow-stone-900 mt-2",
        Parrafo: "text-white font-bold text-xl drop-shadow-lg text-center",
        Boton: "bg-white/25 rounded-full text-white font-['roboto'] p-2 shadow-[-3px_8px_10px_3px_rgba(0,0,0,0.3)]"
    }

    return (
        <main>
            <div></div>
            <div></div>
        </main>
    );
}

export default ApiAxios;