declare var Keycloak: any;
/**
 * Creates a Keycloak web component heavily mapping to the
 * Keycloak <a href="https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter">API and functionality</a>
 *
 * @element cpx-keycloak
 *
 * @fires token-ready - Keycloak has been initialized and the user is authenticated
 *
 * @attr {Boolean} ready - Ready state of the Keycloak object
 * @attr {String} url - Keycloak config JSON URL (e.g. - https://sso.redhat.com/auth)
 * @attr {String} realm - Keycloak Realm
 *
 * @prop {Keycloak} keycloak - Keycloak object storage
 */
export class CPXKeycloak extends HTMLElement {
  
  _cookies = new Map();
  _links: { logout: ""; login: ""; register: "" };
  
  _keycloak;
  get keycloak() {
    return this._keycloak;
  }
  set keycloak(val) {
    if (this._keycloak === val) return;
    this._keycloak = val;
    this.ready = true;
  }

  _url: string;
  get url() {
    return this._url;
  }
  set url(val) {
    if (this._url === val) return;
    this._url = val;
  }
  
  _config: string;
  get config() {
    return this._config;
  }
  set config(val) {
    if (this._config === val) return;
    this._config = val;
  }
  _options: string;
  get options() {
    return this._options;
  }
  set options(val) {
    if (this._options === val) return;
    this._options = val;
  }
  _realm: string;
  get realm() {
    return this._realm;
  }
  set realm(val) {
    if (this._realm === val) return;
    this._realm = val;
  }

  _clientId: string;
  get clientId() {
    return this._clientId;
  }
  set clientId(val) {
    if (this._clientId === val) return;
    this._clientId = val;
  }
  
  _authenticated = false;
  get authenticated() {
    return this._authenticated;
  }
  set authenticated(val) {
    if (this._authenticated === val) return;
    this._authenticated = val;
    this.setAttribute("authenticated", this._authenticated.toString());
  }

  _ready = false;
  get ready() {
    return this._ready;
  }
  set ready(val) {
    if (typeof val === "string") val = true;
    if (this._ready === val) return;
    this._ready = val;
  }

  // JWT
  _jwtCookie = "";
  get jwtCookie() {
    return this._jwtCookie;
  }
  set jwtCookie(val) {
    if (this._jwtCookie == val) return;
    this._jwtCookie = val;
    this.setAttribute("jwt-Cookie", this._jwtCookie);
    if (this._cookies.has(this._jwtCookie)) {
      let jwtVal = this._cookies.get(this._jwtCookie);
      if (typeof jwtVal !== "undefined") {
        this.jwtToken = this._cookies.get(this._jwtCookie);
      }
    }
  }

  _jwtToken = "";
  get jwtToken() {
    return this._jwtToken;
  }
  set jwtToken(val) {
    if (this._jwtToken === val) return;
    this._jwtToken = val;
    if (typeof this._jwtToken !== "undefined") {
      //this.user = this.keycloak.tokenParsed; //jwt_decode(this._jwtToken);
    }
  }
  // END JWT

  _loginElement;
  get loginElement() {
    return this._loginElement;
  }
  set loginElement(val) {
    if (this._loginElement === val) return;
    this._loginElement = val;
  }
  _loginAttr;
  get loginAttr() {
    return this._loginAttr;
  }
  set loginAttr(val) {
    if (this._loginAttr === val) return;
    this._loginAttr = val;
  }

  _logoutElement;
  get logoutElement() {
    return this._logoutElement;
  }
  set logoutElement(val) {
    if (this._logoutElement === val) return;
    this._logoutElement = val;
  }
  _logoutAttr;
  get logoutAttr() {
    return this._logoutAttr;
  }
  set logoutAttr(val) {
    if (this._logoutAttr === val) return;
    this._logoutAttr = val;
  }
  
  onReady = (a) => {};
  onAuthSuccess = () => {};
  onAuthError = () => {};
  onAuthRefreshSuccess = () => {};
  onAuthRefreshError = () => {};
  onAuthLogout = () => {};
  onTokenExpired = () => {};

  constructor() {
    super();
  }

  connectedCallback() {
    document.cookie.split(";").reduce((a, c) => {
      let kv = c.trim().split("=");
      a.set(kv[0], kv[1]);
      return a;
    }, this._cookies);
  }

  static get observedAttributes() {
    return [
      "url",
      "realm",
      "client-id",
      "config",
      "config-url",
      "options",
      "options-url",
      "jwt-cookie",
      "jwt-token",
      // "login-element",
      // "login-attr",
      // "logout-element",
      // "logout-attr",
    ];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this[this.camelCase(name)] = newVal;
    if (!this.ready && this.validateConfig()) {
      this.ready = true;
      this.init(this.config);
    }
  }

  validateConfig() {
    return (!this.ready && typeof this.url !== "undefined" &&
      typeof this.realm !== "undefined" &&
      typeof this.clientId !== "undefined") || this.config;
  }

  camelCase(str: String, to: boolean = true) {
    return to
      ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
      : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
  }

  init(config?: any) {
    if (typeof Keycloak !== "undefined") {
      //console.log("Config:", JSON.parse(config.replaceAll("'", '"')));
      this.keycloak = Keycloak(
        config
          ? JSON.parse(config.replaceAll("'", '"'))
          : { url: this.url, realm: this.realm, clientId: this.clientId },
      );
      
      this.keycloak.onReady = this.onReady;
      this.keycloak.onAuthSuccess = this.onAuthSuccess;
      this.keycloak.onAuthError = this.onAuthError;
      this.keycloak.onAuthRefreshSuccess = this.onAuthRefreshSuccess;
      this.keycloak.onAuthRefreshError = this.onAuthRefreshError;
      this.keycloak.onAuthLogout = this.onAuthLogout;
      this.keycloak.onTokenExpired = this.onTokenExpired;

      this.keycloak.init(this.options && this.options != "" ? JSON.parse(this.options.replaceAll("'",'"')) : {})
        .then(authenticated => {
          this.dispatchEvent(new Event('kc-init-success',{composed:true,bubbles:true}));
          this.authenticated = authenticated;
          if (authenticated) {
            if (this.jwtCookie != "") {
              document.cookie = `${this.jwtCookie}=${this.keycloak.token}`;
              //let refreshExpiration = this.keycloak.refreshTokenParsed.exp - this.keycloak.refreshTokenParsed.iat
              document.cookie = `${this.jwtCookie}_refresh=${this.keycloak.refreshToken}`;
            }
            this.dispatchEvent(
              new CustomEvent("kc-token-ready", {
                detail: {
                  token: this.keycloak.tokenParsed,
                },
                composed: true,
                bubbles: true,
              }),
            );
            if (this.logoutElement && this.logoutAttr) {
              const logoutElement = top.document.querySelector(
                this.logoutElement,
              );
              logoutElement.setAttribute(
                this.logoutAttr,
                this.keycloak.createLogoutUrl(),
              );
              logoutElement.userData = Object.assign(
                // {
                //   username: ' ',
                //   firstName: ' ',
                //   lastName: ' ',
                //   REDHAT_LOGIN: ' '
                // }
                {
                  realm_access: {
                    roles: this.keycloak.tokenParsed[""] || " ",
                  },
                  REDHAT_LOGIN: this.keycloak.tokenParsed["preferred_username"] ||
                    " ",
                  lastName: this.keycloak.tokenParsed["family_name"] || " ",
                  account_number: this.keycloak.tokenParsed["iat"].toString() ||
                    "", //Pretty sure this isn't right...
                  preferred_username:
                    this.keycloak.tokenParsed["preferred_username"] || " ",
                  firstName: this.keycloak.tokenParsed["given_name"] || " ",
                  email: this.keycloak.tokenParsed["email"] || " ",
                  username: this.keycloak.tokenParsed["preferred_username"] ||
                    " ",
                },
                this.keycloak.tokenParsed,
              );
            }
          } else {
            if (this.getAttribute("auto") !== null) {
              this.login();
            }
            if (this.loginElement && this.loginAttr) {
              top.document.querySelector(this.loginElement).setAttribute(
                this.loginAttr,
                this.keycloak.createLoginUrl(),
              );
            }
          }
          this.ready = true;
      }).catch(() => {
        this.dispatchEvent(new Event('kc-init-failure',{composed:true,bubbles:true}));
      });
    } else {
      
      // Keycloak is not available
    }
  }
  login() {
    return this.keycloak.login();
  }
  logout() {
    // TODO: Add custom cookie handling to remove on logout
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
  get loginUrl() {
    return this.keycloak.createLoginUrl();
  }
  get logoutUrl() {
    return this.keycloak.createLogoutUrl();
  }
}

window.customElements.define("cpx-keycloak", CPXKeycloak);
