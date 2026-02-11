const btnNavEl = document.querySelector('.nav-menu');
const headEl = document.querySelector('.heads');
btnNavEl.addEventListener('click', function(){
  headEl.classList.toggle('nav-open')
});