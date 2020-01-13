import math # Importa el módulo que permite realizar operaciones matemáticas
print("¡Bienvenido!") # Muestra el mensaje de bienvenida
# Define la funcion que lleva el proceso de la calculadora
def calculadora(): 
    # Se escoge una opción
    eleccion = input("Escoge una opción: \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. División \n 5. Potenciación \n 6. Seno \n 7. Coseno \n 8. Raiz cuadrada \n 9. Tangente \n 10. Logaritmo \n 11. Salir \n"  )
    # Comprueba que la opción sea valida
    if eleccion == "1" or eleccion == "2" or eleccion == "3" or eleccion == "4" or eleccion == "5" or eleccion == "6" or eleccion == "7" or eleccion == "8" or eleccion == "9" or eleccion == "10":
        if eleccion == "1": # Si se elige sumar
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x+y))
        if eleccion == "2": # Si se elige restar
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x-y))
        if eleccion == "3": # Si se elige multiplicar 
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x*y))
        if eleccion == "4": # Si se elige dividir
            x = float(input("Inserte el primer numero: "))
            y = float(input ("Inserte el segundo numero: "))
            print("La respuesta es: "+ str(x/y))
        if eleccion == "5": # Si se elige realizar una potenciación
            x = float(input("Inserte la base: "))
            y = float(input("Inserte el exponente: "))
            print ("La respuesta es: "+ str(x**y))
        if eleccion == "6": # Si se elige obtener el seno
            x = float(input("Inserte el ángulo en radianes: "))
            print("La respuesta es: "+ str(math.sin(x)))
        if eleccion == "7": # Si se elige obtener el coseno
            x = float(input("Inserte el ángulo en radianes: "))
            print("La respuesta es: "+ str(math.cos(x)))   
        if eleccion == "8": # Si se elige sacar la raiz cuadrada
            x = float(input("Inserte el numero: "))
            print("La respuesta es: " + str(math.sqrt(x)))
        if eleccion == "9": # Si se elige sacar la tangente
            x = float(input("Inserte el numero en radianes: "))
            print("La respuesta es: " + str(math.tan(x)))
        if eleccion == "10": # Si se elige sacar el logaritmo
            x = float(input("Inserte el numero: "))
            print("La respuesta es: " + str(math.log(x)))
        calculadora() # Vuelve a ejecutar la calculadora
    elif eleccion == "11": # Si se elige salir
        print("Hasta pronto :D") # Muestra el mensaje de despedida
    else: # Si la elección no es valida
        print("¡Eleccion no valida!")  
        calculadora() # Vuelve a ejecutar la función
calculadora()            