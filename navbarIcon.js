// Obtener los elementos del párrafo y el título
var parrafo = document.getElementById("descripcion");
var tituloPrincipal = document.getElementById("tituloPrincipal");

// Obtener los elementos de los íconos
var nombre = document.getElementById("nombre");
var mail = document.getElementById("mail");
var fecha = document.getElementById("fecha");
var ubicacion = document.getElementById("ubicacion");
var telefo = document.getElementById("telefo");

// Agregar un evento de mouseover a cada icono
nombre.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi nombre es:";
    tituloPrincipal.textContent = "Facundo Cozzani";
});

mail.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi correo electrónico es:";
    tituloPrincipal.textContent = "cozzanifacundo@gmail.com";
});

fecha.addEventListener("mouseover", function() {
    parrafo.textContent = "Fecha de nacimiento:";
    tituloPrincipal.textContent = "14 de enero de 1997";
});

ubicacion.addEventListener("mouseover", function() {
    parrafo.textContent = "Vivo en:";
    tituloPrincipal.textContent = "Buenos Aires, Argentina";
});

telefo.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi número de teléfono es:";
    tituloPrincipal.textContent = "+54 11 7368-7952";
});