const Input = (props) => {


    const estilos = {
        color: "darkgreen",
        borderRadius: "5px",
        padding: "7px",
        fontFamily: "consolas"
    }


    return ( 
        <div>
            <h1>{props.titulo}</h1>
            <input style={estilos} type={props.tipo1} placeholder={props.placeholder1} value={props.valor1}/>
            <input style={estilos} type={props.tipo2} placeholder={props.placeholder2} value={props.valor2}/>
            <input style={estilos} type={props.tipo3} placeholder={props.placeholder3} value={props.valor3}/>
            <input style={estilos} type={props.tipo4} placeholder={props.placeholder4} value={props.valor4}/>
            <input style={estilos} type={props.tipo5} placeholder={props.placeholder5} value={props.valor5}/>
        </div>
    );
}

export default Input;