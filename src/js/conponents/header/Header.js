/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import {
  BUTTON_MENU,
  HEADER_UNAUTH,
  HEADER_AUTH,
  HEADER_SAVE_ARTICLES,
  HEADER_NAV,
  HEADER_USER_NAME,
} from '../../constants/constants';

export default class Header {
  constructor() {
    this.header = header;
  }

  mainAuth() {
    HEADER_UNAUTH.style.display = 'none';
  }

  mainUnauth() {
    HEADER_UNAUTH.style.display = 'flex';
  }

  auth() {
    HEADER_AUTH.style.display = 'flex';
    HEADER_SAVE_ARTICLES.style.display = 'flex';
  }


  unauth() {
    HEADER_AUTH.style.display = 'none';
    HEADER_SAVE_ARTICLES.style.display = 'none';
  }

  mobileMenu() {
    HEADER_NAV.classList.toggle('header__toggle-menu');
    BUTTON_MENU.classList.toggle('header__icon-menu_delete');
  }

  mobileMenuArticle() {
    HEADER_NAV.classList.toggle('header__toggle-menu');
    BUTTON_MENU.classList.toggle('header__icon-menu_delete-black');
  }

  login() {
    return localStorage.getItem('token');
  }

  addUserName(name) {
    // eslint-disable-next-line no-param-reassign
    name = name[0].toUpperCase() + name.slice(1);
    HEADER_USER_NAME.textContent = name;
  }
}
