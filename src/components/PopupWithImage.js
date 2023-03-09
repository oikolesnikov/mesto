import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {

        super(popupSelector);
        
        this._popupImage = this._popup.querySelector('.popup__title_image');
        this._popupPicture = this._popup.querySelector('.popup__picture');
    }

    open(elementsText, elementsImage) {
        
        super.open();

        console.log(elementsText);
        console.log(elementsImage);
    }

}