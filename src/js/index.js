/* eslint-disable no-undef */
import '../style/style.css';
import Form from './conponents/form/Form';
import Popup from './conponents/popup/Popup';
import MainApi from './api/main/MainApi';
import NewsApi from './api/news/NewsApi';
import Header from './conponents/header/Header';
import Article from './conponents/article/Article';
import ArticleList from './conponents/article-list/ArticleList';

// импорт переменных
import {
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
  BUTTON_RESERCH,
  INPUT_HANDLER,
  BUTTON_SHOW_MORE,
  ERROR_INPUT,
} from './constants/constants';

const header = new Header();
const api = new MainApi(...OPTIONS_MAIN_API);
const newsApi = new NewsApi(OPTIONS_NEWS_API);
const popupSignup = new Popup(POPUP_SIGNUP);
const popupSignin = new Popup(POPUP_SIGNIN);
const popupSignupSuccess = new Popup(POPUP_SIGNUP_SUCCESS);
const formSignup = new Form(FORM_SIGNUP);
const formSignin = new Form(FORM_SIGNIN);
const article = new Article();
const articleList = new ArticleList(RESULT, article);

// валидация форм
formSignup.setEventListeners();
formSignin.setEventListeners();

// регистрация пользователя
FORM_SIGNUP.addEventListener('submit', (event) => {
  event.preventDefault();
  api.signup(AUTH_EMAIL.value, AUTH_PASSWORD.value, AUTH_NAME.value)
    .then((res) => {
      if (res !== undefined) {
        popupSignup.close();
        POPUP_SIGNUP_SUCCESS.classList.add('popup_is-opened');
      }
      ERROR_INPUT.style.display = 'flex';
    })
    .catch((err) => {
      throw err;
    });
});
// пользователь открывает страницу

api.getUser()
  .then((body) => {
    if (body.name !== undefined) {
      header.auth();
      header.mainAuth();
      header.addUserName(body.name);
    }
    if (!header.login()) {
      header.unauth();
    }
  })
  .catch((err) => {
    throw err;
  });

// пользователь входит в аккаунт
FORM_SIGNIN.addEventListener('submit', (event) => {
  event.preventDefault();
  api.signin(AUTH_EMAIL_LOGIN.value, AUTH_PASSWORD_LOGIN.value)
    .then((body) => {
      localStorage.setItem('token', body.token);
      popupSignin.close();
      header.auth();
      header.mainAuth();
    })
    .catch((err) => {
      throw err;
    });
});

// пользователь выходит их своего аккаунта
EXIT_BUTTON.addEventListener('click', () => {
  api.logout()
    .then(() => {
      localStorage.removeItem('token');
      header.unauth();
      header.mainUnauth();
    })
    .catch((err) => {
      throw err;
    });
});

// слушатели открытия попапов
BUTTON_HEADER_SIGNUP.addEventListener('click', () => {
  FORM_SIGNUP.reset();
  popupSignup.open();
  header.mobileMenu();
  ERROR_INPUT.style.display = 'none';
});

BUTTON_SINGIN.addEventListener('click', () => {
  FORM_SIGNIN.reset();
  popupSignin.open();
  popupSignup.close();
});

BUTTON_SINGUP.addEventListener('click', () => {
  FORM_SIGNUP.reset();
  popupSignin.close();
  popupSignup.open();
  ERROR_INPUT.style.display = 'none';
});

BUTTON_SINGIN_SUCCESS.addEventListener('click', () => {
  popupSignin.open();
  popupSignupSuccess.close();
});

// открыть\закрыть мобильное меню
BUTTON_MENU.addEventListener('click', () => {
  header.mobileMenu();
});

// поиск статей
BUTTON_RESERCH.addEventListener('click', (event) => {
  event.preventDefault();
  const keyword = INPUT_HANDLER.value;
  if (keyword === '') {
    INPUT_HANDLER.placeholder = 'Нужно ввести ключевое слово';
  } else {
    articleList.notFoundOff();
    articleList.errorServerOff();
    articleList.clearContent();
    articleList.preloaderOn();
    newsApi.getNews(keyword)
      .then((res) => {
        if (res.totalResults === 0) {
          articleList.preloaderOff();
          articleList.notFoundOn();
        }
        if (res.totalResults > 0) {
          articleList.preloaderOff();
          articleList.render(res.articles, keyword);
          BUTTON_SHOW_MORE.addEventListener('click', () => {
            articleList.render(res.articles, keyword);
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  }
});

// сохранить карточку
RESULT.addEventListener('click', (event) => {
  event.preventDefault();
  article.save(event);
});
// наведение на иконку "сохранить" для незарегистированных пользователей
articleList.hoverUnauth();
