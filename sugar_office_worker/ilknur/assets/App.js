 // -JavaScript ile açılır menüyü kontrol etmek için
 document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.querySelector('.relative:nth-child(1) button');
    const languageMenu = document.querySelector('.relative:nth-child(1) .absolute');

    languageButton.addEventListener('click', function () {
        languageMenu.classList.toggle('hidden');
    });

    //- Dışarı tıklandığında dil menüsünü kapat
    document.addEventListener('click', function (event) {
        if (!languageButton.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });

    const currencyButton = document.querySelector('.relative:nth-child(3) button');
    const currencyMenu = document.querySelector('.relative:nth-child(3) .absolute');

    currencyButton.addEventListener('click', function () {
        currencyMenu.classList.toggle('hidden');
    });

    //- Dışarı tıklandığında para birimi menüsünü kapat
    document.addEventListener('click', function (event) {
        if (!currencyButton.contains(event.target)) {
            currencyMenu.classList.add('hidden');
        }
    });
});

//-Group Multilevel button -----
document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.group-multilevel .group:nth-child(1) button');
    const categoriesMenu = document.querySelector('.group-multilevel .group:nth-child(1) .absolute');

    const megaMenuButton = document.querySelector('.group-multilevel .group:nth-child(2) button');
    const megaMenu = document.querySelector('.group-multilevel .group:nth-child(2) .absolute');

    const multiLevelButton = document.querySelector('.group-multilevel .group:nth-child(3) button');
    const multiLevelMenu = document.querySelector('.group-multilevel .group:nth-child(3) .absolute');

    const brandsButton = document.querySelector('.group-multilevel .group:nth-child(4) button');
    const brandsMenu = document.querySelector('.group-multilevel .group:nth-child(4) .absolute');

    const specialsButton = document.querySelector('.group-multilevel .group:nth-child(5) button');
    const specialsMenu = document.querySelector('.group-multilevel .group:nth-child(5) .absolute');

    function hideAllMenus() {
        categoriesMenu.classList.add('hidden');
        megaMenu.classList.add('hidden');
        multiLevelMenu.classList.add('hidden');
        brandsMenu.classList.add('hidden');
        specialsMenu.classList.add('hidden');
    }

    categoriesButton.addEventListener('mouseover', function () {
        hideAllMenus();
        categoriesMenu.classList.toggle('hidden');
    });

    megaMenuButton.addEventListener('mouseover', function () {
        hideAllMenus();
        megaMenu.classList.toggle('hidden');
    });

    multiLevelButton.addEventListener('mouseover', function () {
        hideAllMenus();
        multiLevelMenu.classList.toggle('hidden');
    });

    brandsButton.addEventListener('mouseover', function () {
        hideAllMenus();
        brandsMenu.classList.toggle('hidden');
    });

    specialsButton.addEventListener('mouseover', function () {
        hideAllMenus();
        specialsMenu.classList.toggle('hidden');
    });

    document.addEventListener('mouseover', function (event) {
        if (
            !categoriesButton.contains(event.target) &&
            !megaMenuButton.contains(event.target) &&
            !multiLevelButton.contains(event.target) &&
            !brandsButton.contains(event.target) &&
            !specialsButton.contains(event.target)
        ) {
            hideAllMenus();
        }
    });
});
// sepet------
document.addEventListener("DOMContentLoaded", function () {
    var cartButton = document.getElementById("cart-button");
    var cartDropdown = document.getElementById("cart-dropdown");

    // Sepet butonuna tıklandığında
    cartButton.addEventListener("mouseover", function () {
        // Sepet dropdown'un görünürlüğünü toggle et
        cartDropdown.classList.toggle("hidden");
    });

    // Örnek: Ürün eklemek için bir bağlantıya tıklandığında
    var addToCartLinks = document.querySelectorAll("#cart-dropdown a");
    addToCartLinks.forEach(function (link) {
        link.addEventListener("mouseover", function (event) {
            event.preventDefault();
            // Burada ürün eklemek için gerekli işlemleri yapabilirsiniz.
            console.log("Ürün eklendi: " + link.textContent);
        });
    });
});




// Initialize Slick Carousel
$(document).ready(function(){
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
        nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
    });
});
$(document).ready(function () {
$('#carouselExampleSlidesOnly').slick();
});

function prevSlide() {
$('#carouselExampleSlidesOnly').slick('slickPrev');
}

function nextSlide() {
$('#carouselExampleSlidesOnly').slick('slickNext');
}
