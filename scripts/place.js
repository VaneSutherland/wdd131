// scripts/place.js

// Calcular el factor de sensación térmica
function calculateWindChill(temp, windSpeed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
}

// Valores estáticos
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Validar las condiciones
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = `${windChill}°C`;
} else {
    document.getElementById("windChill").textContent = "N/A";
}

// Mostrar el año actual
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Mostrar la fecha de la última modificación
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
