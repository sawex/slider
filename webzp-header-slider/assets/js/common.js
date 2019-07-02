"use strict";

var WebzpHeaderSlider = function WebzpHeaderSlider() {
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
  var desc = document.querySelector(".slider__description");
  var titles = document.querySelectorAll(".slider__slide-header");
  desc.style.transform = "translate(-50%, 0)";
  desc.style.opacity = "1";
  setTimeout(function() {
    titles.forEach(function(title) {
      title.style.opacity = "1";
    });
  }, 500);
};

WebzpHeaderSlider.prototype.initDesktopHovers = function() {
  var slideTitles = document.querySelectorAll(".slider__slide-header");
  slideTitles.forEach(function(title) {
    title.addEventListener("mouseover", function() {
      title.previousElementSibling.style.opacity = "1";
      title.previousElementSibling.style.transition = "ease-in .3s";
    });
    title.addEventListener("mouseout", function() {
      title.previousElementSibling.style.opacity = "0";
      title.previousElementSibling.style.transition = "ease-in .3s";
    });
  });
};

WebzpHeaderSlider.prototype.initMobileSlick = function() {
  var $slick = jQuery(".mobile-slider__active-slider").slick({
    prevArrow: "",
    nextArrow: "",
    dots: true,
    slidesToShow: 1
  });
  this.slick = $slick[0].slick;
};

WebzpHeaderSlider.prototype.initDesktopHoverPosition = function() {
  var titlePositionLeft = document.querySelectorAll(".slider__slide-right");
  var titlePositionRight = document.querySelectorAll(".slider__slide-left");
  titlePositionLeft.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      var leftSlide = document.querySelector(".slider__slide-left > header");
      leftSlide.style.left = "-50%";
      leftSlide.style.transition = "ease-in .5s";
    });
    element.addEventListener("mouseout", function() {
      var leftSlide = document.querySelector(".slider__slide-left > header");
      leftSlide.style.left = "50%";
      leftSlide.style.transition = "ease-in .3s";
    });
  });
  titlePositionRight.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      var leftSlide = document.querySelector(".slider__slide-right > header");
      leftSlide.style.left = "100%";
      leftSlide.style.transition = "ease-in .3s";
    });
    element.addEventListener("mouseout", function() {
      var leftSlide = document.querySelector(".slider__slide-right > header");
      leftSlide.style.left = "50%";
      leftSlide.style.transition = "ease-in .3s";
    });
  });
};

WebzpHeaderSlider.prototype.initBlueScreenAnimations = function() {
  var _this = this;

  var titleTop = document.querySelector(".slider__slide-title--top");
  var titleTopHeader = document.querySelector(".slider__slide--top");
  var titleBottom = document.querySelector(".slider__slide-title--bottom");
  var titleBottomHeader = document.querySelector(".slider__slide--bottom");
  var slideHeader = document.querySelector(
    ".mobile-slider__active-slider .mobile-slider__slide-header"
  );
  var conceptionTitle = document.querySelector(".absolute");
  var desc = document.querySelector(".mobile-slider__text-desc");

  var hideDivider = function hideDivider() {
    var style = document.createElement("style");
    style.innerHTML =
      "\n      .slider__slide:first-child::after {\n        display: none !important;\n      }\n    ";
    document.body.appendChild(style);
  };

  titleTop.addEventListener("click", function() {
    var offsetTop = slideHeader.getBoundingClientRect().top;
    hideDivider();
    desc.classList.add("desc-to-bottom");
    titleBottom.classList.add("toBottomHover");
    titleTopHeader.style.top = offsetTop + "px";
    titleTopHeader.style.transform = "unset";
    setTimeout(function() {
      document
        .querySelector(".mobile-slider__active-slider")
        .classList.add("slider-active");
      document.querySelector(".first-desc").classList.add("animation-desc");
    }, 500);
  });
  titleBottom.addEventListener("click", function() {
    _this.slick.slickGoTo(1);

    hideDivider();
    var offsetBottom = slideHeader.offsetTop;
    var height = slideHeader.getBoundingClientRect().height;
    desc.classList.add("desc-to-bottom");
    titleTop.classList.add("toLeftHover");
    setTimeout(function() {
      titleBottomHeader.style.bottom = offsetBottom + "px";
      titleBottomHeader.style.height = height + "px";
      titleBottomHeader.style.transform = "unset";
      document
        .querySelector(".mobile-slider__active-slider")
        .classList.add("slider-active");
      document.querySelector(".second-desc").classList.add("animation-desc");
    }, 500);
  }); // window.addEventListener('resize', () => {
  //   const offsetTop = slideHeader.getBoundingClientRect().top;
  //   const offsetBottom = slideHeader.offsetTop;
  //   const height = slideHeader.getBoundingClientRect().height;
  //   titleTopHeader.style.top = `${slideHeader.offsetTop}px`;
  //   titleTopHeader.style.top = `${offsetTop}px`;
  //   titleBottomHeader.style.bottom = `${offsetBottom}px`;
  //   titleBottomHeader.style.height = `${height}px`;
  // });
};

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.querySelector(".slider__container");

  if (slider) {
    var wsl = new WebzpHeaderSlider();
    wsl.init();
  }
});
