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

  _eddl = false;
  get eddl() {
    return this._eddl;
  }
  set eddl(val) {
    if (typeof val === "string") {
      val = true;
    }
    if (val === null) {
      val = false;
    }
    if (this._eddl === val) {
      return;
    } else {
      this._eddl = val;
      if (this._eddl) {
        this.setAttribute("eddl", "");
      } else {
        this.removeAttribute("eddl");
      }
    }
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

    if (this.eddl) { 
      this._worker.postMessage({
        action:'getCookies',
        values: new Map([
          ['rh_common_id', 'custKey'],
          ['rh_user_id', 'userID'],
          ['rh_sso_session','loggedIn']
        ]),
        payload:document.cookie});
        this.dispatchEDDL(); 
      }
    
    this.ready = true;
  }
  _worker;
  constructor() {
    super();
    
    this._worker = new Worker(new URL(import.meta.url).pathname.replace('cpx-user.js','user.js'));
    this.onMessage = this.onMessage.bind(this);
  }

  connectedCallback() {
    let data = this.querySelector("script");
    if (data && data.innerText) {
      this.user = JSON.parse(data.innerText); // should dispatch ready event
    }
    this.addEventListener('token-ready',e=>{
      this.user = e['detail'];
    });
    this._worker.onmessage = this.onMessage;
  }

  static get observedAttributes() {
    return [
      "givenname",
      "surname",
      "email",
      "username",
      "user-id",
      "eddl"
    ];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this[this.camelCase(name)] = newVal;
  }

  async generateHash(txt) {
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const encoder = new TextEncoder();
    const hash = await crypto.subtle.digest('SHA-256', encoder.encode(txt));
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
    return hashHex;
  }

  camelCase(str: String, to: boolean = true) {
    return to
      ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
      : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
  }

  onMessage(e) {
    const data = e.data;
    if (data.action) {
      switch (data.action) {
        case 'getCookies':
          if (data.results) {
            Object.assign(this.user,data.results);
          }
        break;
      }
    } 
  }

  async dispatchEDDL() {
    const hashedEmail = await this.generateHash(this.user['email']);
    

    
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

         ['rh_common_id', 'custKey'],
          ['rh_user_id', 'userID'],
          ['rh_sso_session','loggedIn']
        */
        detail: {
          custKey: this.user['custKey'], // cookie
          accountID: this.user['account_number'] || '',
          // accountIDType: this.user['typ'],
          userID: this.user['userID'], // SSO sets a cookie
          lastLoginDate: this.user['auth_time'],
          loggedIn: this.user['loggedIn'] ? "true":"false",
          hashedEmail: hashedEmail
        },
        composed: true,
        bubbles: true,
      })
    );
  }
}

window.customElements.define("cpx-user", CPXUser);
