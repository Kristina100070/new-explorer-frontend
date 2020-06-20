/* eslint-disable no-undef */
function formattingDate() {
  const dayMilliseconds = 24 * 60 * 60 * 1000 * 7;
  const currentDate = new Date().toISOString();
  const previousDate = new Date(new Date().getTime() - dayMilliseconds).toISOString();
  return {
    currentDate,
    previousDate,
  };
}
const datacreate = formattingDate();
const datanow = new Date();
// eslint-disable-next-line import/prefer-default-export
export class NewsApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.apikey = '80a33e8074cb45edb9da80a222f7120b';
  }

  getNews(UserKeyWord) {
    // eslint-disable-next-line no-undef
    return fetch(`http://newsapi.org/v2/everything?q=${UserKeyWord}&from=${datanow}&sortBy=${datacreate}&pageSize=100&apiKey=80a33e8074cb45edb9da80a222f7120b`, {
      headers: {
        authorization: `Bearer ${this.apikey}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.regect(res.status);
      });
  }
}
