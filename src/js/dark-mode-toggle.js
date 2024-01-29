const button = document.querySelector('#dark-mode-toggle');
const html = document.querySelector('html');

button.addEventListener('click', function () {
    html.classList.toggle('dark', !html.classList.contains('dark'));
});
