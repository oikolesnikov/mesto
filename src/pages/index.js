import './index.css';
import { validationConfig,
         initialCards, 
         cardListSelector, 
         elementTemplate, 
         profileDescription,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js'
import PopupWithImage from '../components/PopupWithImage.js';


const profilePopup = document.querySelector('.popup-edit');
const popupContainer = profilePopup.querySelector('.popup__container');
const itemAddPopup = document.querySelector('.popup-add');
const containerAdd = itemAddPopup.querySelector('.popup__container');
const profileForm = popupContainer.querySelector('.popup__form');
const formAdd = containerAdd.querySelector('.popup__form');
const validationFormProfile = createFormValidator(profileForm);
const validationFormImage = createFormValidator(formAdd);


function createFormValidator(formElement) {

  const validationForm = new FormValidator(validationConfig, formElement);
  validationForm.enableValidation();
  return validationForm;
}


const userInfo = new UserInfo(profileDescription);

const profileButtonEdit = document.querySelector('.profile__edit-button');
const nameAdd = document.querySelector('.popup__input_text_title');
const linkAdd = document.querySelector('.popup__input_text_subtitle');

profileButtonEdit.addEventListener('click', function () {

    const user = userInfo.getUserInfo();
    nameAdd.value = user.name;
    linkAdd.value = user.about;

    validationFormProfile.resetValidation();
    popupWithFormEdit.open();
});

const profileButtonAdd = document.querySelector('.profile__add-button');

profileButtonAdd.addEventListener('click', function () {

    validationFormImage.resetValidation();
    popupWithFormAdd.open();
});

const popupWithFormEdit = new PopupWithForm('.popup-edit', {
    
    handleForm: (data) => {
        
        userInfo.setUserInfo(data.name, data.about);
    }
});

popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm('.popup-add', {

    handleForm: (item) => {

        const cardElement = createCard(item.elementsText, item.elementsImage);

        defaultCardList.addItem(cardElement);
    }
});

popupWithFormAdd.setEventListeners();


const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {

        const cardElement = createCard(item);
        defaultCardList.setItem(cardElement);
    }
}, 
    cardListSelector
);

defaultCardList.renderItems();


const imgPopup = document.querySelector('.popup-image'); 
const imgContainer = imgPopup.querySelector('.popup__container');
const cardImg = imgContainer.querySelector('.popup__picture');
const imgPopupSubtitle = imgContainer.querySelector('.popup__title_image');

const popupImage = new PopupWithImage('.popup-image');
  popupImage.setEventListeners();

function handleCardClick(elementsImage, elementsText) {

    cardImg.src = elementsImage.src;
    cardImg.alt = elementsImage.alt;
    imgPopupSubtitle.textContent = elementsText.textContent;

    popupImage.open(elementsImage, elementsText);
  }

function createCard(elementsImage, elementsText) {
    
    const card = new Card(elementsImage, elementsText, elementTemplate, handleCardClick);
    console.log(Card);
    const elementCard = card.newCard();
    return elementCard;
  }



  