# Notas 3

```javascript
// estructura:
// typeof <alguna-variable>
// te responde con el tipo de dato de la variable que puede ser:
//   'number', 'string', 'object', 'boolean'

console.log("que tipo es:", typeof 1); // responde con 'number'
console.log("que tipo es:", typeof true); // responde con 'boolean'
console.log("que tipo es:", typeof "hola"); // responde con 'string'
console.log("que tipo es:", typeof {}); // responde con 'object'
var algunValor = "hola como tas";
console.log("q es?", typeof algunValor); // responde con 'string'

// Puede usar con condicionales
var algunTexto = "hello";
if (typeof algunTexto === "string") {
  console.log("Es una cadena");
}
if (typeof algunTexto === "number") {
  console.log("es un numero");
}
if (typeof algunTexto === "boolean") {
  console.log("es un booleano");
}
if (typeof algunTexto === "object") {
  console.log("es un object");
}

// Como saber si un elemento es un arreglo/array
// estructura: Array.isArray(<alguna variable|algun valor>),
// te retorna un valor boolean: True|False
var isArray = Array.isArray([]);
console.log("isArray", isArray);

// Puede ser usado en condicionales
var elementoAnalizar = [];
if (Array.isArray(elementoAnalizar)) {
  console.log("Es un arreglo");
} else {
  console.log("No es un arreglo, pero es un ", typeof elementoAnalizar);
}
```
