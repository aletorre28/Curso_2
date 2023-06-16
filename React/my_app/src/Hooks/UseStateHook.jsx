/* 
    ¿Que son Hooks?
    los Hooks son una característica que permite a los desarrolladores utilizar el estado y otras 
    características de React en componentes funcionales.
    
    ¿Que es el estado?
    El estado es un objeto que contiene la informacion que define un componente en cada momento 
    durante su ciclo de vida.
    
    En pocas palabras podriamos decir que Los Hooks son funciones especiales que se pueden usar para agregar 
    características a los componentes de React.
*/

import { useState } from "react";


const UseStateHook = () => {

    /*
        useState(): Es un Hook que permite agregar un estado local 
        a los componentes funcionales. Esto significa que se puede definir un estado inicial en un 
        componente y actualizarlo en función de ciertas acciones o eventos. 
        
        El Hook useState toma un valor inicial y devuelve un array con dos elementos,
        el primer elemento es el valor del estado y el segundo es una función para actualizar el estado.
    */

     //    variable,modificador = valor inicial
    const [numero,setNumero] = useState(0);
    const [nombre, setNombre] = useState("No Definido");
    /*
        Esto es similar a declarar const numero = 0; y luego incrementarlo mediante una funcion, 
        solo que mas practico.
    */

    //Funcion para incrementar estado de la variable numero.
    function incremento(){
        setNumero(numero + 1);
    }

    return ( 
        <>
            <button style={{backgroundColor:"green"}} onClick={incremento}>Incrementar</button>
            <p>Has pulsado {numero} veces</p>

            <p>Mi nombre es: {nombre}</p>
            <input type="text" onKeyUp={(e) => setNombre(e.target.value)} />
        </>
    );
}

export default UseStateHook;