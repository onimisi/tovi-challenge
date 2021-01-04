document.querySelector('.count__pizza').textContent = localStorage.getItem(
  'count'
);

let pizzaAnimation = document.querySelector('.pizza__image');
let textAnimation = document.querySelector('.content');

pizzaAnimation &&
  pizzaAnimation.addEventListener('animationend', () => {
    localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1);
    document.querySelector('.count__pizza').textContent = localStorage.getItem(
      'count'
    );
  });

textAnimation &&
  textAnimation.addEventListener('animationend', () => {
    localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1);
    document.querySelector('.count__pizza').textContent = localStorage.getItem(
      'count'
    );
  });
