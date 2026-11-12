document.querySelectorAll('.card-arrow').forEach(boton => {
  boton.addEventListener('click', () => {
    const panel = document.getElementById(boton.getAttribute('aria-controls'));
    const abierto = boton.getAttribute('aria-expanded') === 'true';
    boton.setAttribute('aria-expanded', String(!abierto));
    panel.classList.toggle('abierto', !abierto);
  });
});
