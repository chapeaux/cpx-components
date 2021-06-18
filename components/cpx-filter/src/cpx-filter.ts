export class CPXFilter extends HTMLElement {
    static get tag() { return 'cpx-filter'; }
    _map = [];
    _container = '';
    _item = '';
    _condition = 'contains';
    _criteria = '';

    get container() { return this._container; }
    set container(val) {
        if (this._container === val) return;
        this._container = val;
        this.setAttribute('container',this._container);
    }

    get item() { return this._item; }
    set item(val) {
        if (this._item === val) return;
        this._item = val;
        this.setAttribute('item',this._item);
    }

    get condition() { return this._condition; }
    set condition(val) {
        if (this._condition === val) return;
        this._condition = val;
        this.setAttribute('condition',this._condition);
    }

    get criteria() { return this._criteria; }
    set criteria(val) {
        if (this._criteria === val) return;
        this._criteria = val;
        this.setAttribute('criteria',this._criteria);
    }

    constructor() {
        super();
        let mapData = this.querySelector('script');
        if (mapData) {
            this._map = JSON.parse(mapData.innerHTML);
        }
    }

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['container','item','condition','criteria'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }


}

window.customElements.define(CPXFilter.tag, CPXFilter);