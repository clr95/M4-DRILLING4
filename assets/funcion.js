function suscripcion() {
  var checkbox = document.getElementById('flexCheckDefault');
  var mail = document.getElementById('mail');

  if (!checkbox.checked || mail.value === '') {
    alert('Parece que nos faltó algo...');
    return;
  } else{alert('¡Felicitaciones! Pronto escucharás de nosotros.')}
}

var suscrito = document.getElementById('obtener');
suscrito.addEventListener('click', suscripcion);
