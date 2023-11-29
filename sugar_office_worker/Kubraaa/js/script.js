// scripts.js

let currentIndex = 0;
const slides = document.querySelectorAll('#slider > li');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });
}

function prev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function next() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}




let currentIndex2 = 0;
const slides2 = document.querySelectorAll('#slider2 > li');

function showSlide2(index) {
  slides2.forEach((slide2, i) => {
    if (i === index) {
      slide2.classList.remove('hidden');
    } else {
      slide2.classList.add('hidden');
    }
  });
}

function prev2() {
  currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
  showSlide2(currentIndex2);
}

function next2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  showSlide2(currentIndex2);
}

function updateTimer1() {
  const now = new Date();
  const targetDate = new Date("December 31, 2023 23:59:59");
  const timeDifference = targetDate - now;

  const seconds1 = Math.floor((timeDifference / 1000) % 60);
  const minutes1 = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours1 = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days1 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById("days1").innerText = formatTime(days1);
  document.getElementById("hours1").innerText = formatTime(hours1);
  document.getElementById("minutes1").innerText = formatTime(minutes1);
  document.getElementById("seconds1").innerText = formatTime(seconds1);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the timer every second
setInterval(updateTimer1, 1000);

// Initial update
updateTimer1();



function updateTimer2() {
  const now = new Date();
  const targetDate = new Date("December 22, 2023 22:59:34");
  const timeDifference = targetDate - now;

  const seconds2 = Math.floor((timeDifference / 1000) % 60);
  const minutes2 = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours2 = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days2 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById("days2").innerText = formatTime(days2);
  document.getElementById("hours2").innerText = formatTime(hours2);
  document.getElementById("minutes2").innerText = formatTime(minutes2);
  document.getElementById("seconds2").innerText = formatTime(seconds2);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the timer every second
setInterval(updateTimer2, 1000);

// Initial update
updateTimer2();



const sliderContainer3 = document.getElementById('sliderContainer3');
const slider3 = document.getElementById('slider3');
let cards = slider3.getElementsByTagName('li')
  

  const elementsToShow3 = 4;


const sliderContainer3Width = sliderContainer3.clientWidth;
const cardWidth = sliderContainer3Width/elementsToShow3;

slider3.style.width=cards.length*cardWidth+'px';
slider3.style.transition='margin';

 
for (let index = 0; index < array.length; index++) {
  const element = cards[index];
  element.style.width=cardWidth+'px';
  
}

function nextSlide3(){
  console.log(+slider3.style.marginLeft.slice(0,-2))
  console.log(cardWidth*(cards.length-elementsToShow3))
  if(+slider3.style.marginLeft.slice(0,-2) !=-cardWidth*(cards.length-elementsToShow3))
  slider3.style.marginLeft = ((+slider3.style.marginLeft.slice(0,-2))-cardWidth)+'px';

}

function prevSlide3(){
  if(+slider3.style.marginLeft.slice(0,-2) !=0)
  slider3.style.marginLeft = ((+slider3.style.marginLeft.slice(0,-2))+cardWidth)+'px';

}