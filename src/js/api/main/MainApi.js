export default class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  makeFetch(url, method = 'GET', body = undefined) {
    if (body) {
      // eslint-disable-next-line no-param-reassign
      body = JSON.stringify(body);
    }
    // eslint-disable-next-line no-undef
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      credentials: 'include',
      headers: this.headers,
      // eslint-disable-next-line comma-dangle
      body
    })
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (!res.ok) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(res.json());
        }
        return res.json();
      });
  }

  getUser() {
    return this.makeFetch('users/me');
  }

  signup(email, password, name) {
    return this.makeFetch('signup', 'POST', { email, password, name });
  }

  signin(email, password) {
    return this.makeFetch('signin', 'POST', { email, password });
  }

  getArticles() {
    return this.makeFetch('articles');
  }

  createArticle({
    keyword, title, text, date, source, link, image,
  }) {
    return this.makeFetch('articles', 'POST', {
      keyword, title, text, date, source, link, image,
    });
  }

  deleteArticle(articleId) {
    return this.makeFetch(`articles/${articleId}`, 'DELETE');
  }
}
