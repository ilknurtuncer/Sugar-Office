
function clickMoney() {
  document.getElementById('moneyText').textContent = event.target.textContent ;
 
}
function setLang() {
  document.getElementById('lang').textContent = event.target.textContent ;

}

function getCart(){
if(!document.getElementById("cart").classList.contains('show'))
document.getElementById("cart").classList.toggle("show");

}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
console.log(document.getElementsByClassName("mySlides").length);
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
let i;
let slides1 = document.getElementsByClassName("mySlides1");
let dots1 = document.getElementsByClassName("dot1");
if (n > slides1.length) {slideIndex1 = 1}
if (n < 1) {slideIndex1 = slides1.length}
for (i = 0; i < slides1.length; i++) {
  slides1[i].style.display = "none";
}
for (i = 0; i < dots1.length; i++) {
  dots1[i].className = dots1[i].className.replace(" active", "");
}
slides1[slideIndex1-1].style.display = "block";
dots1[slideIndex1-1].className += " active";
console.log(document.getElementsByClassName("mySlides1").length);
}




