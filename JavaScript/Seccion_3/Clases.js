/* ¿Que es una Clases?
    Una clase es una plantilla o molde para crear objetos(instancias), 
    que tienen propiedades y métodos en común. 

    Una clase se define utilizando la palabra clave "class" seguida del nombre de la clase (class Persona{...}). 
    Dentro de las llaves se definen las propiedades y métodos de la clase.

    - Constructor: es un método especial de la clase que se ejecuta automáticamente cuando 
    se crea una nueva instancia, su rol principal es inicializar los atributos de la clase con los 
    valores pasados como argumentos al crear una nueva instancia, usando la palabra reservada new.
    Ejemplo: new Persona("nombre","apellido")

    - Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    El método Saludo está fuera del scope del constructor, pero puede acceder a 
    los atributos de la clase que se han declarado en el constructor a través de 
    la palabra clave this. Esto es posible porque this se refiere a la instancia actual de la clase.

    - this: hace referencia al elemento padre, es decir al objeto instanciado.


    NOTA:
        Es una convención común en JavaScript declarar las clases con la 
        primera letra de cada palabra en mayúscula. Ejemplo "Persona" o "Usuario",
        sin embargo es solo una buena practica, no evita el buen funcionamiento de las clases.
        
        Esto se realiza con la finalidad de diferenciar de manera mas facil cuando
        se emplea una clase, una variable o una funcion.
*/

class Personaje{
    // Constructor: asigna valores a las propiedades.
    constructor(vidaPersonaje, velocidadPersonaje, habilidadPersonaje, caminarPersonaje, correrPersonaje, atacarPersonaje){
        this.vida = vidaPersonaje,
        this.velocidad = velocidadPersonaje,
        this.habilidad = habilidadPersonaje,
        this.caminar = caminarPersonaje,
        this.correr = correrPersonaje,
        this.atacar = atacarPersonaje
    }
}


let mario = new Personaje(100, 100, "Bolas de Fuego", false, true, true);

console.log(mario);

function saludar(){
    return "Hola soy Bowser"
}

let luigi = new Personaje(90,105,"pelear con espada",true,true,false);
let bowser = new Personaje(300,40,"bolas de fuego",true,false,saludar);


console.log(luigi)
console.log(bowser)






// En este ejemplo, la clase "Persona" tiene un constructor que se utiliza para asignar valores a las 
// propiedades "nombre", "apellido" y "edad" al crear una nueva instancia de la clase, 
// esto quiere decir al crear un nuevo objeto. 

// También tiene un método que es una funcion llamada "saludo" que retorna un mensaje.


class Persona {
    //Constructor: asigna valor a las propiedades.
    constructor(nombrePersona, apellidoPersona, edadPersona) {
        this.nombre = nombrePersona,
        this.apellido = apellidoPersona,
        this.edad = edadPersona
    }

    //Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    saludo(){
        return (`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad`);
    }
}


// Instanciar clase Persona 2 veces
let persona1 = new Persona("Daniel", "Perez", 20);
let persona2 = new Persona("Carlos","Duarte", 30);


console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.saludo);
console.log(persona1.saludo());




// clase Auto que tiene las propiedades: Marca, Modelo, Annio, Color, Encendido, Apagado
// Y los metodos: Encender, Apagar, Avanzar y Deterner

class Auto{
    //Constructor: asigna valor a las propiedades.
    constructor(marcaAuto, modeloAuto, annioAuto, colorAuto, encendidoAuto, apagadoAuto) {
   //this.propiedad = parametro
        this.Marca = marcaAuto;
        this.Modelo = modeloAuto;
        this.Annio = annioAuto;
        this.Color = colorAuto;
        this.Encendido = encendidoAuto;
        this.Apagado = apagadoAuto;
        this.Avanzar = false;
        this.Detener = true;
    }

    //Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    Encender(){
        if(this.Apagado == true){
            this.Apagado = false;
            this.Encendido = true;
            return ("El auto se ha encendido");
        }else if(this.Apagado == false){
            return ("El auto ya estaba encendido");
        }
    }

    Apagar() {
        if(this.Encendido == true){
            this.Encendido = false;
            this.Apagado = true;
            return ("El auto se ha apagado");
        }else if(this.Apagado == true){
            return ("El auto ya estaba apagado");
        }
    }

    avanzar() {
        return ("El auto esta en marcha");
    }

    detener() {
        return ("El auto se detuvo");
    }
}


let ferrari = new Auto("Ferrari","Testarossa",1995,"Rojo",false,true);


//Llamo a todo el objeto
console.log(ferrari);



console.log(ferrari.Marca);



console.log(ferrari.Modelo);



console.log(ferrari.Annio);



console.log(ferrari.Color);



console.log(ferrari.Encendido);



console.log(ferrari.Apagado);




// Valores por defecto del objeto ferrari
console.log(ferrari.Encendido);
console.log(ferrari.Apagado);

// Encender el auto para cambiar estados(valor) de las propiedades
console.log(ferrari.Encender());

// Mostrando valores de las propiedades luedo de encender el auto con el metodo .Encender()
console.log(ferrari.Encendido);
console.log(ferrari.Apagado);


console.log(ferrari.Encender());





console.log(ferrari.Apagar());
console.log(ferrari.Apagar());

console.log(ferrari.Encendido);
console.log(ferrari.Apagado);







/*
    La principal diferencia entre clases y funciones constructoras es: 
    -la sintaxis utilizada para crearlas y utilizarlas.

    Las clases se introdujeron en ECMAScript 6, la versión actual del estándar de JavaScript, 
    y proporcionan una sintaxis más clara y legible para crear objetos y definir sus propiedades y métodos. 

    En resumen, las clases y las funciones constructoras son dos formas diferentes de crear objetos en 
    JavaScript, siendo la principal diferencia entre ellas la sintaxis más limpia y legible y la creacion de metodos,
    por parte de las clases.
*/



// ***** EJERCICIO *****
// Crea un formulario basico que solicite nombre, apellido y edad, tambien debe contar con un boton(basico) 
// para registrar. Crea una funcion llamada registro que obtenga los datos del formulario y cree nuevas 
// instancias de una clase llamada Usuarios, ademas debe alojarlas en un array llamado instancias.

// (Opcional) Tambien crea un boton que permita ver los usuarios registrados en la pagina web.
// Tips: Debes usar, selectores, eventos, createElement, innerText, appendChild y posiblemente .map()
// Nota: Utiliza la forma de manejar evento de tu preferencia.


//La clase usuario genera un array de objetos, y estos objetos seran los usuarios registrados.
class Usuario{
    constructor(nombreUsuario,apellidoUsuario,edadUsuario){
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
    }
}

// Los usuarios registrados se almacenaran en el array/lista llamado instancias
let instancias=[];


function registrarUsuario(){
    // Al iniciar la funcion se realiza la captura del valor de los imputs
    // y se almacena en variables
    let Nombre = document.getElementById("inputNombre").value;
    let Apellido = document.getElementById("inputApellido").value;
    let Edad = document.getElementById("inputEdad").value;

    // Se utiliza el metodo para arrays .push para agregar el objeto instanciado al final de una lista
    instancias.push( new Usuario(Nombre,Apellido,Edad) )

    // Se retorna un mensaje de registro exitoso
    console.log("Usuario Registrado");
    // console.table(instancias)

    // Se mapea/recorre el array/lista de objetos/instancias registrados y se muestran en consola
    instancias.map(
        (usuario)=>{
            console.log(`Usuario registrado: ${usuario.nombre} ${usuario.apellido} ${usuario.edad}`)
        }
    )

}


// Se selecciona el boton que tendra el evento para registrar los usuarios
let botonEnviar = document.getElementById("enviar");

// Se agrega una escucha de evento tipo click al boton que ejecutara 
// la funcion de registro llamada registrarUsusario
botonEnviar.addEventListener("click", registrarUsuario);