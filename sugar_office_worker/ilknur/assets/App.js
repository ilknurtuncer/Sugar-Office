 // --------JavaScript ile açılır menüyü kontrol etmek için ---------
 document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.querySelector('.relative:nth-child(1) button');
    const languageMenu = document.querySelector('.relative:nth-child(1) .absolute');

    languageButton.addEventListener('click', function () {
        languageMenu.classList.toggle('hidden');
    });

    //------ Dışarı tıklandığında dil menüsünü kapat ---------
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

    //- ------ Dışarı tıklandığında para birimi menüsünü kapat ---------
    document.addEventListener('click', function (event) {
        if (!currencyButton.contains(event.target)) {
            currencyMenu.classList.add('hidden');
        }
    });
});

//------- Group Multilevel button -------- 


document.addEventListener('DOMContentLoaded', function () {
    // Menü öğelerini seç
    const menuItems = document.querySelectorAll('.group-multilevel .group');

    // Tüm menüleri gizleme fonksiyonu
    function hideAllMenus() {
        // Her bir menü öğesini döngüye al
        menuItems.forEach(item => {
            // Menüyü seç
            const menu = item.querySelector('.absolute');
            // Menüyü gizle
            menu.classList.add('hidden');
        });
    }

    // Her bir menü öğesi için olay dinleyicileri ekle
    menuItems.forEach(item => {
        // Menü düğmesini seç
        const button = item.querySelector('button');
        // Menüyü seç
        const menu = item.querySelector('.absolute');

        // Düğmeye gelindiğinde
        button.addEventListener('mouseover', function () {
            // Diğer menüleri gizle
            hideAllMenus();
            // Bu menüyü göster
            menu.classList.remove('hidden');
        });

        // Menüden çıkıldığında
        menu.addEventListener('mouseleave', function () {
            // Menüyü gizle
            menu.classList.add('hidden');
        });
    });

    // Doküman seviyesinde bir tıklama olayı ekle
    document.addEventListener('click', function (event) {
        // Tıklanan öğenin bir düğme olup olmadığını kontrol et
        const isButtonClick = event.target.tagName === 'BUTTON';
        // Tıklanan öğenin bir bağlantı olup olmadığını kontrol et
        const isLinkClick = event.target.tagName === 'A';
        
        // Eğer tıklanan öğe hem düğme hem de bağlantı değilse
        if (!isButtonClick && !isLinkClick) {
            // Tüm menüleri gizle
            hideAllMenus();
        }
    });
});




 //------ Sepet -------

 document.addEventListener("DOMContentLoaded", function () {
    // Genel değişkenler
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Dropdown'ları gizleme fonksiyonu
    function hideAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.add("hidden");
        });
    }

    // Her dropdown butonu için olay dinleyicisi ekleme
    dropdownButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            hideAllDropdowns();
            const dropdown = button.nextElementSibling;
            dropdown.classList.remove("hidden");
        });
    });

    // Document seviyesinde bir tıklama olayı ekleyerek dropdownları kapatma
    document.addEventListener("click", function (event) {
        if (!event.target.classList.contains('dropdown-button') && !event.target.classList.contains('dropdown')) {
            hideAllDropdowns();
        }
    });

    // Ürün eklemek için bağlantılara tıklama olayı ekleme
    const addToCartLinks = document.querySelectorAll('.dropdown a');
    addToCartLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            // Burada ürün eklemek için gerekli işlemleri yapabilirsiniz.
            console.log("Ürün eklendi: " + link.textContent);
        });
    });
});

//----- Initialize Slick Carousel -----

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

 //---  Modul-7 ----

 function nextSlide() {
    document.getElementById('slider-1').style.display = 'none';
    document.getElementById('slider-2').style.display = 'flex';
  }

  function prevSlide() {
    document.getElementById('slider-2').style.display = 'none';
    document.getElementById('slider-1').style.display = 'flex';
  }


 //------- modul-20-----

// Carousel kontrol fonksiyonları
function prevItem() {
    showItem(currentItem - 1);
  }

  function nextItem() {
    showItem(currentItem + 1);
  }

  // Görüntülenen öğe sayısını takip etmek için değişken
  var currentItem = 1;

  // Öğeleri gösteren fonksiyon
  function showItem(n) {
    var items = document.querySelectorAll('[data-carousel-item]');
    if (n > items.length) {
      currentItem = 1;
    }
    if (n < 1) {
      currentItem = items.length;
    }
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[currentItem - 1].style.display = 'flex';
  }