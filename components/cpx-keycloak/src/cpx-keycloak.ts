declare var Keycloak: any;
/**
 * Creates a Keycloak web component
 * 
 * @element cpx-keycloak
 * 
 * @fires token-ready - Keycloak has been initialized and the user is authenticated
 * 
 * @attr {Boolean} ready - Ready state of the Keycloak object
 * @attr {String} url - Keycloak config JSON URL
 * @attr {String} realm - Keycloak Realm
 * 
 * @prop {Keycloak} keycloak - Keycloak object storage
 * 
 */
export class CPXKeycloak extends HTMLElement {
    _keycloak;
    _ready = false;
    _authenticated = false;
    _url: string;
    _config: string;
    _realm: string;
    _clientId: string;
    _links: {logout:'',login:'',register:''};

    get keycloak() {
        return this._keycloak;
    }
    set keycloak(val) {
        if (this._keycloak === val) return;
        this._keycloak = val;
        this.ready = true;
    }
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
    }
    get config() {
        return this._config;
    }
    set config(val) {
        if (this._config === val) return;
        this._config = val;
    }
    get realm() {
        return this._realm;
    }
    set realm(val) {
        if (this._realm === val) return;
        this._realm = val;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(val) {
        if (this._clientId === val) return;
        this._clientId = val;
    }
    get ready() {
        return this._ready;
    }
    set ready(val) {
        if (typeof val === 'string') val = true;
        if (this._ready === val) return;
        this._ready = val;
    }

    get authenticated() {
        return this._authenticated;
    }
    set authenticated(val) {
        if (this._authenticated === val) return;
        this._authenticated = val;
        this.setAttribute("authenticated",this._authenticated.toString());
    }

    constructor() {
      super();
    }

    connectedCallback() {
        
    }

    static get observedAttributes() {
        return ['url', 'realm', 'client-id', 'config'];
    }

    attributeChangedCallback(name:string, oldVal:string, newVal:string) {
        this[this.camelCase(name)] = newVal;
        if (this.validateConfig()) {
            this.init(this.config);
        }
    }

    validateConfig() {
        return (!this.ready && typeof this.url !== 'undefined' && typeof this.realm !== 'undefined' && typeof this.clientId !== 'undefined') || this.config;
    }

    camelCase(str: String, to:boolean=true) {
        return to ? str.replace(/-([a-z])/g, (m,g) => g.toUpperCase()) : str.replace(/([a-z][A-Z])/g, (m,g) => `${g[0]}-${g[1].toLowerCase()}`)
    }

    async init(config?: any) {
        if (typeof Keycloak !== 'undefined') {
            this.keycloak = Keycloak(config ? config : {url: this.url, realm: this.realm, clientId: this.clientId });
            await this.keycloak.init({}).then(authenticated => {
                this.authenticated = authenticated;
                if (authenticated) {
                    dispatchEvent(new CustomEvent('token-ready', {
                        detail: this.token,
                        composed: true,
                        bubbles: true
                    }));
                    this.ready = true;
                    document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLogoutUrl());
                } else {
                    if (this.getAttribute('auto') !== null) {
                        this.login();
                    }
                    document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLoginUrl());
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
  
  window.customElements.define('cpx-keycloak',CPXKeycloak);