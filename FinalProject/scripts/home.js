let slideIndex = 0;
slider();

function slider() {
    let i, slides, dots
    slides = document.getElementsByClassName("introduce");
    dots = document.getElementsByClassName("dot");


    for(i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";

    }


    slideIndex = slideIndex + 1;

    if (slideIndex > slides.length) {
        slideIndex = 1 ;
    };

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";

    setTimeout(slider, 3000)
}