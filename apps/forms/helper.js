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
/**
 * Retorna la edad en base al ano actual
 * @param {string} fechaNacimiento con formato 'yyyy-mm-dd'
 */
function calcEdadDeFechaNacimiento(fechaNacimiento) {
  // ano del ahora - el ano de nacimiento = edad
  // 2020 - 1970 => 50 anos

  // new Date(fecha) crea un objeto Date de la fecha ingresada como parametro
  const fechaNacimientoDate = new Date(fechaNacimiento);

  // new Date() crea un objeto Date con la fecha/hora/minuto/segundo/milisegundo actual
  const ahora = new Date();

  // getFullYear retorna el numero del anno
  const anoNacimiento = fechaNacimientoDate.getFullYear();
  const anoAhora = ahora.getFullYear();

  return anoAhora - anoNacimiento;
}
