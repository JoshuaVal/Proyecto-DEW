
function cambiarTextoPorImagen() {
    const socialLinks = document.querySelectorAll(".iconos");
    socialLinks.forEach((link) => {
        link.innerHTML = "";
        const img = document.createElement("img");
        img.alt = "imagen no disponible";
        img.src = `../img/${link.title}.png`;
        img.style.width = "30px";
        img.style.height = "30px";
        link.appendChild(img);
    });

}

function menuImagenes() {
    const menus = [
        { name: "BURGER", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "/img/buurgessaa.png", link: "menu.html" },
        { name: "PIZZA", subname: "desde", precio: "S/.30.90", botonName: "Pedido", imagen: "/img/piiiiza.png", link: "pizzas.html" },
        { name: "OTROS", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "/img/shaaawa.png", link: "otros.html" },
        { name: "SALADS", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "/img/compleemento.png", link: "complementos.html" },
        { name: "BEBIDAS", subname: "desde", precio: "S/.5.99", botonName: "Pedido", imagen: "/img/bebiiiida.png",link: "bebidas.html" },
    ];

    const menuContainer = document.getElementById('menu-container');

    menus.forEach(menu => {
        // Crear la tarjeta de menú
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        // Crear la imagen
        const img = document.createElement('img');
        img.src = menu.imagen;
        img.alt = menu.name;

        // Crear el overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Crear el título
        const title = document.createElement('h4');
        title.textContent = menu.name;

        // Crear el contenedor del precio con "desde"
        const priceWrapper = document.createElement('div');
        priceWrapper.classList.add('price-wrapper');

        const subname = document.createElement('span');
        subname.classList.add('subname');
        subname.textContent = menu.subname; // "desde"

        const precio = document.createElement('span');
        precio.classList.add('precio');
        precio.textContent = menu.precio; // "S/.10.90"

        priceWrapper.appendChild(subname);
        priceWrapper.appendChild(precio);

        // Crear el botón
        const button = document.createElement('button');
        button.classList.add('order-btn');
        button.textContent = menu.botonName;

        button.addEventListener('click', () => { window.location.href = menu.link; });
        
        // Agregar elementos al overlay
        overlay.appendChild(title);
        overlay.appendChild(priceWrapper); // Contenedor del precio
        overlay.appendChild(button);

        // Agregar elementos a la tarjeta
        menuCard.appendChild(img);
        menuCard.appendChild(overlay);

        // Agregar la tarjeta al contenedor
        menuContainer.appendChild(menuCard);
    });
}

function mostrarRecomendaciones() {
    const recomendaciones = [
        { titulo: "5.9", subtitulo: "Ensalada Cesar", descripcion: "Fresca ensalada romana.", precio: "S/.18.50", imagen: "./img/Ensalada.png", overlayText:"Una jugosa hamburguesa acompañada de queso derretido, todo en un suave pan.¡Una explosión de sabor en cada bocado!" },
        { titulo: "7.5", subtitulo: "Burger Magic", descripcion: "Una hamburguesa jugosa con carne.", precio: "S/.10.90", imagen: "./img/Burgmagic.png", overlayText:"Frescura en cada bocado con lechuga romana, crutones dorados y aderezo César cremoso." },
        { titulo: "5.7", subtitulo: "Patatas Fritas", descripcion: "Papas cortadas en tiras y fritas.", precio: "S/.8.90", imagen: "./img/Patatas.png", overlayText:"¡Cruzadas y doradas! Perfectas para picar o acompañar cualquier plato." },
        { titulo: "4.8", subtitulo: "Shawarma", descripcion: "Finas láminas de carne marinada.", precio: "S/.15.50", imagen: "./img/Shawarma.png", overlayText:"Carne marinada y asada, envuelta en pan pita con vegetales y salsa de yogur. ¡Irresistible!" },
        { titulo: "7.8", subtitulo: "Pepperoni", descripcion: "Una pizza clásica pepperoniana.", precio: "S/.29.90", imagen: "./img/Pepperoni.png", overlayText:" Clásica y deliciosa, cubierta con salsa de tomate, mozzarella y rodajas de pepperoni picante." },
        { titulo: "7.6", subtitulo: "Broaster Burguer", descripcion: "Un pollo crocante original.", precio: "S/.20.00", imagen: "./img_menu/burguer4.png", overlayText:"Pollo crujiente broaster en un pan suave con lechuga, tomate y salsa especial. ¡Sabor único!"},
    ];

    const containerRecomendacion = document.getElementById('container-recomendacion');

    recomendaciones.forEach(rec => {
        // Crear elementos
        const card = document.createElement('div');
        card.classList.add('card');

        const imagenes = document.createElement('div');
        imagenes.classList.add('imagenes');

        const img = document.createElement('img');
        img.src = rec.imagen;
        img.alt = `Imagen de ${rec.titulo}`;

        const overlay = document.createElement('div'); 
        overlay.classList.add('overlay'); 
        
        const overlayText = document.createElement('div'); 
        overlayText.classList.add('overlay-text'); 
        overlayText.textContent = rec.overlayText;
        
        overlay.appendChild(overlayText); 
        card.appendChild(overlay);
        card.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const titulo = document.createElement('h4');
        titulo.textContent = rec.titulo;

        const subtitulo = document.createElement('span');
        subtitulo.textContent = rec.subtitulo;

        const descripcion = document.createElement('p');
        descripcion.textContent = rec.descripcion;

        const precio = document.createElement('p');
        precio.textContent = rec.precio;
        precio.classList.add('price'); // Asegúrate de añadir esta clase

        // Ajusta el color del precio

        // Agregar elementos al contenido de la tarjeta
        cardContent.appendChild(titulo);
        cardContent.appendChild(subtitulo);
        cardContent.appendChild(descripcion);
        cardContent.appendChild(precio);

        // Agregar imagen y contenido a la tarjeta
        imagenes.appendChild(img);
        card.appendChild(imagenes);
        card.appendChild(cardContent);

        // Agregar la tarjeta al contenedor
        containerRecomendacion.appendChild(card);
    });
}


function generarFooter() {
    const footer = document.getElementById('footer');

    const empresa = document.createElement('div');
    empresa.classList.add('empresa');
    empresa.innerHTML = `
        <h2>TASTY</h2>
        <div class="correo">
            <img src="./img/email 1.png" alt="">
            <span>tasty.fastfood@gmail.com</span>
        </div>
        <div class="web">
            <img src="./img/global 1.png" alt="">
            <span>www.tasty.com</span>
        </div>
    `;

    const platos = document.createElement('div');
    platos.classList.add('platos');
    platos.innerHTML = `
        <h4>Nuestro menú</h4>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
    `;

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
        <h4>Información</h4>
        <span>About us</span>
        <span>Testimonial</span>
        <span>Event</span>
    `;

    const paginas = document.createElement('div');
    paginas.classList.add('paginas');
    paginas.innerHTML = `
        <h4>Links</h4>
        <span>Servicios</span>
        <span>Support</span>
        <span>Conditions</span>
    `;

    const socialLinks = document.createElement('ul');
    socialLinks.classList.add('social-links2');
    socialLinks.innerHTML = `
        <li><a href="#" class="iconos2" target="_blank" title="Facebook">FB</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="Instagram">IG</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="Twitter">X</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="LinkedIn">Ld</a></li>
    `;

    // Añadir todos los elementos al footer
    footer.appendChild(empresa);
    footer.appendChild(platos);
    footer.appendChild(info);
    footer.appendChild(paginas);
    footer.appendChild(socialLinks);
}

function cambiarTextoPorImg() {
    const socialLinks = document.querySelectorAll(".iconos2");
    socialLinks.forEach((link) => {
        link.innerHTML = "";
        const img = document.createElement("img");
        img.alt = "imagen no disponible";
        img.src = `../img/${link.title}.png`;
        img.style.width = "25px";
        img.style.height = "22px";
        link.appendChild(img);
    });

}

function textoAutomatico() {
    const burgerInfos = document.querySelectorAll('.burguer-info'); 
    let currentIndex = 0; 
    function showNextInfo() {
         burgerInfos.forEach((info, index) => { 
            if (index === currentIndex) { 
                info.classList.add('active'); 
            } else { 
                info.classList.remove('active'); 
            } 
        }); 
        currentIndex = (currentIndex + 1) % burgerInfos.length;
     } 
     showNextInfo(); 
     setInterval(showNextInfo, 5000);
}



 function seleccionarPedido() {
        const orderButtons = document.querySelectorAll('.order-button');
        const pedidoImagen = document.getElementById('pedido-imagen');
        const pedidoDetalle = document.getElementById('pedido-detalle');
        const platilloInput = document.getElementById('platillo');
        const tipoInput = document.getElementById('tipo');
    
        orderButtons.forEach(button => {
            button.addEventListener('click', function() {
                const name = this.getAttribute('data-name');
                const price = this.getAttribute('data-price');
                const image = this.getAttribute('data-image');
                const tipo = this.parentElement.parentElement.querySelector('.personal').textContent;
    
                // Actualizar la imagen del pedido
                pedidoImagen.src = image;
                pedidoImagen.alt = name;
    
                // Añadir el nuevo pedido al detalle del pedido
                const newItem = document.createElement('li');
                newItem.textContent = `${name} (1 unid.) - S/.${price}`;
                pedidoDetalle.appendChild(newItem);
    
                // Actualizar los campos de selección
                platilloInput.value = name;
                tipoInput.value = tipo;
    
                // Actualizar el total del pedido
                actualizarTotal();
            });
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
    
    

    export { cambiarTextoPorImagen, menuImagenes, mostrarRecomendaciones, cambiarTextoPorImg, generarFooter, textoAutomatico, seleccionarPedido}
