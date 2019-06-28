const slideHeaders = document.querySelectorAll('.slider__slide-header');

slideHeaders.forEach(function(element, index) {
  element.addEventListener('mouseover', function() {
    element.previousElementSibling.style.opacity = '1';
    element.previousElementSibling.style.transition = 'ease-in .3s';
  });

  element.addEventListener('mouseout', function() {
    element.previousElementSibling.style.opacity = '0';
    element.previousElementSibling.style.transition = 'ease-in .3s';
  });
});


const headerPositionLeft = document.querySelectorAll('.slider__slide-right');
const headerPositionRight = document.querySelectorAll('.slider__slide-left');

headerPositionLeft.forEach(function(element, index) {
  element.addEventListener('mouseover', function() {
    const leftSlide = document.querySelector('.slider__slide-left > header');
    leftSlide.style.left = '-50%';
    leftSlide.style.transition = 'ease-in .5s';
  });

   element.addEventListener('mouseout', function() {
    const leftSlide = document.querySelector('.slider__slide-left > header');
    leftSlide.style.left = '50%';
    leftSlide.style.transition = 'ease-in .3s';
  });
});

headerPositionRight.forEach(function(element, index) {
  element.addEventListener('mouseover', function() {
    const leftSlide = document.querySelector('.slider__slide-right > header');
    leftSlide.style.left = '100%';
    leftSlide.style.transition = 'ease-in .3s';
  });

   element.addEventListener('mouseout', function() {
    const leftSlide = document.querySelector('.slider__slide-right > header');
    leftSlide.style.left = '50%';
    leftSlide.style.transition = 'ease-in .3s';
  });
});

const titleTop = document.querySelector('.slider__slide-title--top');
const titleBottom = document.querySelector('.slider__slide-title--bottom');

titleTop.addEventListener('click', function() {
  titleBottom.classList.add('toBottomHover');
});

titleBottom.addEventListener('click', function() {
  titleTop.classList.add('toLeftHover');
});
