const peso = Number(prompt("Inserte su peso en kg"));
const estatura = Number(prompt("Inserte su estatura en metros"));
const IMC = peso/(estatura*estatura)
if (IMC < 18.5){
    console.log("Tienes un peso inferior a lo normal")
}
if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Tienes un peso normal")
}
if (IMC > 24.9 && IMC <= 29.9){
    console.log("Tienes un peso superior a lo normal")
}
if (IMC > 29.9){
    console.log("Tienes obesidad")
}