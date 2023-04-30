export default class Card {
    constructor(element, profileId, cardTemplate, {handleCardClick, handleDeleteClick, putLike, removeLike}) {

      this._name = element.name;
      this._link = element.link;
      this._likes = element.likes;
      this._myCardId = element.owner._id;

      this._cardId = element._id;

      this._profileId = profileId;

      this._cardTemplate = cardTemplate;

      this._handleCardClick = handleCardClick;

      this._deleteButtonFunc = handleDeleteClick;

      this._putLike = putLike;
      this._removeLike = removeLike;
    }
    
  
    _getTemplate() {

      const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
      return cardElement;
  }
  
    _addEventListeners() {

      this._handleDeleteClick.addEventListener('click', () => {

        this._deleteButtonFunc(this._cardId)});

      this._buttonLike.addEventListener('click', () => {

        this._toggleLike()});

      this._elementImage.addEventListener('click', () => {

        this._handleCardClick(this._link, this._name)});
    }

    _toggleLike() {

      if(this._buttonLike.classList.contains('element__like-button_active')) {

        this._removeLike(this._cardId);
      } else {

        this._putLike(this._cardId);
      }
    }

    _checkIsLiked() {

      if(this._likes.some((like) => 
      
      like._id === this._profileId)) {

        this._buttonLike.classList.add('element__like-button_active');
      } else {

        this._buttonLike.classList.remove('element__like-button_active');
      }
    }

  
    _checkDeleteButtonVisibility() {

      if(this._profileId !== this._myCardId) {

        this._handleDeleteClick.remove()
      }
    }
  
    likesData(element) {

      this._buttonLike.classList.toggle('element__like-button_active');
      this._likes = element.likes;
      this._likesCounter.textContent = this._likes.length;
    }

    deleteCard() {

        this._element.remove();
        this._element = null;
    }
  
    createCard() {

      this._element = this._getTemplate(); 

      this._buttonLike = this._element.querySelector('.element__like-button');
      this._elementImage = this._element.querySelector('.element__image');
      this._handleDeleteClick = this._element.querySelector('.element__delete-button');
      this._likesCounter = this._element.querySelector('.element__like-counter');

      this._likesCounter.textContent = this._likes.length;

      this._elementImage.alt = this._name;
      this._elementImage.src = this._link;
      this._element.querySelector('.element__title').textContent = this._name;

      this._checkDeleteButtonVisibility();
      this._checkIsLiked();
      this._addEventListeners();

      return this._element;
    }
  }