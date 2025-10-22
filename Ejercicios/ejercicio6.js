/*
Enunciado: Dibujar un cuadrado hueco con asterisco 
*/

function dibujarCuadradoHueco(tamano) {
    let figura = "";

    for (let i = 0; i < tamano; i++) {      // filas
        for (let j = 0; j < tamano; j++) {  // columnas
            // dibuja * solo en los bordes
            if (i === 0 || i === tamano - 1 || j === 0 || j === tamano - 1) {
                figura += "*";
            } else {
                figura += " ";
            }
        }
        figura += "\n"; // salto de línea
    }

    console.log(figura);
}

dibujarCuadradoHueco(4);