export default class Card {
    constructor(element, elementTemplate, handleCardClick) {

        this._name = element.name;
        this._link = element.link;
        this._elementTemplate = elementTemplate;
        this._handleCardClick = handleCardClick;
        
    }

    _getTemplate() {

        const cardElement = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    
    _nameCard = () => {

        this._elementsImage.src = this._link;
        this._elementsImage.alt = this._name;
        this._elementsText.textContent = this._name;
    };

    _toggleLike = () => {

        this._like.classList.toggle("element__like-button_active");
    }

    _deleteCard = () => {

        this.elementCard.remove()
    }

    _setEventHandlers = () => {

        this._button.addEventListener("click", () => 
            this._deleteCard())

        this._like.addEventListener("click", () => 
            this._toggleLike())

        this._elementsImage.addEventListener("click", () =>
            
            this._handleCardClick(this._elementsImage, this._elementsText))
    }

    newCard() {
        this.elementCard = this._getTemplate();
        
        this._elementsImage = this.elementCard.querySelector('.element__image');
        this._elementsText = this.elementCard.querySelector('.element__title');
        this._like = this.elementCard.querySelector('.element__like-button');
        this._button = this.elementCard.querySelector('.element__delete-button')
        

        this._nameCard();
        this._setEventHandlers();

        return this.elementCard;
    };
}