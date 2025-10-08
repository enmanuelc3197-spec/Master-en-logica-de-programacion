/*
Enunciado del ejercicio 1:
Dado un numero, devuelve su tabla de multiplicar completa (del 1 al 10).
*/

function TablaMultiplicacion(numero){
    resultado = `# tabla de ${numero}\n`;

    for(let i=1; i<=10; i++){
        let multiplicar = (i*numero);
        resultado += `${i} X ${numero} = ${multiplicar}\n`
    }
    return resultado;
}

console.log(TablaMultiplicacion(5));