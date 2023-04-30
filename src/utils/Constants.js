const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__input-submit',
    inactiveButtonClass: 'popup__save-btn_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
const cardListSelector = '.elements';
const cardTemplate = '.element-template';
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

export const profilePopup = document.querySelector('.popup-edit');
export const popupContainer = profilePopup.querySelector('.popup__container');
export const profileForm = popupContainer.querySelector('.popup__form');

export const itemAddPopup = document.querySelector('.popup-add');
export const containerAdd = itemAddPopup.querySelector('.popup__container');
export const formAdd = containerAdd.querySelector('.popup__form');

export const profileButtonEdit = document.querySelector('.profile__edit-button');
export const nameAdd = document.querySelector('.popup__input_text_title');
export const linkAdd = document.querySelector('.popup__input_text_subtitle');

export const profileButtonAdd = document.querySelector('.profile__add-button');

export const avatarPopup = document.querySelector('.popup-avatar');
export const containerAva = profilePopup.querySelector('.popup__container');
export const formAva = containerAva.querySelector('.popup__form'); 

export { initialCards, validationConfig, cardListSelector, cardTemplate };