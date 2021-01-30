/**
 * Genear un nombre de usuario en bas al nombre y apellidos
 * Pattern: [primeraletradelnombre][apellidoPaterno]-[3primerasletrasdelMaterno]
 *
 * @param {string} nombre
 * @param {string} apellidoPaterno
 * @param {string} apellidoMaterno
 */
function generarNombreUsuario(nombre, apellidoPaterno, apellidoMaterno) {
  if (!nombre || !apellidoPaterno || !apellidoMaterno) {
    throw new Error(
      "Es necesario indicar todos los campos (nombre, apellidoMaterno, apellidoMaterno)"
    );
  }

  const primeraLetraNombre = nombre[0];
  // slice: permite obtener los caracteres/elementos de un array de un incio a un final
  const tresPrimerasLetrasNombre = apellidoMaterno.slice(0, 3);

  return `${primeraLetraNombre}${apellidoPaterno}${tresPrimerasLetrasNombre}`;
}
