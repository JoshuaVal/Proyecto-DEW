function showNextImage() {
    const images = document.querySelectorAll('#img-container img');
    let index = 0;

    function showNextImage() {
        // Oculta la imagen actual
        images[index].classList.remove('active');
        images[index].classList.add('hidden');

        index = (index + 1) % images.length;

        // Muestra la nueva imagen
        images[index].classList.remove('hidden');
        images[index].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
}



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
        { name: "BURGER", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "./img/buurgessaa.png" },
        { name: "PIZZA", subname: "desde", precio: "S/.30.90", botonName: "Pedido", imagen: "./img/piiiiza.png" },
        { name: "OTROS", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "./img/shaaawa.png" },
        { name: "COMPLEMENTOS", subname: "desde", precio: "S/.10.90", botonName: "Pedido", imagen: "./img/compleemento.png" },
        { name: "BEBIDAS", subname: "desde", precio: "S/.5.99", botonName: "Pedido", imagen: "./img/bebiiiida.png" },
    ];

    const menuContainer = document.getElementById('menu-container');
    //aqui estoy que llamo a ese id 

    menus.forEach(menu => {

        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');
        //aqui se va creando lo que me dijo de div y demas
        const img = document.createElement('img');
        img.src = menu.imagen;
        img.alt = menu.name;
        const title = document.createElement('h4');
        title.textContent = menu.name;
        const priceContainer = document.createElement('span');
        priceContainer.classList.add('price-container');
        const subname = document.createElement('span');
        subname.textContent = menu.subname;
        const precio = document.createElement('span');
        precio.classList.add('precio');
        precio.textContent = menu.precio;

        const button = document.createElement('button');
        button.classList.add('order-btn');
        button.textContent = menu.botonName;

        //no se si asi era
        priceContainer.appendChild(subname);
        priceContainer.appendChild(precio);
        menuCard.appendChild(img);
        menuCard.appendChild(title);
        menuCard.appendChild(priceContainer);
        menuCard.appendChild(button);


        menuContainer.appendChild(menuCard);
    });
}

function mostrarRecomendaciones() {
    const recomendaciones = [
        { titulo: "Título 1", descripcion: "Descripción breve del plato 1.", imagen: "./img/Ensalada.png" },
        { titulo: "Título 2", descripcion: "Descripción breve del plato 2.", imagen: "./img/Burgmagic.png" },
        { titulo: "Título 3", descripcion: "Descripción breve del plato 3.", imagen: "./img/Patatas.png" },
        { titulo: "Título 4", descripcion: "Descripción breve del plato 4.", imagen: "./img/Shawarma.png" },
        { titulo: "Título 5", descripcion: "Descripción breve del plato 5.", imagen: "./img/Pepperoni.png" }
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
        img.alt = `Descripción imagen ${rec.titulo}`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const titulo = document.createElement('h3');
        titulo.textContent = rec.titulo;

        const descripcion = document.createElement('p');
        descripcion.textContent = rec.descripcion;


        imagenes.appendChild(img);
        cardContent.appendChild(titulo);
        cardContent.appendChild(descripcion);
        card.appendChild(imagenes);
        card.appendChild(cardContent);

        containerRecomendacion.appendChild(card);
    });
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
    socialLinks.classList.add('social-links');
    socialLinks.innerHTML = `
        <li><a href="#" class="iconos2" target="_blank" title="Facebook">FB</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="Instagram">IG</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="Twitter">X</a></li>
        <li><a href="#" class="iconos2" target="_blank" title="LinkedIn">X</a></li>
    `;

    // Añadir todos los elementos al footer
    footer.appendChild(empresa);
    footer.appendChild(platos);
    footer.appendChild(info);
    footer.appendChild(paginas);
    footer.appendChild(socialLinks);
}



export { cambiarTextoPorImagen, menuImagenes, mostrarRecomendaciones,cambiarTextoPorImg ,generarFooter,showNextImage}
