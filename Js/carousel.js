const carosueInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0

function showSlide(index){
    if(index>=items.length){
        currentIndex=0;
    }else if(index<0){
        currentIndex=items.length-1;
    }else{
        currentIndex=index;
    }
    carosueInner.style.transform= `translateY(-${currentIndex*100}%)`;
}

const botonPrevio = document.querySelector(".carousel-control-prev");
const botonSiguiente = document.querySelector(".carousel-control-next");

//capturando evento
botonPrevio.addEventListener('click',previo);
botonSiguiente.addEventListener('click',siguiente);

//crear funcion previo
function previo(){
    showSlide(currentIndex-1);
}
function siguiente(){
    showSlide(currentIndex+1);
}

