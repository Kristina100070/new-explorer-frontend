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
  save(event) {
    if (event.target.classList.contains('article__icon-save')) {
      if (header.login()) {
        event.target.classList.toggle('article__icon_click');
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
        });
      }
    }
  }

  create(data, keyword) {
    // eslint-disable-next-line no-param-reassign
    data.publishedAt = dataTransform(data.publishedAt);
    const container = document.createElement('div');
    const template = `<div class="article">
    <div class="article__image" style="background-image: url(${data.urlToImage})"></div>
    <div class="article__icon-save"></div>
    <div class="article__unauth">Войдите, чтобы сохранять статьи</div>
    <div class="article__link" href="${data.url}"></div>
    <div class="article__keyword">${keyword}</div>
    <div class="article__date">${data.publishedAt}</div>
    <div class="article__title">${data.title}</div>
    <div class="article__text">${data.description}</div>
    <a href="${data.url}" target="_blank" class="article__source">${data.source.name}</a>
  </div>`;
    container.insertAdjacentHTML('beforeend', template);
    return container;
  }

  createSaveArticle(data) {
    const container = document.createElement('div');
    const template = `<div class="article">
    <div class="article__id" data-card-id="${data._id}"></div>
    <div class="article__image" style="background-image: url(${data.image})"></div>
    <div class="article__icon-delete"></div>
    <div class="article__label_delete">Убрать из сохранённых</div>
    <div class="article__unauth"></div>
    <div class="article__keyword_save">${data.keyword}</div>
    <div href="${data.url}" class="article__link"></div>
    <div class="article__date">${data.date}</div>
    <div class="article__title">${data.title}</div>
    <div class="article__text">${data.text}</div>
    <a href="${data.url}" target="_blank" class="article__source">${data.source}</a>
  </div>`;
    container.insertAdjacentHTML('beforeend', template);
    return container;
  }

  deleteArticle(event) {
    if (event.target.classList.contains('article__icon-delete')) {
      api.deleteArticle(event.target.parentNode.querySelector('.article__id').getAttribute('data-card-id'));
      const article = event.target.parentNode;
      article.parentNode.removeChild(article);
    }
  }
}
