import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const openPopupButton = document.querySelector('.profile__edit-button');
const openAddCardButton = document.querySelector('.profile__add');
const popupProfile = document.querySelector('.popup_profile');
const popupView = document.querySelector('.popup_view');
const closePopupButton = document.querySelector('.popup__close-button');
const closeAddCardButton = document.querySelector('.popup__close-button_view');
const nameProfile = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container');
const cardAddElement = document.querySelector('.popup__container-view');
const nameInput = document.querySelector('.popup__input_js_name');
const jobInput = document.querySelector('.popup__input_js_activity');
const cardContainer = document.querySelector('.grid');
const cardName = document.querySelector('#card-name');
const imgCard = document.querySelector('#img');
export const imgPopup = document.querySelector('.popup_img');
const closeViewImg = document.querySelector('.popup__close-button_img');
const popupButton = document.querySelector('.popup__button_view');
export const openImg = document.querySelector('.popup__img');
export const titleImg = document.querySelector('.popup__title-img');


const initialCards = [
  {
   name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



function submitNewCard(title, img) {
  const card = new Card(title, img, '#grid-template')
  return card.render();
}

closeViewImg.addEventListener('click', function () {
  closePopup(imgPopup);
});

initialCards.forEach(function(currentItem) {
  const newCard = submitNewCard(currentItem.name, currentItem.link);
  cardContainer.append(newCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function clickCloseEditProfile() {
  closePopup(popupProfile);
}

function clickOpenView() {
  openPopup(popupView);
}

function clickCloseView() {
  closePopup(popupView);
}

function addInputInfo() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(popupProfile);
}


function addNameCard (evt) {
  evt.preventDefault();
  closePopup(popupView);
  cardContainer.prepend(submitNewCard(cardName.value, imgCard.value));
  cardName.value = '';
  imgCard.value = '';
}

function handlerFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(popupProfile);
}

function clickClosePopupOverlay (evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}


 function closePopupEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


openPopupButton.addEventListener('click', addInputInfo);
closePopupButton.addEventListener('click', clickCloseEditProfile);
openAddCardButton.addEventListener('click', clickOpenView);
closeAddCardButton.addEventListener('click', clickCloseView);
popupProfile.addEventListener('click', clickClosePopupOverlay);
popupView.addEventListener('click', clickClosePopupOverlay);
imgPopup.addEventListener('click', clickClosePopupOverlay);

formElement.addEventListener('submit', handlerFormSubmit);
cardAddElement.addEventListener('submit', addNameCard);


const profileFormValidator = new FormValidator (
  {formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass:'popup__input-error_active',
    errorClass: 'popup__error_visible'},
    formElement
);

const cardFormValidator = new FormValidator (
  {formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass:'popup__input-error_active',
    errorClass: 'popup__error_visible'},
    cardAddElement
);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();






