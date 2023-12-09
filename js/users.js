const apiURL = 'https://reqres.in/api/users?page=1';

const XML = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);
        const data = response.data;

        const HTMLResponse = document.querySelector('.usuario');

        const template = data.map((user) => 
        `<div class="usuario__imagen">
            <a href="#" onclick="mostrarDetalles(${user.id})">
                <img class="img-avatar" src="${user.avatar}" alt ="Avatar usuario">
            </a>
        </div>
        <div class="usuario__descripcion">
            <p><span class="bold-text">Nombre:</span> ${user.first_name}</p>
            <p><span class="bold-text">Apellido:</span> ${user.last_name}</p>
            <p><span class="bold-text">Correo:</span> ${user.email}</p>
        </div>
        `);
        HTMLResponse.innerHTML = `${template.join('')}`; 
    }
}

XML.addEventListener('load', onRequestHandler);
XML.open('GET', apiURL);
XML.send();
