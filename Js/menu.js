
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-button');

    // Recorrer todos los botones y agregarles un evento de clic
    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'pedido.html';
        });
    });
});
