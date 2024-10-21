// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Dynamically populate the product select element
const productSelect = document.getElementById('product');
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

const currentYear = document.querySelector("#currentyear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    const formattedDate = oLastModif.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', '');
    lastModified.textContent = `Last modified: ${formattedDate}`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Cargar el contador de reseñas desde localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0; // Convierte a número
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Mostrar el contador en la página
    const reviewCountElement = document.getElementById('review-count'); // Asegúrate de que este ID coincida
    if (reviewCountElement) {
        reviewCountElement.textContent = `You have submitted ${reviewCount} reviews.`;
    }
});
