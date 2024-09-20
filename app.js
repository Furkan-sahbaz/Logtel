let intro = document.querySelector('.intro');
let logoholder = document.querySelector('.logoholder');

window.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
      logoholder.classList.add('active');
      
      setTimeout(() => {
         logoholder.classList.remove('active');
         logoholder.classList.add('fade');
      }, 1500);

      setTimeout(() => {
         intro.style.top = '-100vh';
      }, 1000);
   }, 400);
});

function goster(imgURL) {
   var modal = document.getElementById('myModal');
   var modalImg = document.getElementById('modalFoto');
   
   modal.style.display = 'block';
   modalImg.src = imgURL;
 }
 
 function kapat() {
   var modal = document.getElementById('myModal');
   modal.style.display = 'none';
 }