export default class Popup {
  
    constructor(popupSelector) {

      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
      this._closePopupOverlay = this._closePopupOverlay.bind(this);
      this._buttonClose = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose(evt) {

        if (evt.key === 'Escape') {

          this.close();
        }
      };

    _closePopupOverlay(evt) {

        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {

            this.close(evt.currentTarget);
        }
    }

    open() {
     
      document.addEventListener('keyup', this._handleEscClose);
      this._popup.classList.add('popup_opened');
    }
  
    close() {
      document.removeEventListener('keyup', this._handleEscClose);
      this._popup.classList.remove('popup_opened');
    }
  
    setEventListeners() {

      this._popup.addEventListener('click', this._closePopupOverlay); 
    }
  }