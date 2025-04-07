/*manipular o slider*/

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var pointers = document.getElementsByClassName("pointer");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < pointers.length; i++) {
        pointers[i].className = pointers[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    pointers[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}
