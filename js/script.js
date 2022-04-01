/* Popup */

const open = document.querySelector('.contacts_button');
const popup = document.querySelector('.modal');
const close = document.querySelector('.modal_close_button');
const form = popup.querySelector('.modal_form');
const username = popup.querySelector('[name=username]');

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal_show');
  username.focus();
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal_show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal_show')) {
      evt.preventDefault();
      popup.classList.remove('modal_show');
    }
  }
});

/* Slider */

const slideToggleBtns = document.querySelectorAll('.slide_control');
const slides = document.querySelectorAll('.features_item');

const clearSelected = function () {
  document.querySelector('.slide_control--current').classList.remove('slide_control--current');
  document.querySelector('.features_item--current').classList.remove('features_item--current');
};

slideToggleBtns.forEach(function (slideToggle, index) {
  slideToggle.addEventListener('click', function (evt) {
    clearSelected();
    evt.currentTarget.classList.add('slide_control--current');
    slides[index].classList.add('features_item--current');
  });
});

