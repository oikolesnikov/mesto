let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");

let titleInput = document.querySelector(".popup__input_text_title"); 
let subtitleInput = document.querySelector(".popup__input_text_subtitle");

let editProfile = document.querySelector(".profile__edit-button"); 
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

let popupClose = document.querySelector(".popup__close-button");

function openPopup() {
  popup.classList.add("popup_opened");
  titleInput.value = profileTitle.textContent;
  subtitleInput.value = profileSubtitle.textContent;
}
editProfile.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = titleInput.value;
  profileSubtitle.textContent = subtitleInput.value;
  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);