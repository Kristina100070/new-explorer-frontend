import { errorSection } from '../../utils/error-section';
import { formattingDate } from '../../utils/formattingDate';
/* eslint-disable prefer-promise-reject-errors */

const datacreate = formattingDate();
const datanow = new Date();
// eslint-disable-next-line import/prefer-default-export
export default class NewsApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getNews(UserKeyWord) {
    // eslint-disable-next-line no-undef
    return fetch(`${this.baseUrl}/v2/everything?q=${UserKeyWord}&from=${datanow}&sortBy=${datacreate}&pageSize=100&apiKey=80a33e8074cb45edb9da80a222f7120b`, {
      credentials: 'include',
      headers: {
        authorization: `Bearer ${this.apikey}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .catch(() => {
        errorSection();
      });
  }
}
