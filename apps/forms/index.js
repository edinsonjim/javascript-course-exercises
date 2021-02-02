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
const fechaNacimientoRef = document.getElementById("txtFechaNacimiento");
const edadRef = document.getElementById("txtEdad");

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

fechaNacimientoRef.addEventListener("change", (event) => {
  // calculamos la edad con el valor ingresado por el usuario
  const edadCalculada = calcEdadDeFechaNacimiento(event.target.value);

  // asignamos el valor al input
  edadRef.value = edadCalculada;
});

function onChangeFechaNacimiento(event) {
  console.log("onChange de la fecha nacimiento", event.target.value);
  const edadCalculada = calcEdadDeFechaNacimiento(event.target.value);
  if (edadCalculada >= 18) {
    // TODO: cambiar el borde della input edad a verde
    event.target.style.borderColor = "#19ba07";
    event.target.style.color = "#19ba07";
    event.target.classList.add("mayor-edad");
  } else {
    // TODO: cambiar el borde de la input edad a rojo
    event.target.style.borderColor = "#eb4034";
    event.target.style.color = "#eb4034";
    event.target.classList.remove("mayor-edad");
  }
}

function onClicFechaNacimineto(event) {
  console.log("event", event);
}

function onChangeCondicionesServicio(event) {
  const estaSeleccionadoCondicionesServicio = event.target.checked;

  const btnGuardarRef = document.getElementById("btnGuardar");

  if (estaSeleccionadoCondicionesServicio) {
    // TODO: activar el boton de guardar
    btnGuardarRef.disabled = false;
  } else {
    // TODO: desactivar el boton de guardar
    btnGuardarRef.disabled = true;
  }
}

// querySelectorAll permite obtener todos los elementos que cumplan una condicion
const estadoCivilRadiosRef = document.querySelectorAll(
  'input[name="estadoCivil"]'
);
estadoCivilRadiosRef;
console.log("estadoCivilRadiosRef", estadoCivilRadiosRef);
