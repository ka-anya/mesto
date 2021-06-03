
const invalidInput = (inputs) => {
  return inputs.some(inputElement => !inputElement.validity.valid);
}


export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonEl = this._formElement.querySelector(this._config.submitButtonSelector)
  }

_invalidInput(inputs){
    return inputs.some(inputElement => !inputElement.validity.valid);
  }

  disableSubmitButton() {
    this._buttonEl.disabled = true;
  }

  toggleButton() {
   if (this._invalidInput(this._inputs)) {
      this._buttonEl.disabled = true;
    } else {
      this._buttonEl.disabled = false;
    }
  }

  _setEventListeners() {
  this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this.toggleButton();
    });
  });
  }

  _showErrorInput(inputElement) {

    const errorEl = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorEl.textContent = inputElement.validationMessage;
    errorEl.classList.add(this._config.errorActiveClass);
  }

  _hideErrorInput (inputElement) {
    const errorEl = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorEl.classList.remove(this._config.errorActiveClass);
    errorEl.textContent = '';
  }

  _checkInputValidity(inputElement)  {
      if (inputElement.validity.valid) {
        this._hideErrorInput(inputElement);
      } else {
        this._showErrorInput(inputElement);
      }
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.disableSubmitButton();
    });
    this._setEventListeners(this._formElement, this._config);
    this.disableSubmitButton();
  }
}
