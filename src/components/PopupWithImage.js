import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(containerSelector) {
        super(containerSelector);
        this._popupTitleImage = this._popup.querySelector('.popup__title_image');
        this._picture = this._popup.querySelector('.popup__picture');
    }

    open(text, pic) {
        super.open();
        this._picture.src = pic;
        this._picture.alt = text;
        this._popupTitleImage.textContent = text;
    }

}