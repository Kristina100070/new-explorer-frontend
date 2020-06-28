/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/prefer-default-export
export default class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
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
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line no-undef
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body,
    })
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  getUser() {
    return this.makeFetch('users/me');
  }

  signup(email, password, name) {
    // eslint-disable-next-line object-shorthand
    return this.makeFetch('signup', 'POST', { email: email, password: password, name: name });
  }

  signin(email, password) {
    return this.makeFetch('signin', 'POST', { email, password });
  }

  logout() {
    return this.makeFetch('users/me', 'PUT');
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
    return this.makeFetch(`{articles/${articleId}`, 'DELETE');
  }
}
