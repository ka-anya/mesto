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
const template = document.querySelector('#grid-template');
const imgO = document.querySelector('.popup_img');
const closeViewImg = document.querySelector('.popup__close-button_img');
const popupButton = document.querySelector('.popup__button_view');


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

class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._makeLayout();
    this._setEventListeners();
  }

  _makeLayout() {
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.grid__element')
    .cloneNode(true);

    this._cardImg = this._cardElement.querySelector('.grid__img');
    this._likebutton = this._cardElement.querySelector('.grid__like-button');
    this._trashButton = this._cardElement.querySelector('.grid__trash');
    const cardTitle = this._cardElement.querySelector('.grid__title');

    cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
  }

  _setEventListeners() {
    this._likebutton.addEventListener('click', () => this._handleLikeClick());
    this._trashButton.addEventListener('click', () => this._handleDeleteClick());
    this._cardImg.addEventListener('click', () => this._handleOpemImg());
  }

  _handleLikeClick() {
    this._likebutton.classList.toggle('grid__like-on');
  }

  _handleDeleteClick() {
    this._cardElement.remove();
  }

  _handleOpemImg() {
    const openImg = document.querySelector('.popup__img');
    const titleImg = document.querySelector('.popup__title-img');
    openPopup(imgO);
    openImg.src = this._link;
    titleImg.textContent = this._name;
  }

  render() {
    return this._cardElement;
  }
}


function addNewCard(data) {
  const card = new Card(data.name, data.link, '#grid-template')

  return card.render();
}

closeViewImg.addEventListener('click', function () {
  closePopup(imgO);
});

initialCards.forEach(function(currentItem) {
  const newCard = addNewCard(currentItem);
  cardContainer.append(newCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popup) {
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

function setSubmitButtonState() {
  popupButton.setAttribute('disabled', true);
}

function addNameCard (evt) {
  evt.preventDefault();
  const taskValue = cardName.value;
  const imgSrc = imgCard.value;
  closePopup(popupView);
  cardContainer.prepend(addNewCard(taskValue, imgSrc));
  cardName.value = '';
  imgCard.value = '';
  setSubmitButtonState(evt);
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
imgO.addEventListener('click', clickClosePopupOverlay);

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






