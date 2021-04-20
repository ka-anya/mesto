let openPopupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let like = document.querySelector('.grid__like');
let nameProfile = document.querySelector('.profile__name');
let subtitle = document.querySelector('.profile__subtitle');
let textProfile = document.querySelector('.profile__text');

function togglePopup() {
  popup.classList.toggle('popup_opened')
}

openPopupButton.addEventListener('click',togglePopup);
closePopupButton.addEventListener('click',togglePopup);


// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__activity');


function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.add('popup_opened');
}


formElement.addEventListener('submit', formSubmitHandler);





