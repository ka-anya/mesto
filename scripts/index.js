const openPopupButton = document.querySelector('.profile__edit-button');
const openAddCardButton = document.querySelector('.profile__add');
const popup = document.querySelector('.popup');
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

function togglePopup() {
  popup.classList.toggle('popup_opened')
}

function togglePopupView() {
 popupView.classList.toggle('popup_opened')
}

function profileContacts() {
  togglePopup()
  nameInput.value = nameProfile.textContent;
  jobInput.value = subtitle.textContent;
}

function formSubmit (evt) {
  evt.preventDefault();
  const taskValue = cardName.value;
  const imgSrc = imgCard.value;
  popupView.classList.remove('popup_opened');
  cardContainer.prepend(addNewCard(taskValue, imgSrc));
  cardName.value = '';
  imgCard.value = '';
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', profileContacts);
closePopupButton.addEventListener('click', togglePopup);
openAddCardButton.addEventListener('click', togglePopupView);
closeAddCardButton.addEventListener('click', togglePopupView);

formElement.addEventListener('submit', formSubmitHandler);
cardAddElement.addEventListener('submit', formSubmit);





