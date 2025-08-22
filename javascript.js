const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // impede o salto padrão
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
