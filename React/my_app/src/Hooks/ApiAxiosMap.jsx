import axios from "axios";
import { useEffect, useState } from "react";

const ApiAxiosMap = () => {

    // Creamos las variables de estado.
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    /*
        Almacenar el estado de personajes utilizando el hook useState en este caso con la funcion setPersonajes
        y actualizar su valor dentro de la función obtenerDatos() una vez que se ha obtenido la respuesta de la API.

        La respuesta de la API sera en base a la URL consultada, la URL se modificara dinamicamente mediante el hook useState
        y la variable pagina con la funcion setPagina.

        setPagina incrementara o decrementara el valor de la variable pagina, una vez que esto ocurra la consulta se volvera
        a realizar, y se volverá a renderizar el componente.

        Es aqui cuando la variable personajes se actualiza, y React renderizara el componente y mostrará los datos obtenidos.
    */

    // Realizamos la peticion a la api usando Axios
    const obtenerDatos = async () => {
        const respuesta = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
        // Muestro los datos obtenidos de 1 personaje especifico en la consola.
        console.log(respuesta.data.results[0].name);

        // Cargo con el array de 20 personajes a mi variable personajes, usando la funcion setPersonajes.
        setPersonajes(respuesta.data.results);
    }


    useEffect(
        () => {
            obtenerDatos();
        },[pagina]
    );


        const estilos = {
            Section: "bg-gradient-to-bl from-slate-400 to-slate-900",
            Main: "grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-[auto] w-full items-center justify-center gap-6 p-4",
            Caja: "col-span-1 bg-white/20 flex items-center h-[220px] rounded-2xl shadow-[-7px_15px_15px_3px_rgba(0,0,0,0.3)] gap-3 w-[auto]",
            Imagen: "rounded-l-lg w-[230px] h-[220px] shadow-md shadow-stone-900",
            Titulo: "text-white font-bold text-4xl text-center drop-shadow-lg",
            Parrafo: "text-white font-bold text-xl drop-shadow-lg text-center",
            Boton: "bg-white/25 rounded-full text-white font-['roboto'] p-2 shadow-[-3px_8px_10px_3px_rgba(0,0,0,0.3)]",
            info: "text-white font-semibold text-[16px] drop-shadow-lg w-full",
            CajaBotones: "flex justify-center w-[96vw] gap-4 mt-2"
        }   


    return ( 
        <section className={estilos.Section}>
            <h1 className={estilos.Titulo}>Api de Rick And Morty</h1>
            <main className={estilos.Main}>
                {/* Personajes */}
                {personajes.map(
                    (elemento) => (
                        <div className={estilos.Caja}>
                            <img className={estilos.Imagen} src={elemento.image} alt="Imagen del personaje" />
                            <div className="flex flex-col gap-2 w-[370px] ml-3">
                                <span className={estilos.info}>Nombre: {elemento.name}</span>
                                <span className={estilos.info}>Sexo: {elemento.gender}</span>
                                <span className={estilos.info}>Especie: {elemento.species}</span>
                                <span className={estilos.info}>Ubicacion: {elemento.location.name}</span>
                                <span className={estilos.info}>Origen: {elemento.origin.name}</span>
                                <span className={estilos.info}>Status: {elemento.status}</span>
                            </div>
                        </div>
                    )
                )}
            </main>
            {/* Botones */}
            <div className={estilos.CajaBotones}>
                    {/* Boton anterior */}
                    <button className={estilos.Boton} onClick={ () => (pagina === 1) ? setPagina(42) : setPagina(pagina - 1)}>
                        Pag. Anterior
                    </button>

                    {/* Pagina actual */}
                    <span className="text-white mt-2">{pagina}</span>
                    
                    {/* Boton siguiente */}
                    <button className={estilos.Boton} onClick={ () => (pagina === 42) ? setPagina(1) : setPagina(pagina + 1)}>
                        Pag. Siguiente
                    </button>
                </div>
        </section>
    );
}

export default ApiAxiosMap;