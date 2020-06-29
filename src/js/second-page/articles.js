/* eslint-disable no-undef */
import '../../style/articles.css';
import Header from '../conponents/header/Header';
import MainApi from '../api/main/MainApi';
import Article from '../conponents/article/Article';
import ArticleList from '../conponents/article-list/ArticleList';
import UserInfo from '../conponents/user-info/UserInfo';

// импорт переменных
import {
  OPTIONS_MAIN_API,
  EXIT_BUTTON,
  RESULT,
  BUTTON_MENU,
  KEYWORDS_COUNT,
  KEYWORDS_WORD,
} from '../constants/constants';

const api = new MainApi(OPTIONS_MAIN_API);
const header = new Header();
const article = new Article();
const articleList = new ArticleList(RESULT, article);
const userInfo = new UserInfo();

// пользователь открывает страницу
api.getUser()
  .then((body) => {
    if (body.name !== undefined) {
      header.auth();
      header.addUserName(body.name);
      userInfo.userInfoName(body.name);
    }
  })
  .catch((err) => {
    throw err;
  });

// пользователь выходит их своего аккаунта
EXIT_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('token');
  header.unauth();
  window.location.href = '/';
  // '/new-explorer-frontend/'
});

// отрисовывает сохраненные статьи
api.getArticles()
  .then((res) => {
    articleList.renderSaveArticle(res);
    userInfo.countArticle(res.length);
    userInfo.addKeywords(res);
  })
  .catch((err) => {
    err
      // eslint-disable-next-line no-shadow
      .then((err) => {
        KEYWORDS_COUNT.textContent = (err.message);
        KEYWORDS_WORD.style.display = 'none';
      });
  });

// удалить карточку
RESULT.addEventListener('click', (event) => {
  event.preventDefault();
  article.deleteArticle(event);
});

// открыть\закрыть мобильное меню
BUTTON_MENU.addEventListener('click', () => {
  header.mobileMenuArticle();
});
