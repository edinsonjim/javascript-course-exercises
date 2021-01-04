| Column1 | Column2 | Column3 | Column4 |
| ------- | ------- | ------- | ------- | --------- |
| 10      | 11      | 12      | 13      | -> Fila 1 |
| 14      | 15      | 16      | 17      | -> Fila 2 |
| 18      | 19      | 20      | 21      | -> Fila 3 |

```javascript

<variable2D>.forEach((valoresEnFila, indiceFila)) {
  elemento -> es de tipo arreglo, because tiene los elementos de toda la fila de la matriz.

  console.log('valoresEnFila', valoresEnFila);

  valoresEnFila.forEach(valorEnColumna, indiceEnColumna) {
    valorEnColumna -> Es el valor numerico de la matriz uno a la vez.

    console.log('valorEnColumna', valorEnColumna);
  }
}
```

```javascript
1.forEach() =>> ERROR -> 1 no es array.
true.ForEach() -> true no es array.

Operaciones con arrays.
callback es una function -> que puede devolver un valor o no.

.forEach: -> callback(elemento, indiceDelElemento) ->

  astronautas.forEach(astronauta, indexAstronauta)
  marcas.forEach(marca, indexMarca)

.map -> callback(elemento, indiceDelElemento)
  astronautas.map(astronauta, indiceAstronauta)
  marcas.map(marca, indiceMarca)
.reduce -> callback(acumulador, elemento, indice)
  marcas.reduce(acumuladorMarcas, marca, indiceMarca)
.filter -> callback(elemento, indice)
.find -> callback(elemento, indice)
.findIndex -> callback(elemento, indice)

```

programacion logica:
para acceder a:
15: matriz[fila-2][columna-2]
21: matriz[fila-3][columna-4]

codigo:
15: matriz[1][1]
21: matriz[2][3]

```javascript
arreglo unidimensional/1D = [1, 2, 3];
arreglo bimensional/matriz/2D = [[1, 2], [3, 4]]
arregla tridimensional/3D =
arreglo multimedional/4D -> tensor  -> GPU/TPU
 multicore -> 12, 16 -> 12 processos a lavez
 GPU ->
 Machine Learning / Deep Learning -> GPU/TPU

---

for (var fila = 0; fila < matriz.length; fila++) {
  for (var columna = 0; columna < matriz[fila].length; columna++) {
    valorAlgo = matriz[fila][columna]
  }
}

```
