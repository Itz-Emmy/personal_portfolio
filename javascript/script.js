const container = document.querySelector('.nav-container');
const hamburger = document.querySelector('.hamburger');
const hamburgerMenuDisplay = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    container.classList.toggle('is-active');
    hamburgerMenuDisplay.classList.toggle('isActive');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        container.classList.remove('is-active');
        hamburgerMenuDisplay.classList.remove('isActive');
    });
});
hamburger.addEventListener('ontouchstart', () => {
    container.classList.toggle('is-active');
    hamburgerMenuDisplay.classList.toggle('isActive');
})

links.forEach(link => {
    link.addEventListener('ontouchstart', () => {
        container.classList.remove('is-active');
        hamburgerMenuDisplay.classList.remove('isActive');
    });
});


window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
    }
});