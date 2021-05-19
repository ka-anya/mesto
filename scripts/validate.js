

const showErrorInput = (formElement, inputElement) => {
  const {inputErrorClass, errorActiveClass} = config;
  const errorEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorEl.textContent = inputElement.validationMessage;
  errorEl.classList.add(errorActiveClass);
}

const hideErrorInput = (formElement, inputElement) => {
  const {inputErrorClass, errorActiveClass} = config;
  const errorEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorEl.classList.remove(errorActiveClass);
  errorEl.textContent = '';
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideErrorInput(formElement, inputElement, config);
  } else {
    showErrorInput(formElement, inputElement, config);
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

const setEventListeners = (formElement, config) => {
  const {inputSelector, submitButtonSelector, ...restConfig} = config;
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
  });
  const inputs = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonEl = formElement.querySelector(submitButtonSelector)

  inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButton(buttonEl, inputs);
    });
  });
  toggleButton(buttonEl, inputs);
};

const enableValidation = (config) => {
    const {formSelector, ...restConfig} = config
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(formElement => {
      setEventListeners(formElement, restConfig);
  });
};


