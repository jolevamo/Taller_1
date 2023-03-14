function calcularDistancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
}

let distanciaCalculada = calcularDistancia(1,1,3,3).toFixed(2)
console.log(`La distancia es de ${distanciaCalculada} UA`);