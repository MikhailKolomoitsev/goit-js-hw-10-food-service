import cards from './menu.json';
import itmesTemplate from './templates/food-cards.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuRef = document.querySelector('.js-menu')
const markUp = itmesTemplate(cards)

menuRef.insertAdjacentHTML('beforeend', markUp)
