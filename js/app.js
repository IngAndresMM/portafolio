document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    mostrarFecha();
})

function eventListeners() {
    const botonHamburguesa = document.querySelector('.navegacion__menu');

    window.addEventListener('scroll', mostrarAnimacion);
    botonHamburguesa.addEventListener('click', navegacionResponsive);
}

function mostrarAnimacion() {
    const enlacesAnimacion = document.querySelectorAll('.estudio');

    let scrollTop = document.documentElement.scrollTop;
    for(let i=0; i < enlacesAnimacion.length; i++) {
        let alturaAnimado = enlacesAnimacion[i].offsetTop;
        
        if(alturaAnimado - 560 < scrollTop) {
            enlacesAnimacion[i].style.opacity = 1;
            enlacesAnimacion[i].classList.add("animacionArriba");
        } else {
            enlacesAnimacion[i].style.opacity = 0;
            enlacesAnimacion[i].classList.remove("animacionArriba");
        }
    }
};

function navegacionResponsive() {
    const mostrarMenu = document.querySelector('.navegacion__enlaces');

    mostrarMenu.classList.toggle('mostrar');
};

function mostrarFecha() {
    const date = new Date(); 
    const fecha = document.querySelector('.footer__fecha');
    const año = date.getFullYear();
    fecha.textContent = año;
}



