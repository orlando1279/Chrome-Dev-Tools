const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('/network/getstarted.json');
});