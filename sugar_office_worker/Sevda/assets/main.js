
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX(' + (-100 * (slideIndex - 1)) + '%)';
    }
    setTimeout(showSlides, 3000); // 2000 milisaniye (3 saniye) sonra bir sonraki slayda geç
}

showSlides(); // Sayfa yüklendiğinde otomatik başlat


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    }