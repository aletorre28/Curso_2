"""
    Escribe una función llamada calcular_imc(peso, altura) que calcule el IMC de una persona. 
    La función debe recibir el peso en kilogramos y la altura en metros, y devolver el resultado 
    del cálculo del IMC. 
    
    Luego, solicita al usuario que ingrese su peso y altura, y muestra por pantalla su IMC utilizando una 
    estructura de control if o un ternario.

    NOTA, La formula para calcular el IMC es: peso / (altura ** 2).

    Guía general para los rangos de IMC
        Bajo peso: IMC menor a 18.5
        Peso normal: IMC entre 18.5 y 24.9
        Sobrepeso: IMC entre 25 y 29.9
        Obesidad: IMC igual o mayor a 30
"""

def calcularIMC(peso, altura):
    IMC = peso / (altura ** 2)
    print(f"Tu IMC es: {IMC}")
    print("Estas en un rango peso bajo" if IMC < 18.5 else "Estas en un rango de peso normal" if IMC >= 18.5 and IMC < 24.9 else "Estas en un rango de sobrepeso" if IMC >= 25 and IMC < 29.9 else "Estas en un rango de obesidad")

peso = float(input("Ingrese su peso en kilogramos: "))
altura = float(input("Ingrese su altura en metros: "))
calcularIMC(peso, altura)









"""
    Elabora un algoritmo que permita calcular el total de la suma de todas las ventas de un dia en una tienda.
"""

from functools import reduce
ventas = [100,250,320,500,110]
VentasTotal = reduce(lambda parametro1, parametro2: parametro1 + parametro2, ventas)   
print(f"El total de las ventas es: {VentasTotal}") # 1280

"""
    100+250 = 350
    350+320 = 670
    670+500 = 1170
    1170+110 = 1280
"""






"""
    solicita al usuario(cajero) el precio de un producto y el porcentaje de descuento del mismo. 
    Calcula y muestra el precio final después de aplicar el descuento.
"""
from os import system
system("cls")

print("="*15+" CALCULAR DESCUENTO "+"="*15)
precioProducto = float(input("Ingrese el precio del producto: "))
porcentajeDescuento = float(input("Ingrese el porcentaje de descuento: "))

def calcularDescuento(precioProducto, porcentajeDescuento):
    # La formula para calcular el descuento es: precioProducto * porcentajeDescuento / 100
    precioFinal = precioProducto - (precioProducto * porcentajeDescuento / 100)
    return precioFinal

print(f"El precio final es: {calcularDescuento(precioProducto, porcentajeDescuento)}")
print("="*50)







# Solicita al usuario tres calificaciones de un estudiante y determina su calificacion final.

# Importamos la libreria time que nos permitira realizar acciones con el reloj de la computadora.
import time

time.sleep(3)
system("cls")

nota1, nota2, nota3 = float(input("Ingrese la primera nota: ")), float(input("Ingrese la segunda nota: ")), float(input("Ingrese la tercera nota: "))

def notaFinal(nota1, nota2, nota3):
    notaFinal = (nota1 + nota2 + nota3) / 3
    return notaFinal

notaEstudiante = round(notaFinal(nota1, nota2, nota3))

print(f"La nota final es: {notaEstudiante}")
print("Reprobado" if notaEstudiante < 10 else "Aprobado" if notaEstudiante >= 10 and notaEstudiante <= 15 else "Aprobado (Exelente)")





"""
    Solicita al usuario el número de horas trabajadas durante 1 semana y la tarifa por cada hora. 
    Calcula el salario bruto del empleado.
    Añade una bonificacion del 5% (por un dia festivo).
    Añade una bonificacion de viaticos del 6%.
    Descuenta el 4% del seguro de salud.
    
    Luego Muestra el resultado.
"""



"""
    Opcional: Al momento de realizar cada operacion muestra un mensaje en pantalla que diga calculando x cosa 
    y luego de dos segundos el siguiente proceso.

    Ejemplo:
        print("Hola 1")
        time.sleep(3)
        print("Hola 2")
        time.sleep(3)
        print("Hola 3")
        time.sleep(3)
        print("Hola 4")
        time.sleep(3)
        print("Hola 5")
        time.sleep(3)
        print("Hola 6")
"""