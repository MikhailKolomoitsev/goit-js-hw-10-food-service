import cards from './menu.json';
import itmesTemplate from './templates/food-cards.hbs'

const menuRef = document.querySelector('.js-menu')
const markUp = itmesTemplate(cards)

menuRef.insertAdjacentHTML('beforeend', markUp)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeController = document.querySelector('.theme-switch__toggle')
const body=document.querySelector('body')
themeController.addEventListener('change', changeTheme)
function changeTheme(e) {
  if (e.currentTarget.checked) {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
  }
  else {
    body.classList.remove(Theme.DARK)
    body.classList.add(Theme.LIGHT)
  }
  
}