$(document).ready(() => {
  $('.hamburger-menu').click((event) => {
    $('.hamburger-menu, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
})