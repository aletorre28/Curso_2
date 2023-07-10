"""
    Los métodos de strings son funciones que se utilizan para realizar operaciones comunes en cadenas de texto.
"""


# len(): devuelve la longitud de la cadena de texto.
cadenaDeTexto1 = "lorem ipsum"
print(f"La longitud de la cadena de texto 1 es: { len(cadenaDeTexto1) }")
print(f"La longitud de la cadena de texto 2 es: { len(' lorem ipsum otra cosa ') }")


from os import system
system("cls") # Limpia la consola del texto previamente impreso.



# count(): Cuenta el número de ocurrencias de una subcadena en una cadena.

cadenaDeTexto2 = "Esto, ok, es una cadena de texto, ok, que contiene un mensaje."

print(f"La oracion es: { cadenaDeTexto2 }")
print(f"La palabra ok aparece: { cadenaDeTexto2.count('ok') } veces")
print("Muy bien, no usaste la palabra: ok" if cadenaDeTexto2.count('ok') == 0 else f"Puedes mejorarlo, usaste la palabra: ok {cadenaDeTexto2.count('ok')} veces")