# Importamos la libreria time que nos permitira realizar acciones con el reloj de la computadora 
# al proporcionar varios métodos y funciones.
import time

print("Hola, estamos aprendiendo que son funciones de tiempo, en Python.")


# sleep(): Pausa la ejecución del programa durante el número especificado de segundos. 
# Es útil para crear retrasos o introducir pausas en el flujo del programa.
# Recibe como parametros los segundos que se quieren pausar.

# Ejemplo de uso:
time.sleep(5) 
print("Este mensaje se esta mostrando luego de transcurrir 5 segundos")
time.sleep(5) 
print("Este mensaje se esta mostrando luego de transcurrir 5 segundos mas")



# NOTA: importamos la libreria system para poder realizar acciones en la consola.
from os import system

# system("cls") # Limpia la consola del texto previamente impreso.
# system("exit") # Cierra el programa


system("cls")




# localtime():  Devuelve el tiempo local actual como una estructura de tiempo (objeto time.struct_time) 
# que contiene varios atributos como año, mes, día, hora, minutos, segundos, etc.

tiempoActual = time.localtime()

print(f"La fecha actual es: {tiempoActual}")
print(f"El año actual es: {tiempoActual.tm_year}")
print(f"La hora actual es: {tiempoActual.tm_hour}")
print(f"El minuto actual es: {tiempoActual.tm_min}")



system("cls")



# strftime(formato, estructura): Convierte una estructura de tiempo (time.struct_time) en una cadena de caracteres formateada según el 
# formato especificado. El formato debe seguir una sintaxis especial para representar diferentes componentes del tiempo, como %Y para el año 
# completo, %m para el mes, %d para el día, %H para la hora en formato de 24 horas, %M para los minutos, %S para los segundos.

tiempoActual = time.localtime()
tiempFormateado = time.strftime("%d/%m/%Y %H:%M:%S", tiempoActual)
print(tiempFormateado)