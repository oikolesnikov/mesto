import "./index.css";
import {
  validationConfig,
  initialCards,
  cardListSelector,
  cardTemplate,
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
  formAva,
  avatarPopup,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import PopupWarning from "../components/PopupWarning";
let profileId;

const api = new Api({
  token: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    authorization: "dc5df3e9-b270-4692-81cc-452922132293",
    "Content-Type": "application/json",
  },
});

const profileDescription = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar",
});

const popupWithFormEdit = new PopupWithForm(
  ".popup-edit",
  handleInfoFormSubmit
);
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(".popup-add", handleCardFormSubmit);
popupWithFormAdd.setEventListeners();

const profileAvatar = document.querySelector(".profile__avatar-edit");
const popupAvatar = new PopupWithForm(".popup-avatar", handleAvatarFormSubmit);
popupAvatar.setEventListeners();

const cardsSection = new Section(
  {
    renderer: (card) => {
      cardsSection.addItem(createCard(card));
    },
  },
  cardListSelector
);

const validationFormProfile = createFormValidator(profileForm);
const validationFormImage = createFormValidator(formAdd);
const validationFormAvatar = createFormValidator(formAva);



function createFormValidator(formElement) {
  const validationForm = new FormValidator(validationConfig, formElement);
  validationForm.enableValidation();

  return validationForm;
}

function handleInfoFormSubmit(dataProfile) {
  popupWithFormEdit.renderLoadingData(true);
  api
    .addUserInfo(dataProfile)
    .then((dataProfile) => {
      profileDescription.setUserInfo(
        dataProfile.name,
        dataProfile.about,
        dataProfile.avatar
      );
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupWithFormEdit.renderLoadingData(false);
    });
}

profileButtonEdit.addEventListener("click", () => {
  const user = profileDescription.getUserInfo();
  nameAdd.value = user.name;
  linkAdd.value = user.about;

  validationFormProfile.resetValidation();
  popupWithFormEdit.open();
});

function handleCardFormSubmit(dataCard) {
  popupWithFormAdd.renderLoadingData(true);
  api
    .addCards(dataCard)
    .then((dataCard) => {
      cardsSection.addItem(createCard(dataCard));
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupWithFormAdd.renderLoadingData(false);
    });
}

profileButtonAdd.addEventListener("click", () => {
  popupWithFormAdd.open();
});

function handleAvatarFormSubmit(data) {
  popupAvatar.renderLoadingData(true);
  api
    .editAvatar(data)
    .then((data) => {
      profileDescription.setUserInfo(data.name, data.about, data.avatar);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupAvatar.renderLoadingData(false);
    });
}

profileAvatar.addEventListener("click", () => {
  popupAvatar.open();
  validationFormAvatar.resetValidation();
});



Promise.all([api.getCards(), api.getUserInfo()])
  .then(([initialCards, userItem]) => {
    profileId = userItem._id;
    cardsSection.renderItems(initialCards);

    profileDescription.setUserInfo(
      userItem.name,
      userItem.about,
      userItem.avatar
    );
  })

  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

const popupBasket = new PopupWarning(".popup-warning");
popupBasket.setEventListeners();

const createCard = (element) => {
  const card = new Card(element, profileId, cardTemplate, {
    handleCardClick: (elementsText, elementsImage) => {
      popupImage.open(elementsText, elementsImage);
    },
    handleDeleteClick: (cardId) => {
      popupBasket.open();
      popupBasket.changeHandleWarningSubmit(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            popupBasket.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    putLike: (cardId) => {
      api
        .putLike(cardId)
        .then((element) => {
          card.likesData(element);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    removeLike: (cardId) => {
      api
        .deleteLike(cardId)
        .then((element) => {
          card.likesData(element);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
  });

  const newElementCard = card.createCard();
  return newElementCard;
};