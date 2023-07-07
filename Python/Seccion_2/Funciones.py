"""
    Las funciones son bloques de código reutilizable que realizan una tarea específica. 
    Se definen utilizando la palabra reservada "def" seguida del nombre de la función, los parámetros 
    de entrada (si los hay) y dos puntos. 

    El cuerpo de la función se encuentra indentado/tabulado después de la definición. 
    Las funciones pueden tomar cero o más parametros y pueden o no devolver un valor.
"""


""" En JavaSCript una funcion sin parametros luce asi:
    function saludar(){
        console.log("Hola Mundo!");
    }


    Y se llama asi:
    saludar();
"""



# En Python una funcion sin parametro luce asi:
def saludar():
    print("Hola Mundo!")

saludar()




# Scope Local y global con una funcion sin parametros:
variableUno = 1  # La variable llamada "variableUno" es global y se puede acceder desde cualquier parte del programa.


# Creamos una funcion sin parametros que use una variable global.
def sumar():
    global variableUno   # Llamando a una variable de scope(alcance) global, dentro de una funcion.

    variableDos = 2  # La variable llamada "variableDos" es local y solo puede ser accedida dentro de la funcion.

    print(f"La suma de {variableUno} y {variableDos} es: {variableUno + variableDos}")


sumar()





# Crearndo una funcion con parametros que resta 2 numeros.
def restar(num1, num2):
    print(f"La resta de {num1} y {num2} es: {num1 - num2}")


# Recibiendo datos desde la consola
respuesta1, respuesta2 = int(input("Ingrese el primer numero: ")), int(input("Ingrese el segundo numero: "))

restar(respuesta1, respuesta2)