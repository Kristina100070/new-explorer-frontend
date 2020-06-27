/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */

import {
  KEYWORDS_COUNT,
  KEYWORDS_WORD,
  KEYWORDS_USER_NAME,
} from '../../constants/constants';

export class UserInfo {
  userInfoName(name) {
    // eslint-disable-next-line no-param-reassign
    name = name[0].toUpperCase() + name.slice(1);
    KEYWORDS_USER_NAME.textContent = `${name}, у вас `;
  }

  countArticle(count) {
    const sav = 'сохраненн';
    const e = ['ая', 'ые', 'ых'];
    const artic = 'стат';
    const le = ['ья', 'ьи', 'ей'];
    KEYWORDS_COUNT.textContent = `${count} ${sav}${this._end(count, e)} ${artic}${this._end(count, le)}`;
  }

  _end(number, txt) {
    const cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  noData() {
    KEYWORDS_COUNT.textContent = 'нет сохраненных статей';
    KEYWORDS_WORD.style.display = 'none';
  }

  addKeywords(data) {
    const articleArr = [];
    data.forEach((item) => {
      articleArr.push(item.keyword);
    });
    const keywords = {};
    articleArr.forEach((item) => {
      if (keywords[item]) {
        keywords[item] += 1;
      } else {
        keywords[item] = 1;
      }
    });
    const words = Object.keys(keywords).sort((a, b) => keywords[b] - keywords[a]);

    if (words.length === 1) {
      KEYWORDS_WORD.insertAdjacentHTML('beforeEnd', `
        <span class="info__keywords_item">${words[0]}</span>
      </p>`);
    } else if (words.length === 2) {
      KEYWORDS_WORD.insertAdjacentHTML('beforeEnd', `
        <span class="info__keywords_item">${words[0]},</span>
        <span class="info__keywords_item">${words[1]}</span>
      </p>`);
    } else if (words.length > 2) {
      KEYWORDS_WORD.insertAdjacentHTML('beforeEnd', `
        <span class="info__keywords_item">${words[0]},</span>
        <span class="info__keywords_item">${words[1]}</span> и
        <span class="info__keywords_item">${words.length - 2} другим</span>
      </p>`);
    }
  }
}
