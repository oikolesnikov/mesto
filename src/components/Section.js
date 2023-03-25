class Section {
    constructor({ renderer }, containerSelector) {

        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) {

        this._container.append(element);
    }

    addItem(element) {

        this._container.prepend(element);
    }

    clear() {

        this._container.innerHTML = '';
    }

    renderItems() {

        this._renderer();
    }
}
export default Section;