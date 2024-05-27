document.addEventListener("DOMContentLoaded", () => {
  if(sessionStorage.getItem('sesion') == null){
    sessionStorage.setItem('sesion', false);
  }
  if(sessionStorage.getItem('users') == null){
    sessionStorage.setItem('users', JSON.stringify([]));
  }
})

// INPUTS DEL FORM
const menuIcon = document.getElementById('menu');
const navMenu = document.getElementById('nav');



menuIcon.addEventListener('click', function() {
  navMenu.classList.toggle('menuMobileActive');
  document.body.classList.toggle('no-scroll');
});
