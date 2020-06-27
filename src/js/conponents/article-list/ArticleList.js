import {
  RESULT,
  RESULT_CONTAINER,
  PRELOADER,
  NOT_FOUND_ARTICLES,
  ERROR_SECTION,
  BUTTON_SHOW_MORE,
} from '../../constants/constants';
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export class ArticleList {
  constructor(container, article) {
    this.container = container;
    this.article = article;
  }

  addCard(data, keyword) {
    const element = this.article.create(data, keyword);
    this.container.appendChild(element);
  }

  render(data, keyword) {
    this._buttonResult(data);
    const arr = data.splice(0, 3);
    arr.forEach((item) => {
      this.addCard(item, keyword);
      RESULT_CONTAINER.style.display = 'flex';
    });
  }

  _buttonResult(data) {
    if (data.length > 3) {
      BUTTON_SHOW_MORE.style.display = 'flex';
    } else {
      BUTTON_SHOW_MORE.style.display = 'none';
    }
  }

  clearContent() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
      RESULT_CONTAINER.style.display = 'none';
    }
  }

  addSaveArticle(data) {
    const element = this.article.createSaveArticle(data);
    this.container.appendChild(element);
  }

  renderSaveArticle(data) {
    data.forEach((item) => {
      this.addSaveArticle(item);
    });
    RESULT_CONTAINER.style.display = 'flex';
  }

  removeArticle(event) {
    const del = event.target.parentNode;
    del.parentNode.removeChild(del);
    RESULT.removeChild(event.target.closest('.article'));
  }

  hoverUnauth() {
    if (!localStorage.getItem('token')) {
      RESULT.addEventListener('mouseover', (event) => {
        event.preventDefault();
        if (event.target.className === 'article__icon-save') {
          event.target.nextElementSibling.classList.add('article__unauth_active');
        }
      });
    }
    if (!localStorage.getItem('token')) {
      RESULT.addEventListener('mouseout', (event) => {
        event.preventDefault();
        if (event.target.className === 'article__icon-save') {
          event.target.nextElementSibling.classList.remove('article__unauth_active');
        }
      });
    }
  }

  preloaderOn() {
    PRELOADER.style.display = 'flex';
  }

  preloaderOff() {
    PRELOADER.style.display = 'none';
  }

  notFoundOn() {
    NOT_FOUND_ARTICLES.style.display = 'flex';
  }

  notFoundOff() {
    NOT_FOUND_ARTICLES.style.display = 'none';
  }

  errorServerOff() {
    ERROR_SECTION.style.display = 'none';
  }
}
