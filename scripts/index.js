const openPopupButton = document.querySelector('.profile__edit-button');
const openAddCardButton = document.querySelector('.profile__add');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupView = document.querySelector('.popup_view');
const closePopupButton = document.querySelector('.popup__close-button');
const closeAddCardButton = document.querySelector('.popup__close-button_view');
const nameProfile = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const textProfile = document.querySelector('.profile__text');
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




closeViewImg.addEventListener('click', function () {
  imgO.classList.toggle('popup_opened');
});

function addNewCard(title, img) {

  const cardElement = template.content.querySelector('.grid__element').cloneNode(true);
  const cardTitle = cardElement.querySelector('.grid__title');
  const cardImg = cardElement.querySelector('.grid__img');
  const openImg = document.querySelector('.popup__img');
  const titleImg = document.querySelector('.popup__title-img');

  cardTitle.textContent = title;
  cardImg.src = img;
  cardImg.alt = title;

  cardElement.querySelector('.grid__trash').addEventListener('click', function (evt) {
    const gridItem = evt.target.closest('.grid__element');
    gridItem.remove();
  });

  cardElement.querySelector('.grid__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('grid__like-on');
  });

  function toggleViewImg() {
    imgO.classList.toggle('popup_opened');
   openImg.src = img;
   titleImg.textContent = title;
   }

  cardImg.addEventListener('click', toggleViewImg);

  return cardElement;
}

initialCards.forEach(function(currentItem) {
  const newCard = addNewCard(currentItem.name, currentItem.link);
  cardContainer.append(newCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
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
  const taskValue = cardName.value;
  const imgSrc = imgCard.value;
  closePopup(popupView);
  cardContainer.prepend(addNewCard(taskValue, imgSrc));
  cardName.value = '';
  imgCard.value = '';
}

function handlerFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(popupProfile);
}



openPopupButton.addEventListener('click', addInputInfo);
closePopupButton.addEventListener('click', clickCloseEditProfile);
openAddCardButton.addEventListener('click', clickOpenView);
closeAddCardButton.addEventListener('click', clickCloseView);

formElement.addEventListener('submit', handlerFormSubmit);
cardAddElement.addEventListener('submit', addNameCard);

const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}
enableValidation(config);






