import {cambiarTextoPorImagen,menuImagenes, mostrarRecomendaciones,cambiarTextoPorImg, generarFooter,textoAutomatico,seleccionarPedido} from "./utils.js";

document.addEventListener("DOMContentLoaded", cargaInicial());

function cargaInicial() {

    cambiarTextoPorImagen();
    menuImagenes();
    mostrarRecomendaciones();
    generarFooter();
    cambiarTextoPorImg();
    textoAutomatico();
    seleccionarPedido();
    
    
}