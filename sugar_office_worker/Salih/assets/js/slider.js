const slides = document.querySelectorAll(".slide");

const slideContainer = document.querySelector(".slideContainer")

const btnSlider1 = document.querySelector(".btnSlider1")
const btnSlider2 = document.querySelector(".btnSlider2")
const headingSlider = document.querySelector(".headingSlider")
const btnSliderContainer = document.querySelector(".btnSliderContainer")

let isToggled = true;




const swiper_home = document.getElementById('home-swiper');


const home_params = {
  // array with CSS styles
  navigation:"true",
  loop:"true",
  injectStyles: [
    `
    .swiper-button-next {
      background-color: #fff;
      padding:10px;
    }

    .swiper-button-next:hover{
      background-color: #ddd;
      color:rgb(239,68,68)
    }
    .swiper-button-prev {
     
      background-color:#fff ;
      padding:10px;
    
    }
    .swiper-button-prev:hover{
      color:rgb(239,68,68);
      background-color: #ddd;
    }
    `,
  ],

  // array with CSS urls
  injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
};

Object.assign(swiper_home, home_params);

swiper_home.initialize();






// Bottom dropdown menu click event 

const menuu = document.querySelector(".menuClick")
const menuId = document.querySelector("#menu2")


menuu.addEventListener("click", () => {
  menuId.classList.toggle("show")
})

// Curtain menu start

const curtain = document.querySelector(".curtainSlider");

const curtainLayer = document.querySelector("#myNav")
const closeButton = document.querySelector(".closebtn")

console.log(curtain,  curtainLayer, closeButton)

curtain.addEventListener("click", () => {
  curtainLayer.style.width = "250px";

})


closeButton.addEventListener("click", () => {
  curtainLayer.style.width = "0%";

})

const swiper_main = new Swiper('#swiper_main', {
  loop: true,                         
  pagination: {
      el: '.swiper-pagination',
      clickable: true,   
  },                
  navigation: {                       
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  breakpoints: {
    // When window width is >= 320px
    576: {
      slidesPerView: 4,
    },
    // When window width is >= 480px
    992: {
      slidesPerView: 8,
    },
    // When window width is >= 640px
    1100: {
      slidesPerView: 10,
    },
  },
  
})




const swiper_featured = document.getElementById('featured-products-swiper');
const buttonNext = document.getElementById('swiper-btn-next');
const buttonPrev = document.getElementById('swiper-btn-prev');
console.log(buttonPrev)

buttonNext.addEventListener('click', () => {
  swiper_featured.swiper.slideNext();
});

buttonPrev.addEventListener('click', () => {
  swiper_featured.swiper.slidePrev();
});




// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiper_featured, swiperParams);

// and now initialize it
swiper_featured.initialize();



const swiper_deal = document.getElementById('deal-products-swiper');
const buttonDealNext = document.getElementById('deal-swiper-btn-next');
const buttonDealPrev = document.getElementById('deal-swiper-btn-prev');
console.log(buttonPrev)

buttonDealNext.addEventListener('click', () => {
  swiper_deal.swiper.slideNext();
});

buttonDealPrev.addEventListener('click', () => {
  swiper_deal.swiper.slidePrev();
});



