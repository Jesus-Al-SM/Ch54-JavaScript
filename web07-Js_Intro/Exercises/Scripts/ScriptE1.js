function cambiarNombre(){
   let nombre = prompt("Escribe tu nombre");
   document.getElementById("nombreCambio").textContent = `Hola ${nombre}`;
}