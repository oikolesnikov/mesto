export default class UserInfo {
    
    constructor({ name, about }) {

        this._userName = document.querySelector(name);
        this._userAbout = document.querySelector(about);
    }

    getUserInfo() {

        const userDescription = {

            name: this._userName.textContent,
            about: this._userAbout.textContent
          }

          return userDescription
    }

    setUserInfo(name, about) {

        this._userName.textContent = name;
        this._userAbout.textContent = about;
    }
}