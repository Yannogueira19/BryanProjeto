let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Troca automática a cada 6 segundos
setInterval(nextSlide, 6000);


//segundo carrocel

let memberIndex = 0;

function updateMemberSlide() {
  const track = document.querySelector('.member-slide-track');
  const slideWidth = track.querySelector('img').offsetWidth + 40; // image + gap
  track.style.transform = `translateX(${-memberIndex * slideWidth}px)`;
}

function nextMemberSlide() {
  const track = document.querySelector('.member-slide-track');
  const totalSlides = track.children.length;
  if (memberIndex < totalSlides - 6) { // show 4 logos at a time
    memberIndex++;
    updateMemberSlide();
  }
}

function prevMemberSlide() {
  if (memberIndex > 0) {
    memberIndex--;
    updateMemberSlide();
  }
}

