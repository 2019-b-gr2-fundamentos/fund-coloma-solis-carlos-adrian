import math 
print("¡Bienvenido!")
def calculadora():
    eleccion = input("Escoge una opción: \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. División \n 5. Potenciación \n 6. Seno \n 7. Coseno \n 8. Raiz cuadrada \n 9. Tangente \n 10. Logaritmo \n 11. Salir \n"  )
    if eleccion == "1" or eleccion == "2" or eleccion == "3" or eleccion == "4" or eleccion == "5" or eleccion == "6" or eleccion == "7" or eleccion == "8" or eleccion == "9" or eleccion == "10":
        if eleccion == "1":
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x+y))
        if eleccion == "2":
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x-y))
        if eleccion == "3":
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x*y))
        if eleccion == "4":
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x/y))
        if eleccion == "5":
            x = float(input("Inserte la base: "))
            y = float(input("Inserte el exponente: "))
            print ("La respuesta es: "+ str(x**y))
        if eleccion == "6":
            x = float(input("Inserte el ángulo en radianes: "))
            print("La respuesta es: "+ str(math.sin(x)))
        if eleccion == "7":
            x = float(input("Inserte el ángulo en radianes: "))
            print("La respuesta es: "+ str(math.cos(x)))   
        if eleccion == "8":
            x = float(input("Inserte el numero: "))
            print("La respuesta es: " + str(math.sqrt(x)))
        if eleccion == "9":
            x = float(input("Inserte el numero en radianes: "))
            print("La respuesta es: " + str(math.tan(x)))
        if eleccion == "10":
            x = float(input("Inserte el numero: "))
            print("La respuesta es: " + str(math.log(x)))
        calculadora()
    elif eleccion == "11":
        print("Hasta pronto :D")
    else:
        print("¡Eleccion no valida!")
        calculadora()            
calculadora()            