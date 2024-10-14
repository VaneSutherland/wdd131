// Obtiene el año actual y la fecha de la última modificación
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

// Selector para el botón del menú hamburguesa y la navegación
const hamButton = document.querySelector("#hamburger-menu");  // Cambiado de #menu a #hamburger-menu
const navigation = document.querySelector(".navigation");

// Evento para alternar el menú de navegación en pantallas pequeñas
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Lista de templos
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17253,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44400,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg"
    },
    {
      templeName: "Concepcion Chile",
      location: "Concepcion, Chile",
      dedicated: "2015, Oct, 17",
      area: 23095,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
  },
  {
      templeName: "Bern Switzerland",
      location: "Bern, Switzerland",
      dedicated: "1955, Sept, 15",
      area: 35546,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784295-wallpaper.jpg"
  },
];

// Funciones de filtrado
function filterOldTemples() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNewTemples() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

// Mostrar todos los templos al inicio
displayTemples(temples);

// Event listeners para cada categoría de filtro
document.getElementById('old-temples').addEventListener('click', () => {
    displayTemples(filterOldTemples());
});

document.getElementById('new-temples').addEventListener('click', () => {
    displayTemples(filterNewTemples());
});

document.getElementById('large-temples').addEventListener('click', () => {
    displayTemples(filterLargeTemples());
});

document.getElementById('small-temples').addEventListener('click', () => {
    displayTemples(filterSmallTemples());
});

document.getElementById('home').addEventListener('click', () => {
    displayTemples(temples);
});

// Función para mostrar templos en el contenedor
function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = '';  // Limpiar contenedor

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeContainer.appendChild(card);
    });
}

