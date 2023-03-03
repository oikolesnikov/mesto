export default class UserInfo {
    constructor({ name, info }) {
        this._userName = document.querySelector(name);
        this._userInfo = document.querySelector(info);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
    }

    setUserInfo(name, info) {
        this._userName.textContent = name;
        this._userInfo.textContent = info;
    }
}