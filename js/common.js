$(window).on("load", function() {

  if ( $(".flexslider").length ) {
    $(".flexslider").flexslider();
  }
});



var popupButtons = document.querySelectorAll('.js-popup-button');
var popup = document.querySelector('.js-popup-wrapper');
var popupCloseButton = document.querySelector('.js-popup-close')

popupButtons.forEach(function(popupButton) {
    popupButton.addEventListener('click', function() {
        popup.classList.add('active');
    });
});

popupCloseButton.addEventListener('click', function() {
    popup.classList.remove('active');
})


var secondButtons = document.querySelectorAll('.second-button');
var popupSecond = document.querySelector('.second-wrapper');
var popupCloseButton = document.querySelector('.second-close');

secondButtons.forEach(function(popupButton) {
    popupButton.addEventListener('click', function() {
        popupSecond.classList.add('active');
    });
});

popupCloseButton.addEventListener('click', function() {
    popupSecond.classList.remove('active');
});

