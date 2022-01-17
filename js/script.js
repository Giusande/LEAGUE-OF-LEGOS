var menu = document.querySelector('.bx-menu');
var menuX = document.querySelector('.bx-x');
var menuUl = document.querySelector('ul');

menu.addEventListener('click', function(){
  menuUl.style.left = "0"
});

menuX.addEventListener('click', function(){
  menuUl.style.left = "-100%"
});

var insta = document.querySelector('.bxl-instagram');
var twitch = document.querySelector('.bxl-twitch');

insta.addEventListener('click', function(){
  window.location.href = 'https://www.instagram.com/equipeleagueoflego/'
});

twitch.addEventListener('click', function(){
  window.location.href = 'https://www.twitch.tv/leagueof_legos/'
});