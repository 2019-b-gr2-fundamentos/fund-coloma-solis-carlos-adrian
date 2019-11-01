# Indice de Masa Corporal
peso = float(input("Inserte su peso: "))
estatura = float(input("Inserte su estatura: "))
IMC = peso/(estatura**2) #Formula del IMC 
if IMC < 18.5:
    print("Tienes un peso menor a lo normal")
if IMC >= 18.5 and IMC <= 24.9 : 
    print("Tienes un peso normal")
if IMC > 24.9 and IMC <= 29.9 :
    print("Tienes un peso superior a lo normal")
if IMC > 29.9 :
    print("Tienes obesidad")       
