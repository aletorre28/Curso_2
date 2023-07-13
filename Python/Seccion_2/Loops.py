# Bucle while

contador = 1
while contador <= 10:
    print(contador)
    contador += 1


from os import system
system("cls")

eleccion = input("Ingresa 1 para iniciar: ")
while eleccion == "1":
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    print(f"\nLa suma es: {num1 + num2}")

    # reincia el ciclo si la respuesta es 1 
    eleccion = input("Ingresa 1 para iniciar: ")

    # se limpia la consola 
    system("cls")

#Bucle for
"""
Anteriormente en js aprendimos a usar for de la siguiente manera:
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
En Python luce mas como un for in.
"""
system("cls")


for contador in range(1, 11):
    print(f"El contador es: {contador}")
