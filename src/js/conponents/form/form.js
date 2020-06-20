/* eslint-disable no-param-reassign */
import { ERROR_MESSAGES } from '../../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export class Form {
  constructor(form) {
    this.form = form;
    this.button = form.querySelector('.popup__button');
  }

  // eslint-disable-next-line class-methods-use-this
  setServerError(err) {
    // eslint-disable-next-line no-undef
    const error = document.querySelector('.error_server');
    error.textContent = err;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateInputElement(input) {
    const element = input;
    const error = element.nextElementSibling;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in ERROR_MESSAGES) {
      if (input.validity[key]) {
        // eslint-disable-next-line no-return-assign
        return error.textContent = ERROR_MESSAGES[key];
      }
    }
    // eslint-disable-next-line no-return-assign
    return error.textContent = ERROR_MESSAGES.noError;
  }

  // eslint-disable-next-line class-methods-use-this
  _setSubmitButtonState(form, button) {
    button.disabled = !form.checkValidity();
    if (!form.checkValidity()) {
      return button.classList.remove('popup__button_active');
    }
    return button.classList.add('popup__button_active');
  }

  setEventListeners() {
    this.form.addEventListener('input', (event) => {
      // eslint-disable-next-line no-underscore-dangle
      this._validateInputElement(event.target);
      // eslint-disable-next-line no-underscore-dangle
      this._setSubmitButtonState(this.form, this.button);
    });
  }
}
