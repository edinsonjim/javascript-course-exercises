/** @var actividades Almacena la lista de actividades ingresadas por el usuario */
const actividades = [];

const btnAgregarTarea = document.getElementById("btnAgregarTarea");

btnAgregarTarea.addEventListener("click", () => {
  // TODO: 
  // 1. leer el texto ingresado por el usuario
  // 2. Validar si el texto ingresado cumple reglas
  // 3. agregar a la lista de TODO's
  
  // accedemos al form.input del DOM(Document Object Model)
  const nombreTareaHtmlInstancia = document.getElementById("txtNombreTarea");

  // leemos el valor ingresado en el input html
  const tituloTarea = nombreTareaHtmlInstancia.value;

  // isTituloValido es un metodo statico por lo cual accedemos sin instanciar la clase
  // con structura '<NombreClase>.<nombreMetodo>'
  const validatorTitulo = TareaHelper.isTituloValido(tituloTarea);
  if (!validatorTitulo.isValid) {

    // accedemos al div con id nombreTareaError
    const divNombreTareaError = document.getElementById("nombreTareaError");

    // Agregamos el texto del mensaje en el contenedor(div) con id 'nombreTareaError'
    divNombreTareaError.innerHTML = validatorTitulo.message;
  } else {
    // accedemos al div con id nombreTareaError
    const divNombreTareaError = document.getElementById("nombreTareaError");
    
    // Limpiamos el texto del error ingresando un texto en blanco en el contenedor(div) con id 'nombreTareaError'
    divNombreTareaError.innerHTML = '';

    // Agregamos la actividad del usuario a la lista
    const actividad = new Actividad(tituloTarea);
    actividades.push(actividad);
    console.log('actividades', actividades);

    // Agregar el elemento al contenedor en el HTML
    const contenedorActividades = document.getElementById("actividadesContainer");
    console.log('contenedorActividades', contenedorActividades);

    const actividadItemHtml = makeActividadItemHtml(actividad);
    console.log('actividadItemHtml', actividadItemHtml);
  }
});

/** @params actividad Debe ser una instancia de la clase Actividad 
 * @returns retorna un HTML como string
*/
function makeActividadItemHtml(actividad) {
  return `<div>actividad.titulo</div>`;




  // return `<div class="actividad-item">
  //   <div class="actividad-point actividad-checked"></div>
  //   <div class="actividad-label">${actividad.nombre}</div>
  // </div>`;
}

