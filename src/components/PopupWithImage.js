import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {

        super(popupSelector);
        
        this._popupImage = this._popup.querySelector('.popup__title_image');
        this._popupPicture = this._popup.querySelector('.popup__picture');
    }

    open(elementsImage, elementsText) {
        
        super.open();
        
        this._popupPicture.src = elementsImage;
        console.log( this._popupPicture, this._popupPicture.src);
        this._popupPicture.alt = elementsText;
        this._popupImage.textContent = elementsText;
    }

}