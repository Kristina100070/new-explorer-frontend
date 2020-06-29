
import { formattingDate } from '../../utils/formattingDate';
/* eslint-disable prefer-promise-reject-errors */

const datacreate = formattingDate();
const datanow = new Date().toISOString();
// eslint-disable-next-line import/prefer-default-export
export default class NewsApi {
  constructor() {
    this.apikey = '80a33e8074cb45edb9da80a222f7120b';
  }

  // eslint-disable-next-line class-methods-use-this
  getNews(UserKeyWord) {
    // eslint-disable-next-line no-undef
    return fetch(`http://newsapi.org/v2/everything?q=${UserKeyWord}&from=${datacreate}&sortBy=${datanow}&pageSize=100&apiKey=${this.apikey}`, {
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      });
  }
}
