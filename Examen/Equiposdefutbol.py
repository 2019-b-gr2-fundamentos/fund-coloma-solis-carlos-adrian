# Se crea el arreglo del torneo
equipos_del_torneo = [] 
# Mensaje de Bienvenida
print("!Bienvenido, crea tu propio Torneo de fútbol :D !") 
# Funcion que permite realizar cambios al torneo mediante la eleccion de opciones
def torneo(): 
    # Recibe la elección del usuario
    Eleccion = input("Eliga una opción: \n 1. Agregar equipo \n 2. Actualizar Torneo \n 3. Eliminar equipo \n 4. Salir \n" ) 
    # Comprueba que la opcion es válida
    EsValida = Eleccion == "1" or Eleccion == "Agregar"  or  Eleccion == "2" or Eleccion == "Actualizar" or Eleccion == "3" or Eleccion == "Eliminar" or Eleccion == "4" or Eleccion == "Salir" 
    if (EsValida):
        if Eleccion == "1" or Eleccion == "Agregar" : # Si se decide agregar un equipo
         nombre_de_equipo = input("Inserte el nombre del equipo: ") # Se escoge el nombre del equipo
         indice = int(input("Inserte la posicion donde quiere ingresar el equipo: ")) # Se escoge el índice donde se pondrá el equipo
         equipos_del_torneo.insert(indice,nombre_de_equipo) # Inserta al equipo en el torneo  
         print(equipos_del_torneo)
         torneo() # Vuelve a ejecutar la función
        if Eleccion == "2" or Eleccion == "Actualizar":
            indice_de_equipo_a_actualizar = int(input("Ingrese el índice del equipo a actualizar: ")) # Se escoge el indice donde se actualizará el torneo
            nombre_de_equipo = input("Ingrese el nuevo nombre del equipo: ") # Se escoge el nuevo nombre del equipo
            if indice_de_equipo_a_actualizar + 1 <= len(equipos_del_torneo) : # Valida que en el indice escogido se encuentre algún equipo
                # Actualiza el equipo M
                equipos_del_torneo.pop(indice_de_equipo_a_actualizar)
                equipos_del_torneo.insert(indice_de_equipo_a_actualizar,nombre_de_equipo)
                print(equipos_del_torneo)
            else:
                print("¡Aún no has agregado a ningún equipo en ese índice!") # Si el indice no es valido se envia este mensaje    
            torneo() # Vuelve a ejecutar la función      
        if Eleccion == "3" or Eleccion == "Eliminar":
            equipo_que_se_elimina = input("Ingrese el nombre del equipo que se quiere eliminar: ") # Se coloca el nombre del equipo que se eliminará  
            # Valida que el equipo se encuentre en el torneo
            if equipos_del_torneo.count(equipo_que_se_elimina)!= 0: 
                equipos_del_torneo.remove(equipo_que_se_elimina)
                print(equipos_del_torneo)
            else:
                print("¡El equipo no se encuentra en el torneo!") # Si el equipo no se encuentra en el torneo se envia este mensaje
            torneo() # Vuelve a ejecutar la función    
        if Eleccion == "4" or Eleccion == "Salir":
            if len(equipos_del_torneo) > 0: # Verifica que existan equipos en el torneo
                print("El torneo esta conformado por los siguientes equipos: \n" + str(equipos_del_torneo)) # Muestra los equipos del torneo
            else:
                print("No se ha ingresado ningún equipo al torneo") # Si no existen equipos en el torneo se envia este mensaje  
    else:
        # Si la opcion no es valida entonces se vuelve a ejecutar la función
        print("La opción escogida no es válida") 
        torneo()
torneo() # Ejecuta la función
