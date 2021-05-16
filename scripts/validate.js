

const showErrorInput = (formElement, inputElement) => {
  const errorEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorEl.textContent = inputElement.validationMessage;
  errorEl.classList.add('popup__input-error_active');
}

const hideErrorInput = (formElement, inputElement) => {
  const errorEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorEl.classList.remove('popup__input-error_active');
  errorEl.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideErrorInput(formElement, inputElement);
  } else {
    showErrorInput(formElement, inputElement);
  }
}

const invalidInput = (inputs) => {
  return inputs.some(inputElement => !inputElement.validity.valid);
}

const toggleButton = (buttonEl, inputs) => {
  if (invalidInput(inputs)) {
    buttonEl.disabled = true;
  } else {
    buttonEl.disabled = false;
  }

}

const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
  });
  const inputs = Array.from(formElement.querySelectorAll('.popup__input'));

const buttonEl = formElement.querySelector('.popup__button')

  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement);
    toggleButton(buttonEl, inputs);
  });
  });
  toggleButton(buttonEl, inputs);
};

const enableValidation = (config) => {
const forms = Array.from(document.querySelectorAll('.popup__container'));
forms.forEach(formElement => {
  setEventListeners(formElement);
});
};


