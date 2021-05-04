let openPopupButton = document.querySelector('.profile__edit-button');
let openAddCardButton = document.querySelector('.profile__add');
let popup = document.querySelector('.popup');
let addCard = document.querySelector('.add-card');
let addCardButton = document.querySelector('.add-card__button');
let closePopupButton = document.querySelector('.popup__close-button');
let closeAddCardButton = document.querySelector('.add-card__close-button');
let nameProfile = document.querySelector('.profile__name');
let subtitle = document.querySelector('.profile__subtitle');
let textProfile = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__container');
let cardAddElement = document.querySelector('.add-card__container');
let nameInput = document.querySelector('.popup__input_js_name');
let jobInput = document.querySelector('.popup__input_js_activity');
const cardContainer = document.querySelector('.grid');
const cardName = document.querySelector('#card-name');
const cardImg = document.querySelector('#img');
const template = document.querySelector('#grid-template');

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

function addNewCard(title, img) {

  const cardElement = template.content.querySelector('.grid__element').cloneNode(true);
  const cardTitle = cardElement.querySelector('.grid__title');
  const cardImg = cardElement.querySelector('.grid__img');
  const viewImg = document.querySelector('.view');
  const openViewImg = cardElement.querySelector('.grid__img');
  const closeViewImg = document.querySelector('.view__button');
  const openImg = document.querySelector('.view__img');
  const titleImg = document.querySelector('.view__title');

  cardTitle.textContent = title;
  cardImg.src = img;

  cardElement.querySelector('.grid__trash').addEventListener('click', function (evt) {
    const gridItem = evt.target.closest('.grid__element');
    gridItem.remove();
  });

  cardElement.querySelector('.grid__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('grid__like-on');
  });

  function toggleViewImg() {
    viewImg.classList.toggle('view__opened');
    openImg.src = img;
    titleImg.textContent = title;
    }

  openViewImg.addEventListener('click', toggleViewImg);
  closeViewImg.addEventListener('click', toggleViewImg);

  return cardElement;
}

initialCards.forEach(function(currentItem) {
  const newCard = addNewCard(currentItem.name, currentItem.link);
  cardContainer.append(newCard);
});



function togglePopup() {
  popup.classList.toggle('popup_opened')
}

function toggleAddCard() {
  addCard.classList.toggle('add-card__opened')
}


function profileContacts() {
  togglePopup()
  nameInput.value = nameProfile.textContent;
  jobInput.value = subtitle.textContent;
}

function formSubmit (evt) {
  evt.preventDefault();
  const taskValue = cardName.value;
  const imgSrc = cardImg.value;
  addCard.classList.remove('add-card__opened');
  cardContainer.prepend(addNewCard(taskValue, imgSrc));
  cardName.value = '';
  cardImg.value = '';
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}


openPopupButton.addEventListener('click', profileContacts);
closePopupButton.addEventListener('click', togglePopup);
openAddCardButton.addEventListener('click', toggleAddCard);
closeAddCardButton.addEventListener('click', toggleAddCard);

formElement.addEventListener('submit', formSubmitHandler);
cardAddElement.addEventListener('submit', formSubmit);





