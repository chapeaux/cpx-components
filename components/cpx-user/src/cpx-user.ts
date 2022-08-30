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

  _givenname = "";
  get givenname() {
    return this._givenname;
  }
  set givenname(val) {
    if (this._givenname === val) return;
    this._givenname = val;
    this.setAttribute("givenname", this._givenname);
  }

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
    if (typeof this._user.name !== "undefined") this.givenname = this._user.givenname;
    this.dispatchEvent(
      new CustomEvent(this.ready ? "user-update" : "user-ready", {
        detail: this,
        composed: true,
        bubbles: true,
      })
    );
    this.dispatchEvent(
      new CustomEvent("eddl-user-ready", {
        /*
        allowed-origins: Array(1)
        0: "*"
        length: 1
        [[Prototype]]: Array(0)
        aud: "rhd-web"
        auth_time: 1661792228
        azp: "rhd-web"
        email: "ldary+stage@redhat.com"
        exp: 1661793129
        family_name: "Dary"
        given_name: "Luke"
        iat: 1661792229
        id: "f:ac4bcdb5-1fb1-41c5-9323-349698b9b757:ldary@redhat.com"
        iss: "https://sso.stage.redhat.com/auth/realms/redhat-external"
        jti: "39990d69-983e-4d4c-bb53-3fed9bf9b9b7"
        name: "Luke Dary"
        nonce: "0a0c7821-8ebb-4bcd-8d95-05e64af12452"
        preferred_username: "ldary@redhat.com"
        realm_access:
        roles: Array(9)
        0: "authenticated"
        1: "portal_manage_subscriptions"
        2: "offline_access"
        3: "admin:org:all"
        4: "uma_authorization"
        5: "portal_manage_cases"
        6: "portal_system_management"
        7: "portal_download"
        8: "rhd_access_middleware"
        length: 9
        [[Prototype]]: Array(0)
        [[Prototype]]: Object
        resource_access:
        account: {roles: Array(3)}
        rhd-dm: {roles: Array(1)}
        [[Prototype]]: Object
        scope: "openid"
        session_state: "0dcba173-f4ac-4b57-96f0-ab5b5dfde7a9"
        sid: "0dcba173-f4ac-4b57-96f0-ab5b5dfde7a9"
        sub: "f:ac4bcdb5-1fb1-41c5-9323-349698b9b757:ldary@redhat.com"
        typ: "Bearer"
        user-social-links:
        [[Prototype]]: Object
        */
        detail: {
         custKey: this.user['sid'],
         accountID: this.user['id'],
         accountIDType: this.user['typ']
        },
        composed: true,
        bubbles: true,
      })
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
    this.addEventListener('token-ready',e=>{
      this.user = e['detail'];
    })
  }

  static get observedAttributes() {
    return [
      "givenname",
      "surname",
      "email",
      "username",
      "user-id",
    ];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this[this.camelCase(name)] = newVal;
  }

  camelCase(str: String, to: boolean = true) {
    return to
      ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
      : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
  }
}

window.customElements.define("cpx-user", CPXUser);
