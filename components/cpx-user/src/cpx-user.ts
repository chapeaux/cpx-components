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
 * @element cpx-user
 */
export class CPXUser extends HTMLElement {
  _authenticated = false;

  _userId = "";
  get userId() {
    return this._userId;
  }
  set userId(val) {
    if (this._userId === val) return;
    this._userId = val;
    this.setAttribute("user-id", this._userId);
  }

  _name = "";
  get name() {
    return this._name;
  }
  set name(val) {
    if (this._name === val) return;
    this._name = val;
    this.setAttribute("name", this._name);
  }

  _cookies = new Map();

  _email = "";
  get email() {
    return this._email;
  }
  set email(val) {
    if (this._email === val) return;
    this._email = val;
    this.setAttribute("email", this._email);
  }

  _ready = false;
  get ready() {
    return this._ready;
  }
  set ready(val) {
    if (this._ready === val) return;
    this._ready = val;
    this.setAttribute("ready", this._ready.toString());
  }

  _user: any;
  get user() {
    return this._user;
  }
  set user(val) {
    if (this._user === val) return;
    this._user = val;
    if (typeof this._user.email !== "undefined") this.email = this._user.email;
    if (typeof this._user.name !== "undefined") this.name = this._user.name;
    this.dispatchEvent(
      new CustomEvent(this.ready ? "user-update" : "user-ready", {
        detail: this,
        composed: true,
        bubbles: true,
      }),
    );
    this.ready = true;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    let data = this.querySelector("script");
    if (data && data.innerText) {
      this.user = JSON.parse(data.innerText); // should dispatch ready event
    }
  }

  static get observedAttributes() {
    return [
      "name",
      "email",
      "username",
      "user-id",
    ];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this[this.camelCase(name)] = newVal;
    if (this.kc && !this._authenticated) {
      this.kcInit(this.kcConfig);
    }
  }

  validateKCConfig() {
    return (!this.ready && typeof this.kcUrl !== "undefined" &&
      typeof this.kcRealm !== "undefined" &&
      typeof this.kcClientId !== "undefined") || this.kcConfig;
  }

  camelCase(str: String, to: boolean = true) {
    return to
      ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
      : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
  }

  async kcInit(config?: any) {
    if (
      typeof Keycloak !== "undefined" &&
      ((this.kcUrl !== "" && this.kcRealm !== "" && this.kcClientId !== "") ||
        this.kcConfig)
    ) {
      console.log("Config:", config);
      this.keycloak = Keycloak(
        config && config !== ""
          ? JSON.parse(config.replaceAll("'", '"'))
          : { url: this.kcUrl, realm: this.kcRealm, clientId: this.kcClientId },
      );
      await this.keycloak.init(
        this.kcOptions ? JSON.parse(this.kcOptions.replaceAll("'", '"')) : {},
      ).then((authenticated: boolean) => {
        this._authenticated = authenticated;
        if (authenticated) {
          this.user = this.keycloak.tokenParsed;
          document.cookie = `${this.jwtCookie}=${this.keycloak.token}`;
          //let refreshExpiration = this.keycloak.refreshTokenParsed.exp - this.keycloak.refreshTokenParsed.iat
          document.cookie =
            `${this.jwtCookie}_refresh=${this.keycloak.refreshToken}`;
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
  login() {
    return this.keycloak.login();
  }
  logout() {
    return this.keycloak.logout();
  }
  register() {
    return this.keycloak.register();
  }
  account() {
    return this.keycloak.accountManagement();
  }
  get token() {
    return this.keycloak.tokenParsed;
  }
}

window.customElements.define("cpx-user", CPXUser);
