const botones = document.querySelectorAll('.card-arrow');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const idPanel = boton.getAttribute('aria-controls');
    const estabaAbierto = boton.getAttribute('aria-expanded') === 'true';

    // cerrar todos
    botones.forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).classList.remove('abierto');
    });

    // abrir el elegido (si no estaba abierto)
    if (!estabaAbierto) {
      boton.setAttribute('aria-expanded', 'true');
      document.getElementById(idPanel).classList.add('abierto');
    }
  });
});
