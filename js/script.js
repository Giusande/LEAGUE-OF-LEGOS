var menutoggle = document.querySelector('.toggle');
var nav = document.querySelector('#navbar');
var overflow = document.querySelector('#body');

menutoggle.onclick = function(){
  menutoggle.classList.toggle('active');
  nav.classList.toggle('active1')
  overflow.classList.toggle('active2')
}