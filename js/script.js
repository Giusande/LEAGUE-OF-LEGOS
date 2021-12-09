var menutoggle = document.querySelector('.toggle');
var nav = document.querySelector('#navbar');
var overflow = document.querySelector('#body');

menutoggle.onclick = function(){
  menutoggle.classList.toggle('active');
  nav.classList.toggle('active1')
  overflow.classList.toggle('active2')
}

function entrar(){
window.location.href = 'login.html'
}

function cadastre(){
  window.location.href = 'cadastro.html'
}

var user = document.querySelector('.user-mobile');

user.addEventListener('click', function(){
  window.location.href = 'login.html'
});