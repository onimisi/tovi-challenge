localStorage.setItem('count', localStorage.getItem('count') || 4);

localStorage.setItem('count', parseInt(localStorage.getItem('count')));
document.querySelector('.count__pizza').textContent = localStorage.getItem(
  'count'
);

window.addEventListener('beforeunload', function (event) {
  console.log('I am the 3rd one.');
  document.querySelector('body').classList.add('test');
});
