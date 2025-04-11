/* Manipular os sliders */

let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

function showSlides() {
    const slides = document.querySelectorAll('.banner .slide');
    const pointers = document.querySelectorAll('.banner .pointer');

    // Esconder todos os slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Remover a classe 'active' de todos os pointers
    pointers.forEach(pointer => {
        pointer.classList.remove("active");
    });

    // Incrementar o índice do slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta ao primeiro slide
    }

    // Mostrar o slide atual e marcar o pointer correspondente
    slides[slideIndex].style.display = "block";
    pointers[slideIndex].classList.add("active");

    // Chamar a função novamente após 3 segundos
    setTimeout(showSlides, 3000);
}
