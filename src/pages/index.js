import './index.css';
import { validationConfig,
         initialCards, 
         cardListSelector, 
         elementTemplate, 
         profileDescription,
         profilePopup,
         popupContainer,
         itemAddPopup,
         containerAdd,
         profileForm,
         formAdd,
         profileButtonEdit,
         nameAdd,
         linkAdd,
         profileButtonAdd,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js'
import PopupWithImage from '../components/PopupWithImage.js';

const validationFormProfile = createFormValidator(profileForm);
const validationFormImage = createFormValidator(formAdd);
function createFormValidator(formElement) {

  const validationForm = new FormValidator(validationConfig, formElement);
  validationForm.enableValidation();
  return validationForm;
}


const userInfo = new UserInfo(profileDescription);

profileButtonEdit.addEventListener('click', function () {

    const user = userInfo.getUserInfo();
    nameAdd.value = user.name;
    linkAdd.value = user.about;

    validationFormProfile.resetValidation();
    popupWithFormEdit.open();
});


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

        const cardElement = createCard(item.nameTitle, item.pic);

        defaultCardList.setItem(cardElement);
    }
});

popupWithFormAdd.setEventListeners();


const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {

        const cardElement = createCard(item.name, item.link);
        defaultCardList.setItem(cardElement);
    }
}, 
    cardListSelector
);

defaultCardList.renderItems();

const popupImage = new PopupWithImage('.popup-image');
  popupImage.setEventListeners();

function handleCardClick(elementsText, elementsImage) {
    
    popupImage.open(elementsText, elementsImage);
  }

function createCard(elementsImage, elementsText) {
    
    const card = new Card({name: elementsImage, link: elementsText}, elementTemplate, handleCardClick);
   
    const elementCard = card.newCard();
    return elementCard;
  }