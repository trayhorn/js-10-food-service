const bodyEl = document.body;
const themeSwitch = document.querySelector('#theme-switch-toggle');

console.log(bodyEl);

themeSwitch.addEventListener('change', () => {
  // bodyEl.classList.add('dark-theme');
  if (!bodyEl.classList.contains('dark-theme')) {

    bodyEl.classList.add('dark-theme');
  }
  if (bodyEl.classList.contains('dark-theme')) {
    bodyEl.classList.remove('dark-theme');
  }
})

