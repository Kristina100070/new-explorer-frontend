/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { ERROR_MESSAGES } from '../../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export default class Form {
  constructor(form) {
    this.form = form;
    // eslint-disable-next-line no-undef
    this.button = form.querySelector('.popup__button');
  }

  _validateInputElement(input) {
    const element = input;
    const error = element.nextElementSibling;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in ERROR_MESSAGES) {
      if (input.validity[key]) {
        return error.textContent = ERROR_MESSAGES[key];
      }
    }
    return error.textContent = ERROR_MESSAGES.noError;
  }


  _setSubmitButtonState(form, button) {
    button.disabled = !form.checkValidity();
    if (!form.checkValidity()) {
      return button.classList.remove('popup__button_active');
    }
    return button.classList.add('popup__button_active');
  }

  setEventListeners() {
    this.form.addEventListener('input', (event) => {
      this._validateInputElement(event.target);
      this._setSubmitButtonState(this.form, this.button);
    });
  }

  buttonUnactive() {
    this.button.classList.remove('popup__button_active');
  }
}
