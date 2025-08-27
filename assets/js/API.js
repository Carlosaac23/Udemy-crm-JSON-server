const URL = 'http://localhost:4000/clientes';

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

export async function getClients() {
  try {
    const res = await fetch(URL);
    const clients = await res.json();
    return clients;
  } catch (error) {
    console.error(error);
  }
}
