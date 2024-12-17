const  buttons = document.querySelectorAll('#links-nav a, .button-nav');

buttons.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

const links = document.querySelectorAll('#links-nav a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.borderBottom = '2px solid #FF5B00';
  });

  link.addEventListener('mouseout', () => {
    link.style.borderBottom = 'none';
  });
});