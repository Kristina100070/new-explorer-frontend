/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

/* eslint-disable no-undef */
import '../style/style.css';
import { Form } from './conponents/form/form';
import { Popup } from './conponents/popup/popup';
import { MainApi } from './api/main/MainApi';
import { NewsApi } from './api/news/NewsApi';
import { Header } from './conponents/header/Header';
// import { Article } from './conponents/article/Article';
// import { ArticleList } from './conponents/article-list/ArticleList';

// импорт переменных
// eslint-disable-next-line import/named
import { buttonMenu } from './constants/constants';


const header = new Header();
const api = new MainApi({
  baseUrl: 'https://api.news-explorer82.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});


const BUTTON_HEADER_SIGNUP = document.querySelector('.header__button');
const BUTTON_SINGIN = document.querySelector('.popup__link_in');
const BUTTON_SINGUP = document.querySelector('.popup__link_up');
const BUTTON_SINGIN_SUCCESS = document.querySelector('.popup__link_i');

const POPUP_SIGNUP = document.querySelector('.popup__singup');
const POPUP_SIGNIN = document.querySelector('.popup__singin');
const POPUP_SIGNUP_SUCCESS = document.querySelector('.popup__singup-success');


// eslint-disable-next-line no-undef
const popupSignup = new Popup(POPUP_SIGNUP);
const popupSignin = new Popup(POPUP_SIGNIN);
const popupSignupSuccess = new Popup(POPUP_SIGNUP_SUCCESS);

// валидация форм
const formSignup = new Form(document.forms.signup);
formSignup.setEventListeners();
const formSignin = new Form(document.forms.signin);
formSignin.setEventListeners();

// регистрация пользователя
// eslint-disable-next-line no-undef
document.forms.signup.addEventListener('submit', (event) => {
  event.preventDefault();
  // eslint-disable-next-line max-len
  api.signup(document.forms.signup.elements.email.value, document.forms.signup.elements.password.value, document.forms.signup.elements.name.value)
    .then(() => {
      popupSignup.close();
      POPUP_SIGNUP_SUCCESS.classList.add('popup_is-opened');
    });
});

// пользователь входит в аккаунт
document.forms.signin.addEventListener('submit', (event) => {
  event.preventDefault();
  // eslint-disable-next-line max-len
  api.signin(document.forms.signin.elements.email.value, document.forms.signin.elements.password.value)
    .then((data) => {
      localStorage.setItem('token', data.token);
      popupSignin.close();
      header.auth();
    });
});
// если позователь залогинен
api.getUser();
// пользователь выходит их своего аккаунта
document.querySelector('.header__icon-exit').addEventListener('click', () => {
  api.logout()
    .then(() => {
      localStorage.removeItem('token');
      header.unauth();
    });
});

BUTTON_HEADER_SIGNUP.addEventListener('click', () => {
  popupSignup.open();
});

BUTTON_SINGIN.addEventListener('click', () => {
  popupSignin.open();
  popupSignup.close();
});

BUTTON_SINGUP.addEventListener('click', () => {
  popupSignin.close();
  popupSignup.open();
});

BUTTON_SINGIN_SUCCESS.addEventListener('click', () => {
  popupSignin.open();
  popupSignupSuccess.close();
});

// открыть\закрыть мобильное меню
buttonMenu.addEventListener('click', () => {
  header.mobileMenu();
});

const result = document.querySelector('.result__articles');
class Article {
  // eslint-disable-next-line class-methods-use-this
  create(data) {
    const container = document.createElement('div');
    const template = `<div data-card-id="${data._id}" class="article">
    <div class="article__image" style="background-image: url(${data.urlToImage})"></div>
    <div class="article__keyword"></div>

    <div class="article__date">${data.publishedAt}</div>
    <div class="article__title">${data.title}</div>
    <div class="article__text">${data.description}</div>
    <div class="article__source">${data.source.name}</div>
  </div>`;
    container.insertAdjacentHTML('beforeend', template);
    return container;
  }
}

const article = new Article();

class ArticleList {
  // eslint-disable-next-line no-shadow
  constructor(container, article) {
    this.container = container;
    this.article = article;
  }

  addCard(data) {
    const element = this.article.create(data);
    this.container.appendChild(element);
  }

  render(data) {
    // eslint-disable-next-line no-plusplus
    data.forEach((item) => {
      this.addCard(item);
      document.querySelector('.result').style.display = 'flex';
    });
  }

  clearContent() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
      document.querySelector('.result').style.display = 'none';
      document.querySelector('.not-found').style.display = 'none';
    }
  }
}
const articleList = new ArticleList(result, article);

document.querySelector('.reserch__button').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.not-found').style.display = 'none';
  articleList.clearContent();
  document.querySelector('.preloader').style.display = 'flex';
  newsApi.getNews(document.querySelector('.reserch__input_handler').value)
    .then((res) => {
      if (res.totalResults === 0) {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.not-found').style.display = 'flex';
      }
      if (res.totalResults > 0) {
        document.querySelector('.preloader').style.display = 'none';
        articleList.render(res.articles.splice(0, 3));
        document.querySelector('.articles__button').addEventListener('click', () => {
          articleList.render(res.articles.splice(0, 3));
        });
      }
    });
});
