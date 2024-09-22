const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");

const formattedDate = oLastModif.toLocaleString('es-ES', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false 
}).replace(',', ''); 

lastModified.textContent = `Last modified: ${formattedDate}`; 
