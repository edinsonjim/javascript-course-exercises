# Notas

```javascript
// como definir una variable
// var <nombreVariable> = <algun valor inicilizador>;
// var <nombreVaribale>; -> Esta variable tiene como valor 'undefined'

// como definir una funcion
// function <nombre funcion>(<parametros>) {}
// Como definir una variable en una funcion
//  1. definida como parametro
//  2. Definida con 'var'
// EJEMPLOS:
// CASO 1 (definida como parametro):
// function <nombre funcion>(miVariable1, miVariable2, miVariable3) {}
function sumar(valorA, valorB) {
  return valorA + valorB;
}
console.log(sumar(10, 20));
var pacoVariable = 100;
var picoVariable = 3000;
console.log(sumar(pacoVariable, picoVariable));

function promedio(nota1, nota2, nota3, nota4, nota5) {
  return nota1 + nota2 + nota3 + nota4 + nota5 / 5;
}
var resultado = promedio(10, 1, 3, 5, 11);
```
