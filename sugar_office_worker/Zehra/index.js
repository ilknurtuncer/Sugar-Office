function onMouseFunction() {
    if(!document.getElementById("onMouse").classList.contains('show'))
    document.getElementById("onMouse").classList.toggle("show");
   
  }
function onMoneyFunction() {
    if(!document.getElementById("onMoney").classList.contains('show'))
    document.getElementById('onMoney').classList.toggle("show");
}  

function onMultiLevel() {
    if(!document.getElementById("onMultiLevel").classList.contains('show'))
    document.getElementById('onMultiLevel').classList.toggle("show");
}

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

function onToys(){
  if(!document.getElementById("plush").classList.contains('show'))
  document.getElementById("plush").classList.toggle("show");

}

  
  // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

//   window.onclick = function(event) {
//     if (!event.target.matches('.multibtn')) {
//       var dropdowns = document.getElementsByClassName("multi-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

window.onclick = function(){
    document.getElementById("onMouse").classList.remove('show');
    document.getElementById("onMoney").classList.remove('show');
    document.getElementById("onMultiLevel").classList.remove('show');
    document.getElementById("cart").classList.remove('show');
    document.getElementById("plush").classList.remove('show');
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

