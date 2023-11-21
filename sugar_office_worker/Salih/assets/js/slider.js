const slides = document.querySelectorAll(".slide");

const slideContainer = document.querySelector(".slideContainer")




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

