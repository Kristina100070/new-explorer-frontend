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
  RESULT,
  EXIT_BUTTON,
  BUTTON_RESERCH,
  INPUT_HANDLER,
  BUTTON_SHOW_MORE,
  ERROR_INPUT_SIGNIN,
  ERROR_INPUT_SIGNUP,
} from './constants/constants';
import { errorSection } from './utils/error-section';

const header = new Header();
const api = new MainApi(OPTIONS_MAIN_API);
const newsApi = new NewsApi();
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
    })
    .catch((err) => {
      err
        // eslint-disable-next-line no-shadow
        .then((err) => {
          console.log(err.message);

          ERROR_INPUT_SIGNUP.textContent = (err.message);
        });
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
    err
      // eslint-disable-next-line no-shadow
      .then((err) => {
        console.log(err.message);
      });
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
      err
        // eslint-disable-next-line no-shadow
        .then((err) => {
          ERROR_INPUT_SIGNIN.textContent = (err.message);
        });
    });
});

// пользователь выходит их своего аккаунта
EXIT_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('token');
  header.unauth();
  header.mainUnauth();
});

// слушатели открытия попапов
BUTTON_HEADER_SIGNUP.addEventListener('click', () => {
  formSignup.buttonUnactive();
  FORM_SIGNUP.reset();
  popupSignup.open();
  header.mobileMenu();
  ERROR_INPUT_SIGNUP.textContent = '';
});

BUTTON_SINGIN.addEventListener('click', () => {
  formSignin.buttonUnactive();
  FORM_SIGNIN.reset();
  popupSignin.open();
  popupSignup.close();
  ERROR_INPUT_SIGNIN.textContent = '';
});

BUTTON_SINGUP.addEventListener('click', () => {
  formSignup.buttonUnactive();
  FORM_SIGNUP.reset();
  popupSignin.close();
  popupSignup.open();
  ERROR_INPUT_SIGNUP.textContent = '';
});

BUTTON_SINGIN_SUCCESS.addEventListener('click', () => {
  popupSignin.open();
  popupSignupSuccess.close();
});

// открыть\закрыть мобильное меню
BUTTON_MENU.addEventListener('click', () => {
  header.mobileMenu();
});
BUTTON_RESERCH.disabled = false;
// поиск статей
BUTTON_RESERCH.addEventListener('click', (event) => {
  event.preventDefault();
  BUTTON_RESERCH.disabled = true;
  INPUT_HANDLER.disabled = true;
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
          BUTTON_RESERCH.disabled = false;
          INPUT_HANDLER.disabled = false;
        }
        if (res.totalResults > 0) {
          articleList.preloaderOff();
          BUTTON_RESERCH.disabled = false;
          INPUT_HANDLER.disabled = false;
          articleList.render(res.articles, keyword);
          BUTTON_SHOW_MORE.addEventListener('click', () => {
            articleList.render(res.articles, keyword);
          });
        }
      })
      .catch(() => {
        errorSection();
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
