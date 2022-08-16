// import menu from '../menu.json';
import '../css/styles.css';
import menu from './menu.json';
import template from '../templates/menu.hbs';

// ----change theme----

const bodyEl = document.body;
const checkbox = document.querySelector('#theme-switch-toggle');
const checkboxToggle = document.querySelector('.theme-switch__toggle');
checkbox.addEventListener('change', changeThemeOnClick);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeThemeOnClick() {
  if (bodyEl.classList.contains(Theme.DARK)) {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}

currentTheme();

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    bodyEl.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
      checkboxToggle.setAttribute('checked', true);
    }
  }
}

// ----create HTML----

function createHTML(items) {
  return template(items);
}

const menuEl = document.querySelector('.js-menu');
const menuMarkup = createHTML(menu);
menuEl.insertAdjacentHTML('beforeend', menuMarkup);


