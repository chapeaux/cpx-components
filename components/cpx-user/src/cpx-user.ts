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
    if (this._user === val || typeof val === 'undefined') return;
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
      this.initWorker();
      }
    
    this.ready = true;
  }
  _worker;
  get worker() { return this._worker; }
  
  constructor() {
    super();
    this.onmessage = this.onmessage.bind(this);
  }

  connectedCallback() {
    let data = this.querySelector("script");
    if (data && data.innerText) {
      this.user = JSON.parse(data.innerText); // should dispatch ready event
    }
    this.addEventListener('token-ready',e=>{
      this.user = e['detail'];
    });
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

  onmessage(e) {
    const data = e.data;
    if (data.action) {
      switch (data.action) {
        case 'getCookies':
          if (data.results) {
            Object.assign(this.user,data.results);
          }
          this.dispatchEDDL(); 
        break;
      }
    } 
  }

  async dispatchEDDL() {
    let hashedEmail = '';
    if (typeof this.user['email'] !== 'undefined' && this.user['email'].length && this.user['email'].length > 0) {
      hashedEmail = await this.generateHash(this.user['email']);
    }
    
    this.dispatchEvent(
      new CustomEvent("eddl-user-ready", {
        detail: {
          custKey: this.user['custKey'], // cookie
          ebsAccountNumber: this.user['account_number'] || '',
          // accountIDType: this.user['typ'],
          userID: this.user['userID'], // SSO sets a cookie
          lastLoginDate: this.user['auth_time'],
          loggedIn: parseInt(this.user['loggedIn']) ? "true":"false",
          hashedEmail: hashedEmail
        },
        composed: true,
        bubbles: true,
      })
    );
  }

  async initWorker() {
  if (!this._worker) {
    try {
        this._worker = new Worker(import.meta.url.replace('cpx-user.js','user.js'));
        this.worker['onmessage'] = this.onmessage;
    } catch {
        const {Peasant} = await import(import.meta.url.replace('cpx-user.js','peasant.js'));
        this._worker = new Peasant(this);
    }
  }

  this._worker.postMessage({
    action:'getCookies',
    values: new Map([
      ['rh_common_id', 'custKey'],
      ['rh_user_id', 'userID'],
      ['rh_sso_session','loggedIn']
    ]),
    payload:document.cookie});   
  }
}

window.customElements.define("cpx-user", CPXUser);
