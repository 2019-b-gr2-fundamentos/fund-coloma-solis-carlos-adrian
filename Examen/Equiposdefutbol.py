equipos_del_torneo = []
def main():
    Eleccion = input("Eliga una opción: \n 1. Agregar equipo \n 2. Actualizar Torneo \n 3. Eliminar equipo \n 4. Salir \n" )
    if Eleccion == "1" or Eleccion == "Agregar" :
         nombre_de_equipo = input("Inserte el nombre del equipo: ")
         indice = int(input("Inserte la posicion donde quiere ingresar el equipo: "))
         equipos_del_torneo.insert(indice,nombre_de_equipo)   
         main()
    if Eleccion == "2" or Eleccion == "Actualizar":
        indice_de_equipo_a_actualizar = int(input("Ingrese el índice del equipo a actualizar: "))
        nombre_de_equipo = input("Ingrese el nuevo nombre del equipo: ")
        if indice_de_equipo_a_actualizar + 1 <= len(equipos_del_torneo) :
                equipos_del_torneo.pop(indice_de_equipo_a_actualizar)
                equipos_del_torneo.insert(indice_de_equipo_a_actualizar,nombre_de_equipo)
        else:
                print("No has agregado aún a ningún equipo en ese índice")    
        main()        
    if Eleccion == "3" or Eleccion == "Eliminar":
        equipo_que_se_elimina = input("Ingrese el nombre del equipo que se quiere eliminar: ")    
        equipos_del_torneo.remove(equipo_que_se_elimina)
        main()
    if Eleccion == "4" or Eleccion == "Salir":
        print(equipos_del_torneo) 
main()
