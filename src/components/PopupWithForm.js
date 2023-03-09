import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleForm}) {
      
        super(popupSelector);
        this._popupElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._handleForm = handleForm;
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _getInputValues() {   

        this._formValues = {};

        this._inputList.forEach(input => { 

          this._formValues[input.name] = input.value;
        });
    
        return this._formValues;  
      }

    _handleFormSubmit(evt) {

        evt.preventDefault();
        this._handleForm(this._getInputValues());
        this.close();
      }

    close() {

        this._popupElement.reset();
        super.close();
    }

    setEventListeners() {

      this._popupElement.addEventListener('submit', this._handleFormSubmit);
      super.setEventListeners();
      this.close();
    }
}