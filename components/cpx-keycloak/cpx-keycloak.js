var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CPXKeycloak extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "_keycloak", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_ready", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_authenticated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_realm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_clientId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_links", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    get keycloak() {
        return this._keycloak;
    }
    set keycloak(val) {
        if (this._keycloak === val)
            return;
        this._keycloak = val;
        this.ready = true;
    }
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val)
            return;
        this._url = val;
    }
    get config() {
        return this._config;
    }
    set config(val) {
        if (this._config === val)
            return;
        this._config = val;
    }
    get realm() {
        return this._realm;
    }
    set realm(val) {
        if (this._realm === val)
            return;
        this._realm = val;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(val) {
        if (this._clientId === val)
            return;
        this._clientId = val;
    }
    get ready() {
        return this._ready;
    }
    set ready(val) {
        if (typeof val === "string")
            val = true;
        if (this._ready === val)
            return;
        this._ready = val;
    }
    get authenticated() {
        return this._authenticated;
    }
    set authenticated(val) {
        if (this._authenticated === val)
            return;
        this._authenticated = val;
        this.setAttribute("authenticated", this._authenticated.toString());
    }
    connectedCallback() {
    }
    static get observedAttributes() {
        return ["url", "realm", "client-id", "config"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[this.camelCase(name)] = newVal;
        if (this.validateConfig()) {
            this.init(this.config);
        }
    }
    validateConfig() {
        return (!this.ready && typeof this.url !== "undefined" &&
            typeof this.realm !== "undefined" &&
            typeof this.clientId !== "undefined") || this.config;
    }
    camelCase(str, to = true) {
        return to
            ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
            : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
    }
    init(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof Keycloak !== "undefined") {
                this.keycloak = Keycloak(config
                    ? config
                    : { url: this.url, realm: this.realm, clientId: this.clientId });
                yield this.keycloak.init({}).then((authenticated) => {
                    this.authenticated = authenticated;
                    if (authenticated) {
                        dispatchEvent(new CustomEvent("token-ready", {
                            detail: this.token,
                            composed: true,
                            bubbles: true,
                        }));
                        this.ready = true;
                    }
                    else {
                        if (this.getAttribute("auto") !== null) {
                            this.login();
                        }
                    }
                });
            }
            else {
            }
        });
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
window.customElements.define("cpx-keycloak", CPXKeycloak);
