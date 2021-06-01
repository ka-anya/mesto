

const imgO = document.querySelector('.popup_img');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}


export class Card {
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
    this._cardTitle = this._cardElement.querySelector('.grid__title');

    this._cardTitle.textContent = this._name;
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


