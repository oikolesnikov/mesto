export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__input-submit',
    inactiveButtonClass: 'popup__save-btn_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

export const initialCards = [
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

export const profileInfo = {
    name: '.profile__title',
    info: '.profile__subtitle',
};

export const elementsCase = '.elements';
export const elementTemplate = '.element-template';
export const profileBtnEdit = document.querySelector('.profile__edit-button');
export const profileTitleInput = document.querySelector('.popup__input_text_title');
export const profileSubtitleInput = document.querySelector('.popup__input_text_subtitle');
export const profileBtnAdd = document.querySelector('.profile__add-button');