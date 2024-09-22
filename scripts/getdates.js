// Obtener el año actual y asignarlo a un elemento con id "currentyear"
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear(); // Insertar el año actual

// Obtener la fecha de última modificación del documento
let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");

// Formatear la fecha y hora (ejemplo: 2024-09-21 14:30)
const formattedDate = oLastModif.toLocaleString('es-ES', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false 
}).replace(',', ''); // Elimina la coma que aparece en algunos formatos

lastModified.textContent = `Last modified: ${formattedDate}`; // Insertar la última fecha de modificación
