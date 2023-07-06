"""
    Concatenacion: consiste en unir dos o más cadenas de caracteres (strings) o valores.
    La concatenación normal se realiza mediante el operador "+" entre dos cadenas de caracteres (strings). 
    El resultado de la concatenación es una nueva cadena que contiene la unión de las cadenas originales.
"""

# Ejemplo: 

# nombre = input("Ingrese su nombre: ")
# apellido = input("Ingrese su apellido: ")


# print("Hola me llamo: " + nombre + " " + apellido)


"""
    Los f-strings son una forma más conveniente y legible de incrustar valores de variables en cadenas. 
    En lugar de concatenar variables y cadenas como se hace tradicionalmente, se puede simplemente colocar 
    la variable dentro de las llaves {} en una "cadena f" o "f string" y Python la reemplazará con el valor actual de 
    la variable.
"""

# Ejemplo: 
# print(f"Hola, ¿Como estas?, me llamo {nombre} {apellido}")





# Ejemplo 2 forzando(formateando) un valor recibido por el usuario mediante un input.

# Suma de 2 valores ingresados.
numero1 = float( input("Ingrese el primer numero: ") )
numero2 = float( input("Ingrese el segundo numero: ") )
print(f"La suma de {numero1} y {numero2} es: {numero1 + numero2}")




# Datos primarios
# x = str("Hello World")
# x = int(20)	
# x = float(20.5)
# x = list(["apple", "banana", "cherry"])	
# x = tuple("apple", "banana", "cherry")	
# x = dict({"name" : "John", "age" : 36})
# x = bool (True) #(Con "T" mayuscula)