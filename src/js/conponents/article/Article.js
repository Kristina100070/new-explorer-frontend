import Header from '../header/Header';
import MainApi from '../../api/main/MainApi';

import { OPTIONS_MAIN_API } from '../../constants/constants';
import { dataTransform } from '../../utils/dataTransform';

const api = new MainApi(OPTIONS_MAIN_API);
const header = new Header();
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
export default class Article {
  constructor() {
    this.id = '';
  }

  save(event) {
    if (event.target.classList.contains('article__icon-save')) {
      if (header.login()) {
        const keyword = event.target
          .closest('.article')
          .querySelector('.article__keyword').textContent;
        const title = event.target
          .closest('.article')
          .querySelector('.article__title').textContent;
        const text = event.target
          .closest('.article')
          .querySelector('.article__text').textContent;
        const date = event.target
          .closest('.article')
          .querySelector('.article__date').textContent;
        const source = event.target
          .closest('.article')
          .querySelector('.article__source').textContent;
        const link = event.target.closest('.article').querySelector('.article__link').getAttribute('href');
        const image = event.target.closest('.article').querySelector('.article__image').style.backgroundImage.slice(5);
        api.createArticle({
          keyword, title, text, date, source, link, image,
        })
          .then((res) => {
            if (res) {
              event.target.classList.add('article__icon_click');
              event.target.classList.remove('article__icon-save');
              this.id = res.data._id;
            }
          })
          .catch((err) => {
            throw err;
          });
      }
    } else {
      api.deleteArticle(this.id)
        .then((res) => {
          if (res) {
            event.target.classList.remove('article__icon_click');
            event.target.classList.add('article__icon-save');
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  create(dataArticles, keyword) {
    // eslint-disable-next-line no-param-reassign
    dataArticles.publishedAt = dataTransform(dataArticles.publishedAt);
    const container = document.createElement('div');
    const template = `<div class="article">
    <div class="article__image" style="background-image: url(${dataArticles.urlToImage})"></div>
    <div class="article__icon-save"></div>
    <div class="article__unauth">Войдите, чтобы сохранять статьи</div>
    <div class="article__link" href="${dataArticles.url}"></div>
    <div class="article__keyword">${keyword}</div>
    <div class="article__date">${dataArticles.publishedAt}</div>
    <div class="article__title">${dataArticles.title}</div>
    <div class="article__text">${dataArticles.description}</div>
    <a href="${dataArticles.url}" target="_blank" class="article__source">${dataArticles.source.name}</a>
  </div>`;
    container.insertAdjacentHTML('beforeend', template);
    return container;
  }

  createSaveArticle(dataArticles) {
    const container = document.createElement('div');
    const template = `<div class="article">
    <div class="article__id" data-card-id="${dataArticles._id}"></div>
    <div class="article__image" style="background-image: url(${dataArticles.image})"></div>
    <div class="article__icon-delete"></div>
    <div class="article__label_delete">Убрать из сохранённых</div>
    <div class="article__unauth"></div>
    <div class="article__keyword_save">${dataArticles.keyword}</div>
    <div href="${dataArticles.url}" class="article__link"></div>
    <div class="article__date">${dataArticles.date}</div>
    <div class="article__title">${dataArticles.title}</div>
    <div class="article__text">${dataArticles.text}</div>
    <a href="${dataArticles.url}" target="_blank" class="article__source">${dataArticles.source}</a>
  </div>`;
    container.insertAdjacentHTML('beforeend', template);
    return container;
  }

  deleteArticle(event) {
    if (event.target.classList.contains('article__icon-delete')) {
      const id = event.target.parentNode.querySelector('.article__id').getAttribute('data-card-id');
      api.deleteArticle(id)
        .then((res) => {
          if (res) {
            const article = event.target.parentNode;
            article.parentNode.removeChild(article);
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  }
}
