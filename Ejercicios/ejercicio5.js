/*
Enunciado: ¿Cuanto es el X por ciento de X numero?
*/

function sacar_porcentaje(porcentaje, numero){
    let operacion = (numero * porcentaje) / 100;
    let resultado = `El ${porcentaje}% de ${numero} es: ${operacion}`;
    
    return resultado;
}

console.log(sacar_porcentaje(43,897));