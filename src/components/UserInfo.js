export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}){

      this._userName = document.querySelector(nameSelector);
      this._userAbout = document.querySelector(aboutSelector);
      this._userAvatar = document.querySelector(avatarSelector)
    }
  
    getUserInfo() {
      
      const userDescription = {

        name: this._userName.textContent,
        about: this._userAbout.textContent,
        avatar: this._userAvatar.src
        
      }
  
      return userDescription
    }

  
    setUserInfo(name, about, avatar) {

      this._userName.textContent = name;
      this._userAbout.textContent = about;
      this._userAvatar.src = avatar;
    }
  }
  