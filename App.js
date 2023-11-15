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