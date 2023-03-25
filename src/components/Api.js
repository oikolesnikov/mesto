class Api {
  constructor() {

  }

  _getJson(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

  getCards() {
    const p = fetch('https://mesto.nomoreparties.co/v1/cohort-61/cards', {
      headers: {
        authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
      },
    });
    return p.then(this._getJson);
  }

  addCards(item) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-61/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'dc5df3e9-b270-4692-81cc-452922132293'
        },
        body: JSON.stringify({
            name: item.name,
            link: item.link
        })
    }).then(this._getJson);
}
}
export default Api;