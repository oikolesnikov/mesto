import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleForm) {

    super(popupSelector);

    this._handleForm = handleForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._buttonSubmit = this._popupForm.querySelector('.popup__btn-default-name');
    this._textButtonSubmit = this._buttonSubmit.textContent;
  }

  _getInputValues() {

    this._inputValues = {};
    this._inputList.forEach((input) => {

      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {

    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {

      evt.preventDefault();
      this._handleForm(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoadingData(isLoading) {

    if(isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = this._textButtonSubmit;
    }
  }
}