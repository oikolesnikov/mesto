import './index.css';
import { validationConfig, initialCards, elementsCase, elementTemplate, profileInfo,
    profileButtonEdit, profileTitleInput, profileSubtitleInput, profileButtonAdd,
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
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

const popupImage = new PopupWithImage('.popup-image');
popupImage.setEventListeners();

const handleCardClick = (elementsImage, elementsText) => {

    cardImg.src = elementsImage.src;
    cardImg.alt = elementsImage.alt;
    imgPopupSubtitle.textContent = elementsText.textContent;
  
    popupImage.open(elementsText, elementsImage);
  }

function createCard(element) {

    const card = new Card(element, elementTemplate, handleCardClick);
    const elementCard = card.createCard();
  
  
    return elementCard;
  }

const defaultCardList = new Section({

    data: initialCards,
    renderer: (item) => {

        const cardElement = createCard(item.name, item.link);
        defaultCardList.addItem(cardElement);
    }
}, elementsCase);

defaultCardList.renderItems();

const userInfo = new UserInfo(profileInfo);

profileButtonEdit.addEventListener('click', function () {

    const user = userInfo.getUserInfo();
    profileTitleInput.value = user.name;
    profileSubtitleInput.value = user.info;

    validationFormProfile.resetValidation();
    popupWithFormProfile.open();
});

const popupWithFormProfile = new PopupWithForm('.popup-edit', {
    submitForm: (data) => {

        userInfo.setUserInfo(data);
    }
});

popupWithFormProfile.setEventListeners();

const popupWithFormItem = new PopupWithForm('.popup-add', {
    submitForm: (item) => {

        const cardElement = createCard(item.description, item.image);

        defaultCardList.addItem(cardElement);
    }
});

popupWithFormItem.setEventListeners();

profileButtonAdd.addEventListener('click', function () {

    validationFormImage.resetValidation();
    popupWithFormItem.open();
});