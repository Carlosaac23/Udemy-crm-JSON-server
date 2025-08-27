export function showAlert(message) {
  const alert = document.querySelector('.bg-red-100');

  if (!alert) {
    const alert = document.createElement('p');
    alert.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded-md', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    alert.textContent = message;

    const form = document.getElementById('formulario');
    form.appendChild(alert);

    setTimeout(() => alert.remove(), 3000);
  }
}
