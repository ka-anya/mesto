let openPopupButton = document.querySelector('.profile__edit-button');
let openAddCardButton = document.querySelector('.profile__add');
let popup = document.querySelector('.popup');
let addCard = document.querySelector('.add-card');
let addCardButton = document.querySelector('.add-card__button');
let closePopupButton = document.querySelector('.popup__close-button');
let closeAddCardButton = document.querySelector('.add-card__close-button');
let like = document.querySelector('.grid__like');
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
const template = document.querySelector('#grid-template')
const initialCards = [
  'Научиться динамически добавлять контент',
    'Оптимизировать код',
    'Понять замыкания',
    'Поработать с гит-флоу',
  //{
   //name: 'Архыз',
   // link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  //},
  //{
   // name: 'Челябинская область',
   // link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  //},
  //{
    //name: 'Иваново',
    //link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  //},
  //{
    //name: 'Камчатка',
    //link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  //},
  //{
    //name: 'Холмогорский район',
   // link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  //},
  //{
   // name: 'Байкал',
   // link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  //}
];

function addNewCard(title, img) {

  function removeCard(e) {
    e.target.closest('.grid__element').remove();
  }

  const cardElement = template.content.querySelector('.grid__element').cloneNode(true);
  const cardTitle = cardElement.querySelector('.grid__title');
  const cardImg = cardElement.querySelector('.grid__img');
  const cardTrashButton = cardElement.querySelector('.grid__trash-button');

  cardTitle.textContent = title;
  cardImg.src = img;

  cardTrashButton.addEventListener('click', removeCard);
  return cardElement;
}
initialCards.forEach(function(currentItem, lite) {
  const newCard = addNewCard(currentItem, lite);
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
  const imgSrc = cardImg.pattern;
  addCard.classList.remove('add-card__opened');
  cardContainer.prepend(addNewCard(taskValue, imgSrc));
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





