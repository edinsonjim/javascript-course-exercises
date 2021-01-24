function eliminarController(personaId) {
  // TODO:
  // 1. Buscar la persona en la lista
  // 2. Eliminar el elemento de la lista.
  // 3. Refrescar el html

  // excluye el elemento con ID enviado desde el HTML
  listaPersonaRegistradas = listaPersonaRegistradas.filter(
    (persona) => persona.id !== personaId
  );

  // refrescar el contenedor 'personasRegistradasUL' en el HTML
  const personaRegistrasUlRef = document.getElementById(
    "personasRegistradasUL"
  );

  personaRegistrasUlRef.innerHTML = getListaPersonasAsLiHtml(
    listaPersonaRegistradas
  );
}
