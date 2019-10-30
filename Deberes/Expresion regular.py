#Importar el modulo regex de Python
import re 
#Compilar la regex
patron = re.compile(r'\bfoo\b')  # busca la palabra foo
# texto de entrada
texto = """ bar foo bar
foo barbarfoo
foofoo foo bar
"""
# match nos devuelve None porque no hubo coincidencia al comienzo del texto
print(patron.match(texto))
# match encuentra una coindencia en el comienzo del texto
m = patron.match('foo bar')
m
# search nos devuelve la coincidencia en cualquier ubicacion.
s = patron.search(texto)
print(s)
# findall nos devuelve una lista con todas las coincidencias
fa = patron.findall(texto)
print(fa)
