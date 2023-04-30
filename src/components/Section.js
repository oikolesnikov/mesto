export default class Section {
    constructor({renderer}, containerSelector) {

      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(item) {
      this._container.prepend(item);
    }

    setItem(element) {

      this._container.append(element);
    }

    clear() {

    this._container.innerHTML = '';
    }

    renderItems(items) {
      items.reverse().forEach(item => {

      this._renderer(item);
      });
    } 
  }