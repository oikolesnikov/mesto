import './index.css';
import { validationConfig, initialCards, elementsCase, elementTemplate, profileInfo,
    profileBtnEdit, profileTitleInput, profileSubtitleInput, profileBtnAdd,} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';


const formAdd = containerAdd.querySelector('.popup__form');

const validationFormProfile = createFormValidator(profileForm);
const validationFormImage = createFormValidator(formAdd);


function createFormValidator(formElement) {

  const validationForm = new FormValidator(validationConfig, formElement);
  validationForm.enableValidation();
  return validationForm;
}

const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListeners();

const handleCardClick = (text, image) => {

    popupImage.open(text, image);
}

const createCard = (firstItem, secondItem) => {

    const card = new Card(firstItem, secondItem, elementTemplate, handleCardClick);
    return card.generadeCard();
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

profileBtnEdit.addEventListener('click', function () {

    const user = userInfo.getUserInfo();

    profileTitleInput.value = user.name;
    profileSubtitleInput.value = user.info;

    validationFormProfile.resetValidation();
    popupWithFormProfile.open();
});

const popupWithFormProfile = new PopupWithForm('.popup_profile', {

    submitForm: (data) => {
        userInfo.setUserInfo(data);
    }
});

popupWithFormProfile.setEventListeners();

const popupWithFormItem = new PopupWithForm('.popup_item', {
    submitForm: (item) => {
        const cardElement = createCard(item.description, item.image);
        defaultCardList.addItem(cardElement);
    }
});

popupWithFormItem.setEventListeners();

profileBtnAdd.addEventListener('click', function () {

    formAdd.reset();
    validationFormImage.resetValidation();
    popupWithFormItem.open();
});

formAdd.addEventListener('submit', handleImageSubmit);
