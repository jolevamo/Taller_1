//Se declara el objeto (BD)
let navesPilotos = ['ARQ2555: Sara Bel-Sun','ARQ2556: Nodin Chavdri','ARQ2557: Finn']

//Obteniedno arreglo con nombre de nave y Piloto
EncontrarNombrePiloto = palabraClave => (palabraClave.split(":"))

//Se asigna a una variable la función anterior
let nombrePiloto = EncontrarNombrePiloto(navesPilotos[2])

//Se imprime el nombre de piloto para la nave que se desee consultar
console.log("El nombre del piloto de la nave "+nombrePiloto[0]+" es: "+nombrePiloto[1]);