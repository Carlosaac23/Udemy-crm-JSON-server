import { getClient } from './API.js';

(function () {
  document.addEventListener('DOMContentLoaded', async () => {
    const urlParameters = new URLSearchParams(window.location.search);
    const clientID = urlParameters.get('id');
    const client = await getClient(clientID);
    showClient(client);
  });

  const nameInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('telefono');
  const companyInput = document.getElementById('empresa');
  const idInput = document.getElementById('id');

  function showClient(client) {
    const form = document.getElementById('formulario');
    const { id, name, email, phone, company } = client;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
    idInput.value = id;
  }
})();
