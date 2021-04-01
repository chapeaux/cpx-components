//declare var jwt_decode: any;
declare var Keycloak: any;
import {jwt_decode} from 'https://raw.githubusercontent.com/auth0/jwt-decode/master/build/jwt-decode.js';

/*
user-ready
user-update

Data methods
jwt = jwt attribute, parse cookie, populate user object
script tag = parse text, populate user object
keycloak = kc-url, kc-realm, kc-client-id, kc-config ['url', 'realm', 'client-id', 'config'], 
  init KC, 

Contract
Auto-login
user object
  username
  First name
  surname
*/

/**
 * @element cpx-auth
 */
export class CPXAuth extends HTMLElement {
    static get tag() { return 'cpx-auth'; }
  _authenticated = false;

  _userId = '';
  get userId() { return this._userId; }
  set userId(val) {
    if (this._userId === val) return;
    this._userId = val;
    this.setAttribute('user-id', this._userId)
  }

  _name = '';
  get name() {
    return this._name;
  }
  set name(val) {
    if (this._name === val) return;
    this._name = val;
    this.setAttribute('name',this._name);
  }

  _cookies = new Map();
  
  _email = '';
  get email() { return this._email; }
  set email(val) {
    if (this._email === val) return;
    this._email = val;
    this.setAttribute('email',this._email);
  }

  _ready = false;
  get ready() { return this._ready; }
  set ready(val) {
    if (this._ready === val) return;
    this._ready = val;
    this.setAttribute('ready', this._ready.toString());
  }

  _user:any;
  get user() { return this._user; }
  set user(val) { 
    if (this._user === val) return;
    this._user = val;
    if (typeof this._user.email !== 'undefined') this.email = this._user.email;
    if (typeof this._user.name !== 'undefined') this.name = this._user.name;
    dispatchEvent(new CustomEvent(this.ready ? 'user-update':'user-ready', {
      detail: this,
      composed: true,
      bubbles: true
    }));
    this.ready = true;
  }

  // JWT
  _jwtCookie = '';
  get jwtCookie() { return this._jwtCookie; }
  set jwtCookie(val) { 
    if (this._jwtCookie == val) return;
    this._jwtCookie = val;
    this.setAttribute('jwt-Cookie', this._jwtCookie);
    if(this._cookies.has(this._jwtCookie)) {
      this.jwtToken = this._cookies.get(this._jwtCookie);
    }
  }

  _jwtToken = '';
  get jwtToken() {
    return this._jwtToken;
  }
  set jwtToken(val) {
    if (this._jwtToken === val) return;
    this._jwtToken = val;
    this.user = jwt_decode(this._jwtToken);
  }
  // END JWT

  // Keycloak
  get kc() { return this.validateKCConfig() }
  _kcAuto = false;
  get kcAuto() { return this._kcAuto; }
  set kcAuto(val) { 
    if (typeof val === 'string') val = true;
    if (this._kcAuto === val) return;
    this._kcAuto = val;
  }
  _keycloak:any;
  get keycloak() {
    return this._keycloak;
  }
  set keycloak(val) {
      if (this._keycloak === val) return;
      this._keycloak = val;
  }

  _kcUrl = '';
  get kcUrl() { return this._kcUrl; }
  set kcUrl(val) {
      if (this._kcUrl === val) return;
      this._kcUrl = val;
  }

  _kcConfig = '';
  get kcConfig() { return this._kcConfig; }
  set kcConfig(val) {
      if (this._kcConfig === val) return;
      this._kcConfig = val;
  }

  _kcOptions = '';
  get kcOptions() { return this._kcOptions; }
  set kcOptions(val) {
    if (this._kcOptions === val) return;
    this._kcOptions = val;
  }

  _kcRealm = '';
  get kcRealm() { return this._kcRealm; }
  set kcRealm(val) {
      if (this._kcRealm === val) return;
      this._kcRealm = val;
  }

  _kcClientId = '';
  get kcClientId() {
      return this._kcClientId;
  }
  set kcClientId(val) {
      if (this._kcClientId === val) return;
      this._kcClientId = val;
  }

  _kcToken = '';
  get kcToken() { return this._kcToken; }
  set kcToken(val) { 
    if (this._kcToken === val) return;
    this._kcToken = val;
  }
  // END Keycloak

  constructor() {
    super();
  }

  connectedCallback() {
    document.cookie.split(';').reduce((a,c) => { let kv = c.trim().split('='); a.set(kv[0],kv[1]); return a; },this._cookies);
    let data = this.querySelector('script');
    if (data && data.innerText) {
      this.user = JSON.parse(data.innerText); // should dispatch ready event
    }
  }

  static get observedAttributes() {
      return [
        'url','token','name','email','username', 'user-id',
        'jwt-cookie', 'jwt-token',
        'kc-url', 'kc-realm', 'kc-client-id', 'kc-config', 'kc-auto',
        'kc-options'
      ];
  }

  attributeChangedCallback(name:string, oldVal:string, newVal:string) {
    this[this.camelCase(name)] = newVal;
    if (this.kc && !this._authenticated) {
        this.kcInit(this.kcConfig);
    }
  }

  validateKCConfig() {
      return (!this.ready && typeof this.kcUrl !== 'undefined' && typeof this.kcRealm !== 'undefined' && typeof this.kcClientId !== 'undefined') || this.kcConfig;
  }

  camelCase(str: String, to:boolean=true) {
      return to ? str.replace(/-([a-z])/g, (m,g) => g.toUpperCase()) : str.replace(/([a-z][A-Z])/g, (m,g) => `${g[0]}-${g[1].toLowerCase()}`)
  }

  async kcInit(config?: any) {
      if (typeof Keycloak !== 'undefined' && ((this.kcUrl !== '' && this.kcRealm !== '' && this.kcClientId !== '') || this.kcConfig)) {
        console.log('Config:',config);
          this.keycloak = Keycloak(config && config !=='' ? JSON.parse(config.replaceAll("'",'"')) : {url: this.kcUrl, realm: this.kcRealm, clientId: this.kcClientId });
          await this.keycloak.init(this.kcOptions ? JSON.parse(this.kcOptions.replaceAll("'",'"')):{}).then( (authenticated:boolean) => {
              this._authenticated = authenticated;
              if (authenticated) {
                  this.user = this.keycloak.tokenParsed;
                  document.cookie = `${this.jwtCookie}=${this.keycloak.token}`;
                  //let refreshExpiration = this.keycloak.refreshTokenParsed.exp - this.keycloak.refreshTokenParsed.iat
                  document.cookie = `${this.jwtCookie}_refresh=${this.keycloak.refreshToken}`;
                  // dispatchEvent(new CustomEvent('token-ready', {
                  //     detail: this.token,
                  //     composed: true,
                  //     bubbles: true
                  // }));
                  // this.ready = true;
                  //document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLogoutUrl());
              } else {
                  if (this.kcAuto && !this.ready) {
                      this.login();
                  }
                  //document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLoginUrl());
              }
          });
      } else {
          // Keycloak is not available
      }
  }
  login() { return  this.keycloak.login(); }
  logout() { return this.keycloak.logout(); }
  register() { return this.keycloak.register(); }
  account() { return this.keycloak.accountManagement(); }
  get token() { return this.keycloak.tokenParsed; }
  
}

window.customElements.define(CPXAuth.tag, CPXAuth);