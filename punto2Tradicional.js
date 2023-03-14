//Se declara el objeto (BD)

let navesPilotos = ['ARQ2555: Sara Bel-Sun','ARQ2556: Nodin Chavdri','ARQ2557: Finn']

//Obteniedno arreglo con nombre de nave y Piloto
EncontrarNombrePiloto = function (palabraClave){
    return(palabraClave.split(":"))     
}

//Se asigna a una variable la función anterior
let nombrePiloto = EncontrarNombrePiloto(navesPilotos[0])

//Se imprime el nombre de piloto para la nave que se quiera consultar
console.log("El nombre del piloto de la nave "+nombrePiloto[0]+" es: "+nombrePiloto[1]);
