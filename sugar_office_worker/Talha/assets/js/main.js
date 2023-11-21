document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#slider .slide");
<<<<<<< HEAD
  let currentSlide = 0;
=======
  let currentSlide = 1;
>>>>>>> 20fa5ed (talha edited)
  function fadeToSlide(slideIndex) {
    slides[currentSlide].classList.add("opacity-0");
    slides[currentSlide].classList.remove("opacity-100");
    currentSlide = (slideIndex + slides.length) % slides.length;
    slides[currentSlide].classList.add("opacity-100");
    slides[currentSlide].classList.remove("opacity-0");
  }

  document.getElementById("prev").addEventListener("click", () => {
    fadeToSlide(currentSlide - 1);
  });

  document.getElementById("next").addEventListener("click", () => {
    fadeToSlide(currentSlide + 1);
  });

  setInterval(() => {
    fadeToSlide(currentSlide + 1);
<<<<<<< HEAD
  }, 6000);
});
=======
  }, 2000);
});

document.getElementById('menu-btn').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});
>>>>>>> 20fa5ed (talha edited)
