"""
A diferencia de las listas y los diccionarios, las tuplas son estructuras de datos inmutables en Python. 
Debido a esto, los métodos disponibles para las tuplas son limitados.
"""



tupla1 = (1, 2, 3, 2, 7, 8, 6, 4, 2, 9, 4, 7, 4, 0, 4, 4)
tupla2 = ("Cinco","Uno","Tres","Nueve","Tres","Uno","Tres")




# len(): Devuelve la longitud de una tupla.
print("La longitud de la tupla 1 es: ", len(tupla1))
print("La longitud de la tupla 2 es: ", len(tupla2))




# index(): Devuelve el índice de la primera aparición de un elemento en la tupla.
print(f"El indice de 4 en la tupla 1 es: {tupla1.index(4)}") # retorna 7
print(f"El indice de 'Tres' en la tupla 2 es: {tupla2.index('Tres')}") # retorna 2



# count(): Devuelve el número de veces que aparece un elemento en la tupla.
print(f"El numero de veces que aparece 4 en la tupla 1 es: {tupla1.count(4)}") # retorna 5
print(f"El numero de veces que aparece 'Tres' en la tupla 2 es: {tupla2.count('Tres')}") # retorna 3