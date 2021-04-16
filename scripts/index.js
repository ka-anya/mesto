const openPopupButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

function togglePopup() {
  popup.classList.toggle('popup_opened')
}
openPopupButton.addEventListener('click',togglePopup);
closePopupButton.addEventListener('click',togglePopup);



