document.addEventListener('DOMContentLoaded', function() {
    // Leer los datos del pedido de sessionStorage
    const pedidos = JSON.parse(sessionStorage.getItem('pedidos')) || [];

    if (pedidos.length > 0) {
        // Elementos del DOM
        const pedidoImagen = document.getElementById('pedido-imagen');
        const pedidoDetalle = document.getElementById('pedido-detalle');
        const platilloInput = document.getElementById('platillo');
        const tipoInput = document.getElementById('tipo');
        const tamanoSelect = document.getElementById('tamano');
        const cantidadInput = document.getElementById('cantidad');
        const actualizarCantidadBtn = document.getElementById('actualizar-cantidad');

        pedidos.forEach((pedido, index) => {
            // Añadir el pedido al detalle del pedido
            const newItem = document.createElement('li');
            newItem.textContent = `${pedido.name} (${pedido.cantidad || 1} unid.) - S/.${(pedido.price * (pedido.cantidad || 1)).toFixed(2)}`;
            pedidoDetalle.appendChild(newItem);

            // Actualizar la imagen del primer pedido
            if (index === 0) {
                pedidoImagen.src = pedido.image;
                pedidoImagen.alt = pedido.name;

                // Actualizar los campos de selección con el primer pedido
                platilloInput.value = pedido.name;
                tipoInput.value = pedido.tipo;
                tamanoSelect.value = 'personal'; // Puedes ajustar esto según sea necesario
                cantidadInput.value = pedido.cantidad || '1'; // Valor por defecto
            }
        });

        actualizarCantidadBtn.addEventListener('click', function() {
            const cantidad = parseInt(cantidadInput.value);
            const tamano = tamanoSelect.value;

            if (cantidad > 0) {
                // Actualizar el pedido actual con la cantidad y tamaño seleccionados
                const updatedPedido = { ...pedidos[pedidos.length - 1], cantidad: cantidad, tamano: tamano };

                // Actualizar los pedidos en sessionStorage
                pedidos[pedidos.length - 1] = updatedPedido;
                sessionStorage.setItem('pedidos', JSON.stringify(pedidos));

                // Limpiar la lista de pedidos previos antes de añadir nuevos items
                pedidoDetalle.innerHTML = '';

                // Volver a agregar todos los pedidos en el detalle del pedido
                pedidos.forEach(p => {
                    const item = document.createElement('li');
                    item.textContent = `${p.name} (${p.cantidad} unid., tamaño: ${p.tamano}) - S/.${(p.price * p.cantidad).toFixed(2)}`;
                    pedidoDetalle.appendChild(item);
                });

                // Actualizar el total del pedido
                actualizarTotal();
            }
        });

        function actualizarTotal() {
            const items = pedidoDetalle.querySelectorAll('li');
            let total = 0;

            items.forEach(item => {
                const price = parseFloat(item.textContent.split('S/.')[1]);
                total += price;
            });

            const totalElement = document.querySelector('.col2 h3');
            totalElement.textContent = `Total: S/. ${total.toFixed(2)}`;
        }
    }

    // Borrar datos del pedido de sessionStorage al salir o recargar la página
    window.addEventListener('beforeunload', function() {
        sessionStorage.removeItem('pedidos');
    });
});
