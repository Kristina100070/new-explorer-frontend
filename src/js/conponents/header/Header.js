// eslint-disable-next-line import/named
import { buttonMenu } from '../../constants/constants';
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export class Header {
  constructor(options) {
    this.options = options;
  }


  auth() {
    document.querySelector('.header__auth').style.display = 'flex';
    document.querySelector('.header__articles').style.display = 'flex';
    document.querySelector('.header__unauth').style.display = 'none';
  }


  unauth() {
    document.querySelector('.header__unauth').style.display = 'flex';
    document.querySelector('.header__auth').style.display = 'none';
    document.querySelector('.header__articles').style.display = 'none';
  }

  mobileMenu() {
    buttonMenu.classList.toggle('header__icon-menu_delete');
    document.querySelector('.header__nav').classList.toggle('header__toggle-menu');
  }
}
