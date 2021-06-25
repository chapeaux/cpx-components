class CPXFilter1 extends HTMLElement {
    static get tag() {
        return 'cpx-filter';
    }
    _map = [];
    _container;
    _containerQuery = '';
    _item = '';
    _condition = 'contains';
    _criteria = '';
    get container() {
        return this._container;
    }
    set container(val) {
        if (this._container === document.querySelector(val)) return;
        this._container = document.querySelector(val);
        this.setAttribute('container', val);
        this.filter();
    }
    get item() {
        return this._item;
    }
    set item(val) {
        if (this._item === val) return;
        this._item = val;
        this.setAttribute('item', this._item);
        this.filter();
    }
    get condition() {
        return this._condition;
    }
    set condition(val) {
        if (this._condition === val) return;
        this._condition = val;
        this.setAttribute('condition', this._condition);
        this.filter();
    }
    get criteria() {
        return this._criteria;
    }
    set criteria(val) {
        if (this._criteria === val) return;
        this._criteria = val;
        this.setAttribute('criteria', this._criteria);
        this.filter();
    }
    constructor(){
        super();
        let mapData = this.querySelector('script');
        if (mapData) {
            this._map = JSON.parse(mapData.innerHTML);
        }
    }
    connectedCallback() {
        this.filter();
    }
    static get observedAttributes() {
        return [
            'container',
            'item',
            'condition',
            'criteria'
        ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }
    filter() {
        if (this.criteria.length > 0 && this.container.length) {
            document.querySelectorAll(`${this.container} ${this.item}`).forEach((n)=>{
                if (n.innerHTML.indexOf(this.criteria)) {
                    n.setAttribute('style', 'display:auto');
                } else {
                    n.setAttribute('style', 'display:none');
                }
            });
        }
    }
}
window.customElements.define(CPXFilter1.tag, CPXFilter1);
export { CPXFilter1 as CPXFilter };
