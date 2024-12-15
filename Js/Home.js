import {cambiarTextoPorImagen,menuImagenes, mostrarRecomendaciones,cambiarTextoPorImg, generarFooter} from "./utils.js";

document.addEventListener("DOMContentLoaded", cargaInicial());

function cargaInicial() {

    cambiarTextoPorImagen();
    menuImagenes();
    mostrarRecomendaciones();
    generarFooter();
    cambiarTextoPorImg();
    
    
}