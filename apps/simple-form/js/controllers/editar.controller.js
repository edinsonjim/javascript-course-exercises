/**
 * Proceso:
 * 1. Buscar la persona por id
 * 2. Rellenar el formulario con la informacion de la persona encontrada
 * 3. Mostrar el boton para editar
 * 4. Al presionar el boton 'editar', actualiza la informacion de esa persona
 * 5. Agrega a la lista la informacion actualizada
 * 6. Muestra todos los elementos de la lista.
 * 7. Refrescamos el html
 *
 * @param {number} personaId
 */
function editarController(personaId) {
  console.log("personaId", personaId);
  // In [1]
  const personaEncontrada = listaPersonaRegistradas.find(
    (persona) => persona.id === personaId
  );
  console.log("personaEncontrada", personaEncontrada);

  // In [2]
  const idRef = document.getElementById("txtId");
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  // Asignamos los valores de la persona como valor al input.
  idRef.value = personaEncontrada.id;
  nombreRef.value = personaEncontrada.nombre;
  apellidosRef.value = personaEncontrada.apellidos;
  edadRef.value = personaEncontrada.edad;

  // In [3]
}
