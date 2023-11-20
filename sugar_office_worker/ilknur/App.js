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

// Yeni eklenen butonlar için kodlar
const multilevelButton = document.querySelector('.group-multilevel button');
const multilevelMenu = document.querySelector('.group-multilevel .absolute');

multilevelButton.addEventListener('click', function () {
    multilevelMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    if (!multilevelButton.contains(event.target)) {
        multilevelMenu.classList.add('hidden');
    }
});

const brandsButton = document.querySelector('.group-brands button');
const brandsMenu = document.querySelector('.group-brands .absolute');

brandsButton.addEventListener('click', function () {
    brandsMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    if (!brandsButton.contains(event.target)) {
        brandsMenu.classList.add('hidden');
    }
});

const specialsButton = document.querySelector('.group-specials button');
const specialsMenu = document.querySelector('.group-specials .absolute');

specialsButton.addEventListener('click', function () {
    specialsMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    if (!specialsButton.contains(event.target)) {
        specialsMenu.classList.add('hidden');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.group-multilevel .group:nth-child(1) a');
    const categoriesMenu = document.querySelector('.group-multilevel .group:nth-child(1) .absolute');

    const megaMenuButton = document.querySelector('.group-multilevel .group:nth-child(2) a');
    const megaMenu = document.querySelector('.group-multilevel .group:nth-child(2) .absolute');

    const multiLevelButton = document.querySelector('.group-multilevel .group:nth-child(3) a');
    const multiLevelMenu = document.querySelector('.group-multilevel .group:nth-child(3) .absolute');

    const brandsButton = document.querySelector('.group-multilevel .group:nth-child(4) a');
    const brandsMenu = document.querySelector('.group-multilevel .group:nth-child(4) .absolute');

    const specialsButton = document.querySelector('.group-multilevel .group:nth-child(5) a');
    const specialsMenu = document.querySelector('.group-multilevel .group:nth-child(5) .absolute');

    function hideAllMenus() {
        categoriesMenu.classList.add('hidden');
        megaMenu.classList.add('hidden');
        multiLevelMenu.classList.add('hidden');
        brandsMenu.classList.add('hidden');
        specialsMenu.classList.add('hidden');
    }

    categoriesButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideAllMenus();
        categoriesMenu.classList.toggle('hidden');
    });

    megaMenuButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideAllMenus();
        megaMenu.classList.toggle('hidden');
    });

    multiLevelButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideAllMenus();
        multiLevelMenu.classList.toggle('hidden');
    });

    brandsButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideAllMenus();
        brandsMenu.classList.toggle('hidden');
    });

    specialsButton.addEventListener('click', function (event) {
        event.preventDefault();
        hideAllMenus();
        specialsMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
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



// // JavaScript kullanarak accordion özelliği ekleme
// document.addEventListener('DOMContentLoaded', function () {
// var buttons = document.querySelectorAll('button[data-target]');

// buttons.forEach(function (button) {
//     button.addEventListener('click', function () {
//         var targetId = this.getAttribute('data-target');
//         var targetElement = document.getElementById(targetId);

//         // Diğer tüm menüleri gizle
//         buttons.forEach(function (btn) {
//             var otherTargetId = btn.getAttribute('data-target');
//             if (otherTargetId !== targetId) {
//                 document.getElementById(otherTargetId).classList.add('hidden');
//             }
//         });

//         // Tıklanan menüyü göster veya gizle
//         targetElement.classList.toggle('hidden');
//     });
// });
// });


