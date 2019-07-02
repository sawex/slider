const WebzpHeaderSlider = function() {
  this.slick = null;
  this.init = function() {
    this.initDesktopAnimations();
    this.initDesktopHovers();
    this.initDesktopHoverPosition();
    this.initBlueScreenAnimations();
    this.initMobileSlick();
  };
};

WebzpHeaderSlider.prototype.initDesktopAnimations = function() {
  const desc = document.querySelector('.slider__description');
  const titles = document.querySelectorAll('.slider__slide-header');

  desc.style.transform = 'translate(-50%, 0)';
  desc.style.opacity = '1';

  setTimeout(function() {
    titles.forEach(function(title) {
      title.style.opacity = "1";
    });
  }, 500);
}

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
  const $slick = jQuery('.mobile-slider__active-slider').slick({
    prevArrow: '',
    nextArrow: '',
    dots: true,
    slidesToShow: 1,
  });

  this.slick = $slick[0].slick;
}

WebzpHeaderSlider.prototype.initDesktopHoverPosition = function() {
  const titlePositionLeft = document.querySelectorAll('.slider__slide-right');
  const titlePositionRight = document.querySelectorAll('.slider__slide-left');

  titlePositionLeft.forEach((element) => {
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

  titlePositionRight.forEach((element) => {
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

  const desc = document.querySelector('.mobile-slider__text-desc');

  const hideDivider = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      .slider__slide:first-child::after {
        display: none !important;
      }
    `;
    document.body.appendChild(style);
  }

  titleTop.addEventListener('click', function() {
    const offsetTop = slideHeader.getBoundingClientRect().top;

    hideDivider();

    desc.classList.add('desc-to-bottom');
    titleBottom.classList.add('toBottomHover');
    titleTopHeader.style.top = `${offsetTop}px`;
    titleTopHeader.style.transform = 'unset';
    setTimeout(() => {
      document.querySelector('.mobile-slider__active-slider').classList.add('slider-active');
      document.querySelector('.first-desc').classList.add('animation-desc');
    }, 500);
  });

  titleBottom.addEventListener('click', () => {
    this.slick.slickGoTo(1);
    
    hideDivider();

    const offsetBottom = slideHeader.offsetTop;
    const height = slideHeader.getBoundingClientRect().height;

    desc.classList.add('desc-to-bottom');
    titleTop.classList.add('toLeftHover');


    setTimeout(() => {
      titleBottomHeader.style.bottom = `${offsetBottom}px`;
      titleBottomHeader.style.height = `${height}px`;
      titleBottomHeader.style.transform = 'unset';
        document.querySelector('.mobile-slider__active-slider').classList.add('slider-active');
        document.querySelector('.second-desc').classList.add('animation-desc');
    }, 500);
  });

  // window.addEventListener('resize', () => {
  //   const offsetTop = slideHeader.getBoundingClientRect().top;
  //   const offsetBottom = slideHeader.offsetTop;
  //   const height = slideHeader.getBoundingClientRect().height;

  //   titleTopHeader.style.top = `${slideHeader.offsetTop}px`;
  //   titleTopHeader.style.top = `${offsetTop}px`;
  //   titleBottomHeader.style.bottom = `${offsetBottom}px`;
  //   titleBottomHeader.style.height = `${height}px`;
  // });
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider__container');
  if (slider) {
    const wsl = new WebzpHeaderSlider;
    wsl.init();
  }
});