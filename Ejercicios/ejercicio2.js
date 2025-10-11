/*Dado una cadena de texto, comprobar si es un palindromo o no.
los polindromos son palabras que se leen igual aun estando invertidas.
Por ejemplo: ana,bob. otto y allivessevilla.
*/

function palindromo(texto){
    let invertido = texto
                    .split('')//Para separar el texto en un array de letras
                    .reverse()//Darle la vuelta a un array
                    .join('');//Unir el array en un texto

    return (invertido === texto);
}

console.log("Es un palindromo? " + palindromo("Enmanuel"));