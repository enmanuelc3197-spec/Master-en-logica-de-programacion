/*
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar 
sin usar metodos propios del lenguaje, solo estructuras de control.
*/

/* Tienes dos ejemplo de hacer este ejercicio. El Primero cumple al 100% con el enunciado.
El segundo dependiendo la persona que te corrija puede no gustarle el for...of en JavaScript es una forma moderna de recorrer estructuras iterables, 
y técnicamente se apoya en el iterador interno del lenguaje.
Por eso, algunos ejercicios muy estrictos podrían considerar que sí está usando una característica propia del lenguaje (aunque no un método explícito).
*/
//Primera forma
let cadena = 'Hola';
let cadena_invertida = "";

for(let i = cadena.length - 1; i>=0; i--){//.length Esta propiedad devuelve el número de caracteres de una cadena. 
    cadena_invertida += cadena[i];
}

console.log(cadena);
console.log(cadena_invertida);

//Segunda forma
function invertir(texto) {
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

console.log("El texto invertido se ve asi: ", invertir("Como estan todos"))