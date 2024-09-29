// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el botón de hamburguesa y el menú de navegación
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav');
    
    // Agregamos un evento de clic al botón hamburguesa
    hamburgerButton.addEventListener('click', () => {
        // Alternamos la clase "show" en el menú de navegación para mostrarlo u ocultarlo
        navMenu.classList.toggle('show');

        // Cambiamos el símbolo del botón entre hamburguesa (☰) y "X" (✖)
        if (hamburgerButton.textContent === '☰') {
            hamburgerButton.textContent = '✖'; // Cambiar a "X" cuando el menú esté abierto
        } else {
            hamburgerButton.textContent = '☰'; // Volver a "☰" cuando el menú esté cerrado
        }
    });

    // Actualizamos el año actual en el pie de página
    const currentYear = document.getElementById('currentyear');
    currentYear.textContent = new Date().getFullYear();

    // Actualizamos la fecha de la última modificación de la página en el pie de página
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
