// Menú desplegable en pantallas angostas
const boton = document.querySelector('.nav__boton');
const lista = document.querySelector('.nav__lista');
if (boton && lista) {
  boton.addEventListener('click', () => {
    const abierta = lista.classList.toggle('abierta');
    boton.setAttribute('aria-expanded', String(abierta));
  });
}
