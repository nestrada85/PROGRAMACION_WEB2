var colors = require('colors');

// function sumar(n1, n2, color){
//     const resultado = n1 + n2
//     console.log(resultado.toString() [color])
// }

// sumar (13, 9, "green")
// console.log("---------------------")
// sumar (3, 23, "red")
// console.log("---------------------")
// sumar (58, 6, "yellow")
// console.log("---------------------")

//Crear una aplicacion que permita mostrar colores dependiendo de la nota de un estudiante
//Si es menor a 65, mostrar color rojo, si entre 66 y 80, mostrar en amarillo y si es de 80 a 100 en color verde


function notaFinal(nota) {
    if (nota < 65) {
        console.log("Nota Final: " + nota.toString().red)
    }else if (nota >= 65 && nota <= 80) {
        console.log("Nota Final: " + nota.toString().yellow)
    }else if (nota > 80 && nota <= 100) {
        console.log("Nota Final: " + nota.toString().green)
    }else if (nota > 100) {
        console.log("No puede haber una calificacion mayor al 100%".red)
    }
} 


notaFinal (94)
console.log("---------------------")