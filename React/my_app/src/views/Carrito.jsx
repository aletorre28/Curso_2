import Parrafo from "../components/Parrafo";

const Carrito = () => {
    return ( 
        <>
            <Parrafo alineacion="right" contenido="el mismo componente con otro valor en la propiedad contenido" />
            <h1>Carrito</h1>
            <Parrafo contenido="Este contenido se esta enviando desde una propiedad creada con props" />
            <Parrafo alineacion="center" contenido="Esto es el mismo componente" />
            <Parrafo contenido="Esta tambien es el mismo componente con otro valor" />
        </>
    );
};

export default Carrito;