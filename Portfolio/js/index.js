document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.nav-menu');
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.header');
    this.classList.toggle('active');
    menu.classList.toggle('active');
});