/**
 * Proceso:
 * 1. Obtener la informacion del formulario
 * 2. Buscar en la lista de las personas registradas por el ID
 * 3. Actualizar el elemento en la lista con la informacion obtenida del formulario.
 * 4. Mostrar la lista actualizada en el HTML
 */
function actualizarController() {
  console.log("actualizar controller invoked");
  const idRef = document.getElementById("txtId");
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  const id = parseInt(idRef.value);
  const personaAActualizar = listaPersonaRegistradas.find(
    (persona) => persona.id === id
  );
  personaAActualizar.nombre = nombreRef.value;
  personaAActualizar.apellidos = apellidosRef.value;
  personaAActualizar.edad = parseInt(edadRef.value);

  // Actualizamos la lista
  // 1. Eliminar el elemento con la informacion antes de actualizar
  // 2. Agregamos el elemento con la informacion actualizada
  listaPersonaRegistradas = listaPersonaRegistradas.filter(
    (persona) => persona.id !== personaAActualizar.id
  );
  listaPersonaRegistradas.push(personaAActualizar);

  // mostramos la lista actualziada en el html
  const personasRegistradasUlRef = document.getElementById(
    "personasRegistradasUL"
  );
  personasRegistradasUlRef.innerHTML = getListaPersonasAsLiHtml(
    listaPersonaRegistradas
  );

  // limpiamos el  form
  idRef.value = "";
  nombreRef.value = "";
  apellidosRef.value = "";
  edadRef.value = "";
}
