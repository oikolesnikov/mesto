export default class FormValidator {
  constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(inputElement) {
      const errorElement = document.querySelector(`.${inputElement.id}-error`);

      errorElement.classList.add(this._config.errorClass);
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(inputElement) {
      const errorElement = document.querySelector(`.${inputElement.id}-error`);

      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
      inputElement.classList.remove(this._config.inputErrorClass);
  }

  resetValidation() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
      })
  }

  _checkInputValidity(inputElement) {

      if (inputElement.validity.valid) {
          this._hideInputError(inputElement);
      } else {
          this._showInputError(inputElement);
      }
  }

  _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
      });
  }

  _toggleButtonState() {

      if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._config.inactiveButtonClass);
          this._buttonElement.disabled = true;
      } else {
          this._buttonElement.classList.remove(this._config.inactiveButtonClass);
          this._buttonElement.disabled = false;
      }
  }

  _setEventListeners() {

      this._toggleButtonState();

      this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState();
          });
      });

  }

  enableValidation() {
      this._setEventListeners();
  }

}

