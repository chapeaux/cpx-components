import jwt_decode from 'jwt-decode';

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

  _jwtcookie = '';
  get jwtcookie() { return this._jwtcookie; }
  set jwtcookie(val) { 
    if (this._jwtcookie == val) return;
    this._jwtcookie = val;
    this.setAttribute('jwtcookie', this._jwtcookie);
    this.updateUser(this._cookies[this._cookie]);
  }

  _cookies = {};
  
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
    this._cookies = document.cookie.split(';').reduce((a,c) => { let kv = c.trim().split('='); a[kv[0]]=kv[1]; return a; },{});
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