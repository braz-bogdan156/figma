document.querySelector('.button--mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.header__nav');
    nav.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    var nav = document.querySelector('.header__nav');
    var button = document.querySelector('.button--mobile-menu');
    
    
    if (!nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove('open');
    }
});