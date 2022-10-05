export class CPXFilter extends HTMLElement {
  static get tag() {
    return "cpx-filter";
  }
  _map = [];
  _container: Element;
  _containerQuery = "";
  _item = "";
  _condition = "contains";
  _criteria = "";

  get container() {
    return this._container;
  }
  set container(val) {
    if (this._container === val) return;
      this._container = val;
      this.filter();
  }

  get item() {
    return this._item;
  }
  set item(val) {
    if (this._item === val) return;
    this._item = val;
    this.setAttribute("item", this._item);
    this.filter();
  }

  get condition() {
    return this._condition;
  }
  set condition(val) {
    if (this._condition === val) return;
    this._condition = val;
    this.setAttribute("condition", this._condition);
    this.filter();
  }

  get criteria() {
    return this._criteria;
  }
  set criteria(val) {
    if (this._criteria === val) return;
    this._criteria = val;
    this.setAttribute("criteria", this._criteria);
    this.filter();
  }

  constructor() {
    super();
    let mapData = this.querySelector("script");
    if (mapData) {
      this._map = JSON.parse(mapData.innerHTML);
    }
  }

  connectedCallback() {
    this.filter();
  }

  static get observedAttributes() {
    return ["container", "item", "condition", "criteria"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if(attr === 'container') {
      this.container = document.querySelector(newVal);
    } else {
      this[attr] = newVal;
    }
  }

  filter() {
    if (this.criteria.length > 0 && this.container) {
      this.container.querySelectorAll(`${this.item}`).forEach(
        (n) => {
          if (n.textContent.toLowerCase().indexOf(this.criteria.toLowerCase()) >= 0) {
            n.setAttribute("style", "display:auto");
          } else {
            n.setAttribute("style", "display:none");
          }
        },
      );
    }
  }
}

window.customElements.define(CPXFilter.tag, CPXFilter);
