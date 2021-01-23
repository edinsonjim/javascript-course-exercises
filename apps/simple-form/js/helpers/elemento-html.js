function renderErrorHtml(mensaje) {
  const frmRegistrarErrorsRef = document.getElementById('frmRegistrarErrors');
  frmRegistrarErrorsRef.innerHTML = mensaje;
}

function getLiHtml(contenido) {
  return `<li>${contenido}</li>`
}
