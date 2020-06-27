/* eslint-disable no-undef */
const ERROR_MESSAGES = {
  patternMismatch: 'Неправильный формат',
  tooShort: 'Должно быть от 2 до 30 символов',
  tooLong: 'Должно быть от 2 до 30 символов',
  valueMissing: 'Это обязательное поле',
  noError: '',
};
const BUTTON_MENU = document.querySelector('.header__icon-menu');
const AUTH_EMAIL = document.querySelector('.popup__input-email_signup');
const AUTH_PASSWORD = document.querySelector('.popup__input-password_signup');
const AUTH_NAME = document.querySelector('.popup__input-name_signup');

const AUTH_EMAIL_LOGIN = document.querySelector('.popup__input-email_signin');
const AUTH_PASSWORD_LOGIN = document.querySelector('.popup__input-password_signin');

const BUTTON_HEADER_SIGNUP = document.querySelector('.header__button');
const BUTTON_SINGIN = document.querySelector('.popup__link_in');
const BUTTON_SINGUP = document.querySelector('.popup__link_up');
const BUTTON_SINGIN_SUCCESS = document.querySelector('.popup__link_i');

const POPUP_SIGNUP = document.querySelector('.popup__singup');
const POPUP_SIGNIN = document.querySelector('.popup__singin');
const POPUP_SIGNUP_SUCCESS = document.querySelector('.popup__singup-success');

const FORM_SIGNUP = document.forms.signup;
const FORM_SIGNIN = document.forms.signin;

const RESULT = document.querySelector('.result__articles');
const RESULT_CONTAINER = document.querySelector('.result');

const EXIT_BUTTON = document.querySelector('.header__icon-exit');
const KEYWORDS_COUNT = document.querySelector('.info__count-articles_count');
const KEYWORDS_WORD = document.querySelector('.info__keywords');
const KEYWORDS_USER_NAME = document.querySelector('.info__count-articles_name');

const HEADER_UNAUTH = document.querySelector('.header__unauth');
const HEADER_AUTH = document.querySelector('.header__auth');
const HEADER_SAVE_ARTICLES = document.querySelector('.header__articles');
const HEADER_NAV = document.querySelector('.header__nav');
const HEADER_USER_NAME = document.querySelector('.header__user-name');

const BUTTON_RESERCH = document.querySelector('.reserch__button');
const INPUT_HANDLER = document.querySelector('.reserch__input_handler');
const BUTTON_SHOW_MORE = document.querySelector('.articles__button');

const PRELOADER = document.querySelector('.preloader');
const NOT_FOUND_ARTICLES = document.querySelector('.not-found');
const ERROR_SECTION = document.querySelector('.error__section');

const ERROR_INPUT = document.querySelector('.error__server');

const OPTIONS_MAIN_API = {
  baseUrl: 'https://api.news-explorer82.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
const OPTIONS_NEWS_API = {
  baseUrl: 'https://praktikum.tk/news/v2/everything',
  // https://newsapi.org/v2/everything
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include',
  },
};
export {
  ERROR_MESSAGES,
  BUTTON_MENU,
  AUTH_EMAIL,
  AUTH_PASSWORD,
  AUTH_NAME,
  AUTH_EMAIL_LOGIN,
  AUTH_PASSWORD_LOGIN,
  BUTTON_HEADER_SIGNUP,
  BUTTON_SINGIN,
  BUTTON_SINGUP,
  BUTTON_SINGIN_SUCCESS,
  POPUP_SIGNUP,
  POPUP_SIGNIN,
  POPUP_SIGNUP_SUCCESS,
  FORM_SIGNUP,
  FORM_SIGNIN,
  OPTIONS_MAIN_API,
  OPTIONS_NEWS_API,
  RESULT,
  EXIT_BUTTON,
  KEYWORDS_COUNT,
  KEYWORDS_WORD,
  KEYWORDS_USER_NAME,
  HEADER_UNAUTH,
  HEADER_AUTH,
  HEADER_SAVE_ARTICLES,
  HEADER_NAV,
  HEADER_USER_NAME,
  BUTTON_RESERCH,
  INPUT_HANDLER,
  BUTTON_SHOW_MORE,
  RESULT_CONTAINER,
  PRELOADER,
  NOT_FOUND_ARTICLES,
  ERROR_SECTION,
  ERROR_INPUT,
};
