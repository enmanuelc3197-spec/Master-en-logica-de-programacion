/*
Enunciado: Dado dos numeros, devolver cuantos numeros IMPARES hay entre ellos
*/

function numerosimpares(numero1, numero2){
    let contar = 0;
    resultado = "";

    // Asegurarnos de que uno < dos (por si los ingresan al revés)
    if (numero1 > numero2) {
        let temp = numero1;
        numero1 = numero2;
        numero2 = temp;
    }

    for(let i = numero1; i < numero2; i++){
        if(i % 2 == 0){ // si el número es impar
            contar ++; 
            resultado = `El total de numero impares es: ${contar}`; 
        }
    }
    return resultado;
}

console.log(numerosimpares(2,100));