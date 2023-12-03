const slides = document.querySelectorAll(".slide");

const slideContainer = document.querySelector(".slideContainer")

const btnSlider1 = document.querySelector(".btnSlider1")
const btnSlider2 = document.querySelector(".btnSlider2")
const headingSlider = document.querySelector(".headingSlider")
const btnSliderContainer = document.querySelector(".btnSliderContainer")

let isToggled = true;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === (slides.length - 1)) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slideFn(curSlide)

});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  
  if (curSlide === 0) {
    curSlide = slides.length - 1;
  } else {
    curSlide--;
  }

  slideFn(curSlide)

});


// Slider Translate-x Function 

const slideFn = (curSlide) => {
  slideContainer.style.transform = `translateX(-${curSlide * 100}%)`;

  
  if(isToggled){
    headingSlider.classList.remove("left-[200px]");
    headingSlider.classList.add("right-[25%]");

    btnSlider1.classList.remove("left-[85px]");
    btnSlider1.classList.add("right-[33%]");

    btnSlider2.classList.remove("left-[325px]");
    btnSlider2.classList.add("right-[15%]");
  }
  else{
    headingSlider.classList.remove("right-[25%]");
    headingSlider.classList.add("left-[200px]");

    btnSlider1.classList.remove("right-[33%]");
    btnSlider1.classList.add("left-[85px]");

    btnSlider2.classList.remove("right-[15%]");
    btnSlider2.classList.add("left-[325px]");
  }
  isToggled = !isToggled;

   console.log(headingSlider.classList)

  // btnSliderContainer.style.right = `${15 - curSlide * 100}%`;
  // btnSlider.style.left = `${15 + curSlide * 100}%`;
}



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




const swiperEl = document.querySelector('swiper-container');
const buttonNext = document.getElementById('swiper-btn-next');
const buttonPrev = document.getElementById('swiper-btn-prev');
console.log(buttonPrev)

buttonNext.addEventListener('click', () => {
  swiperEl.swiper.slideNext();
});

buttonPrev.addEventListener('click', () => {
  swiperEl.swiper.slidePrev();
});
