// slider.js
// Buraya slider fonksiyonelliğini yazın
let cards = document.querySelector(".card-blogger").querySelectorAll(".card");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;

function slideLeft() {
  index--;
  if (index < 0) {
    index = cards.length - 1;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `translateX(${(i - index) * 100}%)`;
  }
}

function slideRight() {
  index++;
  if (index > cards.length - 1) {
    index = 0;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `translateX(${(i - index) * 100}%)`;
  }
}

prev.addEventListener("click", slideLeft);
next.addEventListener("click", slideRight);

setInterval(() => {
  next.click();
}, 3000);
