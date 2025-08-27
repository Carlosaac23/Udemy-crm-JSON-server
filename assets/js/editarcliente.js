import { getClient, updateClient } from './API.js';
import { showAlert, validate } from './funciones.js';

(function () {
  document.addEventListener('DOMContentLoaded', async () => {
    const urlParameters = new URLSearchParams(window.location.search);
    const clientID = urlParameters.get('id');
    const client = await getClient(clientID);
    showClient(client);

    const form = document.getElementById('formulario');
    form.addEventListener('submit', validateClient);
  });

  const nameInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('telefono');
  const companyInput = document.getElementById('empresa');
  const idInput = document.getElementById('id');

  function showClient({ id, name, email, phone, company }) {
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
    idInput.value = id;
  }

  function validateClient(e) {
    e.preventDefault();

    const client = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: idInput.value,
    };

    if (validate(client)) {
      return showAlert('Todos los campos son obligatorios');
    }

    updateClient(client);
  }
})();
