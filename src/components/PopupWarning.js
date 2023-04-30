import Popup from "./Popup.js";

export default class PopupWarning extends Popup {
    constructor(elementSelector) {

      super(elementSelector);

      this._popupFormWarning = this._popup.querySelector('.popup__form');
    }
  
    changeHandleWarningSubmit(note) {

      this._handleWarningSubmit = note;
    }
  
    setEventListeners() {

      this._popupFormWarning.addEventListener('submit', (evt) => {

        super.setEventListeners();
        evt.preventDefault();
        this._handleWarningSubmit();
      })
    }
  }
  

  