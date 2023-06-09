//Se puede excribir sfc para generar la estructura basica de un componente/vista

// Importamos el componente que queremos renderizar
import MiPrimerComponente from "../components/MiPrimerComponente";
const MiPrimeraVista = () => {
    return ( 
        <>
            <h1>Esta es mi primera vista</h1>
            <MiPrimerComponente/>
            <p>Lo que esta arriba de este texto es un componente</p>
        </>
    );
}

export default MiPrimeraVista;