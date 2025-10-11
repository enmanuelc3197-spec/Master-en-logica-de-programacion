/*
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
la frace y la palabra deben ser parametros de una funcion
*/

function coincidencias(frase, busqueda){
    let texto_limpio = frase
                            .toLowerCase() //Convierte todo el texto en miniscula
                            .replace(/[!.,-]/gi, ''); //Todos los caracteres que encuentre la va asustituir por un espacio vacio 
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){ //includes() Busca si existe una palabra dentro de un texto.
        let palabras = texto_limpio.split(" ");// split(" ") Separa un texto en un arreglo de palabras
        let mapa = {};

        for(let palabra of palabras){ //Me trae el valor de de cada elemento en el array
            if (mapa[palabra]) {
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }

            resultado = mapa[busqueda];
        }
    }else{
        return resultado = 0;
    }

    return resultado; 
}
                                                

console.log("Numero de coincidencias: ", coincidencias("Hola como como estas", "como"));