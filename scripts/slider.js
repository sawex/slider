const WebzpHeaderSlider = function() {
  this.init = function() {
    this.initDesktopHovers();
    this.initDesktopHoverPosition();
    this.initBlueScreenAnimations();
    this.initMobileSlick();
  };
};

WebzpHeaderSlider.prototype.initDesktopHovers = function() {
  const slideTitles = document.querySelectorAll('.slider__slide-header');

  slideTitles.forEach((title) => {
    title.addEventListener('mouseover', function() {
      title.previousElementSibling.style.opacity = '1';
      title.previousElementSibling.style.transition = 'ease-in .3s';
    });

    title.addEventListener('mouseout', function() {
      title.previousElementSibling.style.opacity = '0';
      title.previousElementSibling.style.transition = 'ease-in .3s';
    });
  });
};

WebzpHeaderSlider.prototype.initMobileSlick = function() {
  jQuery('.mobile-slider__active-slider').slick({
    prevArrow: '',
    nextArrow: '',
    dots: true,
    slidesToShow: 1,
  });
}

WebzpHeaderSlider.prototype.initDesktopHoverPosition = function() {
  const titlePositionLeft = document.querySelectorAll('.slider__slide-right');
  const titlePositionRight = document.querySelectorAll('.slider__slide-left');

  titlePositionLeft.forEach(function(element, index) {
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

  titlePositionRight.forEach(function(element, index) {
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
}

WebzpHeaderSlider.prototype.initBlueScreenAnimations = function() {
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
    // conceptionTitle.style.position = 'absolute';
    titleBottomHeader.style.bottom = `${slideHeader.offsetTop}px`;
    titleBottomHeader.style.transform = 'unset';
  });

  window.addEventListener('resize', () => {
    titleTopHeader.style.top = `${slideHeader.offsetTop}px`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const wsl = new WebzpHeaderSlider;
  wsl.init();
});