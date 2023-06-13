const Parrafo = (props) => {
    return ( 
        <p style={{textAlign: props.alineacion}}>
            {props.contenido}
        </p>
    );
}

export default Parrafo;