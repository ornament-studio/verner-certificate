// "use strict";

$(window).on('resize', function() {
  page_scale('1210')
});
page_scale('1210')
function page_scale(width) {
  let windows_width = $(window).width();
      zoom = (windows_width/width),
      window = $('body');
  if(windows_width > width) {
      $('body').css("zoom", zoom);
  } else {
      $('body').css("zoom", 1);
  }
  
}

// faq section

let buttons = document.querySelectorAll(".faq__header");
let content = document.querySelectorAll(".faq__item");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let index = Array.prototype.indexOf.call(buttons, button);
    if (content[index].classList.contains("open")) {
      content[index].classList.remove("open");
    } else {
      content[index].classList.add("open");
    }
  });
});

// carts show descriptions

let btnsShowDescription = document.querySelectorAll(".show-description");
let descriptions = document.querySelectorAll(".product__description");

btnsShowDescription.forEach(function (button) {
  button.addEventListener("click", function () {
    let index = Array.prototype.indexOf.call(btnsShowDescription, button);
    if (descriptions[index].classList.contains("show")) {
      descriptions[index].classList.remove("show");
      btnsShowDescription[index].classList.remove("show");
    } else {
      descriptions[index].classList.add("show");
      btnsShowDescription[index].classList.add("show");
    }
  });
});

// mobile menu
const iconMenu = document.querySelector(".open-menu");
const menuBody = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

iconMenu.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("_lock");
  menuBody.classList.toggle("_active");
  iconMenu.classList.toggle("_active");
});

if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      document.body.classList.remove("_lock");
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
    });
  });
}


// sliders
$(document).ready(function () {
  // events
  $(".calendar__slider").slick({
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
  });
  $(".reviews__slider").slick({
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
  });

});