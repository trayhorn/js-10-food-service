// import menu from '../menu.json';
import '../css/styles.css';
import menu from './menu.json';
import template from '../templates/menu.hbs';

// ----change theme----

const bodyEl = document.body;
const checkbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkbox.addEventListener('change', changeThemeOnClick);

function changeThemeOnClick() {
  if (bodyEl.classList.contains(Theme.DARK)) {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }

}

// ----create HTML----

function createHTML(items) {
  return template(items);
}

const menuEl = document.querySelector('.js-menu');
const menuMarkup = createHTML(menu);
menuEl.insertAdjacentHTML('beforeend', menuMarkup);


