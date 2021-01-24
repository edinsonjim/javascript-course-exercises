function agregarController() {
  // Operaciones en el evento 'click' del boton.

  // Leemos la informacion ingresado en los inputs.
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  // Obtenemos el valor ingresado en la caja de texto(input).
  const nombre = nombreRef.value;
  const apellidos = apellidosRef.value;
  const edad = edadRef.value;

  try {
    const personaRegistrada = new Persona(nombre, apellidos, edad);

    // agregamos el objeto persona a la lista.
    listaPersonaRegistradas.push(personaRegistrada);

    const personasRegistradasUlRef = document.getElementById(
      "personasRegistradasUL"
    );

    // generamos el <li> de la lista 'listaPersonaRegistradas'
    const liPersonasHtml = getListaPersonasAsLiHtml(listaPersonaRegistradas);

    // agregar el <li> generado al contenedor 'personasRegistradasUL' en el HTML
    personasRegistradasUlRef.innerHTML = liPersonasHtml;

    // limpiamos los inputs
    nombreRef.value = "";
    apellidosRef.value = "";
    edadRef.value = "";

    // Limpiamos el contenedor de errores
    renderErrorHtml("");

    console.log("listaPersonaRegistradas", listaPersonaRegistradas);
  } catch (error) {
    // Mostramos el mensaje del error en el html
    renderErrorHtml(error.message);
  }
}
