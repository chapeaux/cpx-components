export class CPXUser extends HTMLElement {
  _name = '';
  get name() {
    return this._name;
  }
  set name(val) {
    if (this._name === val) return;
    this._name = val;
    this.setAttribute('name',this._name);
    //top.document.querySelector('cpx-login a').innerText = this._name;
  }

  _email = '';
  get email() { return this._email; }
  set email(val) {
    if (this._email === val) return;
    this._email = val;
    this.setAttribute('email',this._email);
  }

  _token = {};
  get token() { return this._token; }
  set token(val) {
    if (this._token === val) return;
    this._token = val;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    let keycloak = top.document.querySelector('cpx-keycloak');
    if (keycloak && keycloak.ready) {
      this.token = keycloak['token']();
    } else {
      top.addEventListener('token-ready', e => {
        this.token = e['detail'];
        this.updateUser(e['detail']);
      });
    }
    
  }

  static get observedAttributes() {
      return ['url'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
  }

  updateUser(data) {
    console.log(data);
    this.email = data.email;
    this.name = data.name;
  }
}

window.customElements.define('cpx-user',CPXUser);