//Se crea función para calcular la media de la temperatura
promedioTemperaturaDiaria = (tempMax,tempMin) => (tempMax+tempMin)/2

//Se imprime el mensaje con el resultado obtenido a tráves de invocar la función
console.log("La temperatura media del día es:"+promedioTemperaturaDiaria(20.5,6.3));