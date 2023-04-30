export default class Api {
  constructor({token}) {
    this._token = token;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }


  getCards() { 
    return fetch(`${this._token}/cards`, { 
      headers: {
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
    }).then(this._getJson);
  }

  addCards(item) { 
    return fetch(`${this._token}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      })
  }).then(this._getJson);
  }

  getUserInfo() { 
    return fetch(`${this._token}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
    }).then(this._getJson);
  }

  addUserInfo(item) { 
    return fetch(`${this._token}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      })
  }).then(this._getJson);
  }

  deleteCard(id) {
    return fetch(`${this._token}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
  }).then(this._getJson);
  }

  putLike(id) {
    return fetch(`${this._token}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
  }).then(this._getJson);
}

  deleteLike(id) {
    return fetch(`${this._token}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
    }).then(this._getJson);
    }

  editAvatar(item) {
      return this._request(
        `${this._token}/users/me/avatar`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
          },
          body: JSON.stringify({
            avatar: item.avatar,
          })
        }
      )
    }
}