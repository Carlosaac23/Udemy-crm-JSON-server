const URL = 'http://localhost:4000/clientes';

// Add client
export async function newClient(client) {
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
  }
}

// Get clients
export async function getClients() {
  try {
    const res = await fetch(URL);
    const clients = await res.json();
    return clients;
  } catch (error) {
    console.error(error);
  }
}

// Delete client
export async function deleteClient(id) {
  try {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
}

// Get client by ID
export async function getClient(id) {
  try {
    const res = await fetch(`${URL}/${id}`);
    const client = await res.json();
    return client;
  } catch (error) {
    console.error(error);
  }
}
