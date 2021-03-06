function renderErrorHtml(mensaje) {
  const frmRegistrarErrorsRef = document.getElementById("frmRegistrarErrors");
  frmRegistrarErrorsRef.innerHTML = mensaje;
}

/**
 * @param persona Persona persona debe ser una instancia de la clase Persona
 */
function getLiHtml(persona) {
  return `<li class="spacer-v">
    ${persona.fullInfo}
    <button 
      persona-id="${persona.id}" 
      class="btn-danger btn-eliminar-${persona.id}"
      onclick="eliminarPersona(${persona.id})"
      >Eliminar</button>
    <button
      onclick="editarPersona(${persona.id})"
      >Editar</button>
  </li>`;
}

/**
 * Retorna por cada persona un <li>...
 *
 */
function getListaPersonasAsLiHtml(personas) {
  let contentLiHtml = "";

  personas.forEach((persona) => {
    contentLiHtml += getLiHtml(persona);
  });

  return contentLiHtml;
}
