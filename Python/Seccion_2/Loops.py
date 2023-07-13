"""
    Los loops, también conocidos como bucles, son una estructura fundamental en la programación que permiten 
    repetir un bloque de código varias veces hasta que se cumpla una condición. 

    En Python, existen dos tipos de loops: el bucle while y el bucle for.
"""


# Bucle While

contador = 1
while contador <= 10:
    print(contador)
    contador += 1



# Ejemplo 2: sumar 2 numeros mientras la opcion sea 1
# NOTA: El comando system('cls') es utilizado para limpiar la pantalla en sistemas operativos Windows,
# system('clear') en sistemas operativos Mac/Linux

# Se importa la libreria system del S.O.
from os import system
system("cls")

# eleccion = input("Ingrese 1 para iniciar: ")

# while eleccion == "1":
#     num1 = int(input("Ingrese el primer numero: "))
#     num2 = int(input("Ingrese el segundo numero: "))
#     print(f"\nLa suma es: {num1 + num2}")

#     # Reiniciar el ciclo si la respuesta es 1
#     eleccion = input("Ingrese 1 para continuar: ")

#     # Limpiar la consola
#     system("cls")



# Bucle For

""" Anteriormente aprendimos a usar este loop en JavaScript, de la siguiente manera:

    for (let i = 1; i < 11; i++){
        console.log(i)
    }

    En Python esto luce mas a un for in.
"""


for contador in range(1, 11):
    print(f"El contador es: {contador}")



system("cls")



# Ejemplo 2 de for: Usando for para iterar sobre arrays de Python
listaFrutas = ["Uva","Pera","Manzana","Coco","Limon","Mango","Fresa"]

for fruta in listaFrutas:
    print(f"La fruta actual es: {fruta}")




system("cls")



# Ejemplo 3
# podemos usar un bucle for junto con la función enumerate() para lograr una funcionalidad 
# similar a for each en otros lenguajes de programación. 
# La función enumerate() devuelve un objeto iterable que produce tuplas de clave/valor (key/value) para 
# cada elemento de una lista.

for indice,fruta in enumerate(listaFrutas):
    print(f"El indice {indice} contiene la fruta: {fruta}")
