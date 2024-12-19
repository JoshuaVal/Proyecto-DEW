document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtener los datos del pedido
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');
            const tipo = this.parentElement.parentElement.querySelector('.personal').textContent;

            // Leer los pedidos existentes de sessionStorage
            const pedidos = JSON.parse(sessionStorage.getItem('pedidos')) || [];

            // Agregar el nuevo pedido al array de pedidos
            pedidos.push({ name, price, image, tipo });

            // Guardar los datos en sessionStorage
            sessionStorage.setItem('pedidos', JSON.stringify(pedidos));

            // Redirigir a la página de pedido
            window.location.href = 'pedido.html';
        });
    });
});
