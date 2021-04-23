let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');
let like = document.querySelector('.grid__like');
let nameProfile = document.querySelector('.profile__name');
let subtitle = document.querySelector('.profile__subtitle');
let textProfile = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_js_name');
let jobInput = document.querySelector('.popup__input_js_activity');


function togglePopup() {
  popup.classList.toggle('popup_opened')
}

function profileContacts() {
  togglePopup()
  nameInput.value = nameProfile.textContent;
  jobInput.value = subtitle.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', profileContacts);
closePopupButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);






