# Ortogonalidad de vectores
x1 = float(input("Inserte la primer componente del primer vector: "))
x2 = float(input("Inserte la segunda componente del primer vector: "))
y1 = float(input("Inserte la primera componente del segundo vector: "))
y2 = float(input("Inserte la segunda componente del segundo vector: "))
Producto = x1*y1+x2*y2
if Producto == 0 :
    print("Los vectores son ortogonales") 
else : 
    print("Los vectores no son ortogonales")
