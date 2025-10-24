/*
Enunciado: Dado un numero entero, inviertelo y devuelve de nuevo el entero.
*/

function invertirnumeroentero(numero){
    let signo = Math.sign(numero);//Para Saver que signo tiene el numero
    let numeroInvertidoCadena = 0;

    if(Number.isInteger(numero)){
        numeroInvertidoCadena = Math.abs(numero) //Devuelve el valor absoluto de un número, es decir, su magnitud positiva sin importar si el número original es positivo o negativo. 
                                .toString()//Convierte un valor a su representación en cadena (string)
                                .split('')//Para separar el texto en un array de letras
                                .reverse()//Darle la vuelta a un array
                                .join('');//Unir el array en un texto
        
    }else{
        console.log("Numero no es entero")
    }

    return Number(numeroInvertidoCadena) * signo;
}

console.log(invertirnumeroentero(123));