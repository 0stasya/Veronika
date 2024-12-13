
let slideIndex = 1;
showSlides(slideIndex);
let autoScrollInterval; // Переменная для хранения ID интервала

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides")[0];
  const numSlides = slides.children.length;

  if (n > numSlides) {slideIndex = 1}
  if (n < 1) {slideIndex = numSlides}

  for (i = 0; i < numSlides; i++) {
    slides.children[i].style.display = "none";
  }
  slides.children[slideIndex - 1].style.display = "block";
}

function startAutoScroll() {
  autoScrollInterval = setInterval(function() {
    plusSlides(1); // Переключаем на следующий слайд
  }, 3000); // 3000 мс = 3 секунды
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Запускаем автоскролл при загрузке страницы
window.onload = startAutoScroll;




