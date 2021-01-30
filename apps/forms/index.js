// TODO:
// Utilizamos
// 1. input[text], input[date], input[checkbox], input[radiobutton]
// 2. select
// 3. evento: onChange
//      observer pattern
//      estado inicial: ''
//      estado inicial: 'A' -> emite el evento del onChange
//      estado siguiente: 'AK' -> emite un evento del onChange
// 4. evento: onKeyUp: cuando se suelta una tecla
// 5. evento: onKeyDown: cuando se presiona una tecla
const nombreUsuarioRef = document.getElementById("txtNombreUsuario");
const nombreRef = document.getElementById("txtNombre");
const apellidoPaternoRef = document.getElementById("txtApellidoPaterno");
const apellidoMaternoRef = document.getElementById("txtApellidoMaterno");

/**
 * evento: 'change'
 * escucha los cambios del input de referencia.
 */
nombreRef.addEventListener("change", (event) => {
  // Obtener valor del elemento
  // opcion-1: quando se tiene el elemento de referencia
  const nombre = nombreRef.value;
  const nombreFromTarget = event.target.value;

  const apellidoPaterno = apellidoPaternoRef.value;
  const apellidoMaterno = apellidoMaternoRef.value;

  // generamos el nombre de usuario con la funcion 'generarNombreUsuario'
  const nombreUsuarioGenerado = generarNombreUsuario(
    nombre,
    apellidoPaterno,
    apellidoMaterno
  );

  // asignamos el nuevo valor generado
  nombreUsuarioRef.value = nombreUsuarioGenerado;
});

apellidoPaternoRef.addEventListener("change", (event) => {
  // opcion-2: desde el origen del evento, que envia la callback 'event', nativo de javascript.
  const apellidoPaterno = event.target.value;

  const nombre = nombreRef.value;
  const apellidoMaterno = apellidoMaternoRef.value;

  // generamos el nombre de usuario con la funcion 'generarNombreUsuario'
  const nombreUsuarioGenerado = generarNombreUsuario(
    nombre,
    apellidoPaterno,
    apellidoMaterno
  );

  // asignamos el nuevo valor generado
  nombreUsuarioRef.value = nombreUsuarioGenerado;
});

apellidoMaternoRef.addEventListener("change", (event) => {
  const apellidoMaterno = event.target.value;
  const nombre = nombreRef.value;
  const apellidoPaterno = apellidoPaternoRef.value;

  // generamos el nombre de usuario con la funcion 'generarNombreUsuario'
  const nombreUsuarioGenerado = generarNombreUsuario(
    nombre,
    apellidoPaterno,
    apellidoMaterno
  );

  // asignamos el nuevo valor generado
  nombreUsuarioRef.value = nombreUsuarioGenerado;
});
