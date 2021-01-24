var listaPersonaRegistradas = [];

// Referencia al boton "btnAgregar" en el HTML
const btnAgregarRef = document.getElementById("btnAgregar");
const btnAnularRef = document.getElementById("btnAnular");
const btnActualizarRef = document.getElementById("btnActualizar");

btnAgregarRef.addEventListener("click", agregarController);
btnAnularRef.addEventListener("click", anularController);
btnActualizarRef.addEventListener("click", actualizarController);

/**
 * eliminarPersona puede ser invocado desde el html
 * del evento onclick
 */
function eliminarPersona(personaId) {
  if (!personaId) {
    throw new Error("Persona Id deberia existir");
  }

  if (isNaN(parseInt(personaId))) {
    throw new Error("Persona Id deberia ser un valor numerico");
  }

  eliminarController(parseInt(personaId));
}

/**
 * editarPersona puede ser invocado desde el html
 * en el evento onclick
 * @param {number} personaId
 */
function editarPersona(personaId) {
  editarController(personaId);
}
