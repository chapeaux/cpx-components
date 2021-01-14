import {jwt_decode} from 'jwt-decode';

export class CPXUser extends HTMLElement {
  _name = '';
  get name() {
    return this._name;
  }
  set name(val) {
    if (this._name === val) return;
    this._name = val;
    this.setAttribute('name',this._name);
  }

  _token = '';
  get token() {
    return this._token;
  }
  set token(val) {
    if (this._token === val) return;
    this._token = val;
    this.updateUser(jwt_decode(this._token))
  }

  _cookie = '';
  get cookie() { return this._cookie; }
  set cookie() { 
    if (this._cookie == val) return;
    this._cookie = val;
    this.setAttribute('cookie', this._cookie);
    document.cookie.get(this._cookie).then(data => this.updateUser(data));
  }

  _email = '';
  get email() { return this._email; }
  set email(val) {
    if (this._email === val) return;
    this._email = val;
    this.setAttribute('email',this._email);
  }

  constructor() {
    super();
  }

  connectedCallback() {
    let data = this.querySelector('script');
    if (data && data.innerText) {
      this.updateUser(data.innerText);
    }
    let keycloak = top.document.querySelector('cpx-keycloak');
    if (keycloak && keycloak.ready) {
      this.token = keycloak['token'];
    } else {
      top.addEventListener('token-ready', e => {
        this.token = e['detail'];
        this.updateUser(e['detail']);
      });
    }
    
  }

  static get observedAttributes() {
      return ['url','token','name','email','username'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
      this[name] = newVal;
  }

  updateUser(data) {
    if (typeof data.email !== 'undefined') this.email = data.email;
    if (typeof data.name !== 'undefined') this.name = data.name;
  }
}

window.customElements.define('cpx-user',CPXUser);