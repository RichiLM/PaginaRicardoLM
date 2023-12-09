const apiURL = 'https://reqres.in/api/users?page=1';

const XML = new XMLHttpRequest();

function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

const userId = obtenerParametro('userId');

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);
        const data = response.data; 

        const HTMLResponse = document.querySelector('.usuario');

        const usuarioEspecifico = data.find(user => user.id.toString() === userId);

        if (usuarioEspecifico) {
            const template = `
                <div class="usuario__imagen">
                    <img class="img-avatar" src="${usuarioEspecifico.avatar}" alt ="Avatar usuario">
                </div>
                <div class="usuario__descripcion">
                    <p><span class="bold-text">Numero usuario:</span> ${usuarioEspecifico.id}</p>
                    <p><span class="bold-text">Nombre:</span> ${usuarioEspecifico.first_name}</p>
                    <p><span class="bold-text">Apellido:</span> ${usuarioEspecifico.last_name}</p>
                    <p><span class="bold-text">Correo:</span> ${usuarioEspecifico.email}</p>
                </div>
            `;
            HTMLResponse.innerHTML = template;
        } else {
            HTMLResponse.innerHTML = 'Usuario no encontrado';
        }
    }
}

XML.addEventListener('load', onRequestHandler);
XML.open('GET', apiURL);
XML.send();
