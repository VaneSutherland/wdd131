document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-header'); // Selección correcta del menú de navegación

    // Evento de clic para el botón de hamburguesa
    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburgerButton.textContent = hamburgerButton.textContent === '☰' ? '✖' : '☰';
    });

    // Muestra las ideas previamente enviadas al cargar la página
    displaySubmittedIdeas();
});

const submittedIdeas = JSON.parse(localStorage.getItem("submittedIdeas")) || [];

document.getElementById("idea-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("idea-title").value;
    const description = document.getElementById("idea-description").value;

    if (title && description) {
        const newIdea = { title, description };
        submittedIdeas.push(newIdea);
        localStorage.setItem("submittedIdeas", JSON.stringify(submittedIdeas));
        displaySubmittedIdeas();
        document.getElementById("idea-form").reset();
    } else {
        alert("Please fill out both fields.");
    }
});

function displaySubmittedIdeas() {
    const ideaContainer = document.getElementById("submitted-ideas");
    ideaContainer.innerHTML = submittedIdeas.map(idea => `
        <div class="submitted-idea">
            <h3>${idea.title}</h3>
            <p>${idea.description}</p>
        </div>
    `).join('');
}



