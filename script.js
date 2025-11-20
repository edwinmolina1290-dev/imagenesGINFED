// Cargar el archivo JSON y llenar los datos en la página
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const datos = data.datosBasicos;
        const datosSection = document.querySelector("#datos ul");

        datosSection.innerHTML = `
            <li><strong>Año y mes de creación:</strong> ${datos.creacion}</li>
            <li><strong>Departamento - Ciudad:</strong> ${datos.departamento} - ${datos.ciudad}</li>
            <li><strong>Líder:</strong> ${datos.lider}</li>
            <li><strong>Clasificación:</strong> <b>${datos.clasificacion}</b></li>
            <li><strong>Área de conocimiento:</strong> ${datos.areaConocimiento}</li>
            <li><strong>Programa Nacional:</strong> ${datos.programaNacional}</li>
            <li><strong>Página web:</strong> <a href="${datos.web}" target="_blank">${datos.web}</a></li>
            <li><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></li>
            <li><strong>Instagram:</strong> <a href="${datos.instagram}" target="_blank">Instagram</a></li>
        `;


        const plan = data.planEstrategico;
        document.querySelector("#plan").innerHTML = `
            <h2>Plan Estratégico</h2>
            <p><strong>Misión:</strong> ${plan.mision}</p>
            <p><strong>Visión:</strong> ${plan.vision}</p>
            <p><strong>Objetivos:</strong></p>
            <ul>
                ${plan.objetivos.map(obj => `<li>${obj}</li>`).join("")}
            </ul>
        `;

        const lineas = data.lineasInvestigacion;
        const cardsContainer = document.querySelector("#lineas .cards");

        cardsContainer.innerHTML = lineas.map(l => `
            <div class="card">
                <h3>${l.titulo}</h3>
                <p>${l.descripcion}</p>
            </div>
        `).join("");

        const integrantes = data.integrantes;
        const tabla = document.querySelector("#integrantes tbody");

        tabla.innerHTML = integrantes.map(integ => `
            <tr>
                <td><a href="${integ.cvlac}" target="_blank">${integ.nombre}</a></td>
                <td>${integ.vinculacion}</td>
                <td>${integ.horas}</td>
                <td>${integ.inicio} - ${integ.fin}</td>
            </tr>
        `).join("");

        const footer = data.footer;

        document.querySelector("footer").innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin-bottom: 1rem; flex-wrap: wrap;">
                ${footer.logos.map(l => `
                    <img src="${l.url}" alt="${l.alt}" style="height: 80px; object-fit: contain;">
                `).join("")}
            </div>
            <p>${footer.texto}</p>
        `;
    })
    .catch(error => console.error("Error cargando JSON:", error));
