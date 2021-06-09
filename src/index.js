import cards from './menu.json';
import itemesTemplate from './templates/food-cards.hbs'

const menuRef = document.querySelector('.js-menu')
const markUp = itemesTemplate(cards)

menuRef.insertAdjacentHTML('beforeend', markUp)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeController = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')

themeController.addEventListener('change', changeTheme)

body.classList.add(localStorage.getItem('theme'))
function changeTheme(e){
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK)
    body.classList.replace(Theme.LIGHT, Theme.DARK)
    return
  }
  localStorage.setItem('theme', Theme.LIGHT)
  body.classList.replace(Theme.DARK, Theme.LIGHT)
   
}
  localStorage.getItem('theme') === Theme.DARK
    ? themeController.checked=true
    : themeController.checked=false