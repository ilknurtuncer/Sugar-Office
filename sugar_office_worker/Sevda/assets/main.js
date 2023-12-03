
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
    setTimeout(showSlides, 2000); // 2000 milisaniye (2 saniye) sonra bir sonraki slayda geç
}

showSlides(); // Sayfa yüklendiğinde otomatik başlat