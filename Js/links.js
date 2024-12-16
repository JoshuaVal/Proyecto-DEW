const  buttons = document.querySelectorAll('#links-nav a, .button-nav');

buttons.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

const enlaces = document.querySelectorAll('#links-nav a'); // Selecciona solo los enlaces dentro del contenedor

enlaces.forEach(enlace => {
  enlace.addEventListener('mouseover', () => {
    enlace.style.color = '#CDCDCD';
    link.style.transform = 'scale(1.1)';
  });

  enlace.addEventListener('mouseout', () => {
    enlace.style.color = 'white';
    link.style.transform = 'scale(1.1)';
  });
});