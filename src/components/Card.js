export default class Card {
    constructor(text, image, templateSelector, handleCardClick) {
        this._text = text;
        this._image = image;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__card').cloneNode(true);
        return cardElement;
    }

    generadeCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.elements__image');
        this._setEventListeners();

        this._element.querySelector('.elements__text').textContent = this._text;
        this._elementImage.src = this._image;
        this._elementImage.alt = this._text;
        return this._element;
    }

    _removeElement() {
        this._element.remove();
    }

    _likeBtnToggle() {
        this._likeBtn.classList.toggle('element__like-button_active');
    }

    _setEventListeners() {

        this._likeBtn = this._element.querySelector('.element__like-button');

        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._removeElement();
        });

        this._likeBtn.addEventListener('click', () => {
            this._likeBtnToggle();
        });

        this._elementImage.addEventListener(('click'), () => {
            this._handleCardClick(this._text, this._image);
        });
    }
}