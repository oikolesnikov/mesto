import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { initialCards, validationConfig } from "../scripts/Constants.js";


const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupForm = popupContainer.querySelector('.popup__form'); 
const nameInput = document.querySelector('.popup__input_text_title');
const infoInput = document.querySelector('.popup__input_text_subtitle');
const itemAddPopup = document.querySelector('.popup-add');
const containerAdd = itemAddPopup.querySelector('.popup__container');
const formAdd = containerAdd.querySelector('.popup__form');
const nameAdd = formAdd.querySelector('.popup__input_text_title');
const linkAdd = formAdd.querySelector('.popup__input_text_subtitle');
const imgPopup = document.querySelector('.popup-image'); 
const imgContainer = imgPopup.querySelector('.popup__container');
const cardImg = imgContainer.querySelector('.popup__picture');
const imgPopupSubtitle = imgContainer.querySelector('.popup__title_image');

const profileButtonAdd = document.querySelector('.profile__add-button');
const profileButtonEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const elementsContainer = document.querySelector('.elements__cards');
const elementTemplate = document.querySelector('.element-template').content.querySelector('.elements__card');

const validationFormProfile = formValidator(popupForm);
const validationFormImage = formValidator(formAdd);


function formValidator(formElement) {

  const validationForm = new FormValidator(validationConfig, formElement);
  validationForm.enableValidation();
  return validationForm;
}

const closePopupEscape = (evt) => {

    if (evt.key === 'Escape') {
        const escPopup = document.querySelector('.popup_opened');
        closePopup(escPopup);
    }
}

document.addEventListener('click', function (evt) {

    if (evt.target.classList.contains("popup")) {
        closePopup(evt.target);
    }
})

function openPopup(popup) {

    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupEscape);
}

function closePopup(popup) {

    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupEscape);
}

const btnsClose = document.querySelectorAll('.popup__close-button');

btnsClose.forEach((button) => {

    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

const handleCardClick = (elementsImage, elementsText) => {

  cardImg.src = elementsImage.src;
  cardImg.alt = elementsImage.alt;
  imgPopupSubtitle.textContent = elementsText.textContent;

  openPopup(imgPopup);
}

function createCard(element) {

  const card = new Card(element, elementTemplate, handleCardClick);
  const elementCard = card.createCard();


  return elementCard;
}

initialCards.forEach((element) => {

  const elementCard = createCard(element);
  elementsContainer.append(elementCard);
});

const handleImageSubmit = (element) => {

  element.preventDefault();

  const inputImage = {

    name: nameAdd.value,
    link: linkAdd.value,
  };

  const elementCard = createCard(inputImage);
  elementsContainer.prepend(elementCard);
  closePopup(itemAddPopup);
  formAdd.reset();
};

profileButtonEdit.addEventListener('click', () => {

  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;

  validationFormProfile.hideError();
  openPopup(popup);
});

function handleFormSubmit(event) {

  event.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;

  popupForm.reset();
  closePopup(popup);
};

popupForm.addEventListener('submit', handleFormSubmit);

profileButtonAdd.addEventListener('click', () => {
  formAdd.reset();
  validationFormImage.hideError();
  openPopup(itemAddPopup);
});

formAdd.addEventListener('submit', handleImageSubmit);