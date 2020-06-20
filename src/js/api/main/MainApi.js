/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/prefer-default-export
export class MainApi {
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
}
