import { showAlert, validate } from './funciones.js';
import { newClient } from './API.js';

(function () {
  const form = document.getElementById('formulario');
  form.addEventListener('submit', validateClient);

  function validateClient(e) {
    e.preventDefault();

    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefono').value;
    const company = document.getElementById('empresa').value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    if (validate(client)) {
      return showAlert('Todos los campos son obligatorios');
    }

    newClient(client);
  }
})();
