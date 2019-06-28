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
const titleTopHeader = document.querySelector('.slider__slide--top');

const titleBottom = document.querySelector('.slider__slide-title--bottom');
const titleBottomHeader = document.querySelector('.slider__slide--bottom');

const slideHeader = document.querySelector('.mobile-slider__active-slider .mobile-slider__slide-header');
const conceptionTitle = document.querySelector('.absolute');

titleTop.addEventListener('click', function() {
  titleBottom.classList.add('toBottomHover');
  titleTopHeader.style.top = `${slideHeader.offsetTop}px`;
  titleTopHeader.style.transform = 'unset';
});

titleBottom.addEventListener('click', function() {
  titleTop.classList.add('toLeftHover');
  conceptionTitle.style.position = 'absolute';
  titleBottomHeader.style.bottom = `${slideHeader.offsetTop}px`;
  titleBottomHeader.style.transform = 'unset';
});

window.addEventListener('resize', () => {
  titleTopHeader.style.top = `${slideHeader.offsetTop}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  jQuery(".mobile-slider__active-slider").slick({
    prevArrow: '',
    nextArrow: '',
    dots: false,
    slidesToShow: 1,
  });
});