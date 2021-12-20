"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPXKeycloak = void 0;
class CPXKeycloak extends HTMLElement {
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
        Object.defineProperty(this, "_options", {
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
        Object.defineProperty(this, "_cookies", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "_jwtCookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_jwtToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_loginElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_loginAttr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_logoutElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_logoutAttr", {
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
    get options() {
        return this._options;
    }
    set options(val) {
        if (this._options === val)
            return;
        this._options = val;
    }
    get jwtCookie() {
        return this._jwtCookie;
    }
    set jwtCookie(val) {
        if (this._jwtCookie == val)
            return;
        this._jwtCookie = val;
        this.setAttribute("jwt-Cookie", this._jwtCookie);
        if (this._cookies.has(this._jwtCookie)) {
            let jwtVal = this._cookies.get(this._jwtCookie);
            if (typeof jwtVal !== "undefined") {
                this.jwtToken = this._cookies.get(this._jwtCookie);
            }
        }
    }
    get jwtToken() {
        return this._jwtToken;
    }
    set jwtToken(val) {
        if (this._jwtToken === val)
            return;
        this._jwtToken = val;
        if (typeof this._jwtToken !== "undefined") {
        }
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
    get loginElement() {
        return this._loginElement;
    }
    set loginElement(val) {
        if (this._loginElement === val)
            return;
        this._loginElement = val;
    }
    get loginAttr() {
        return this._loginAttr;
    }
    set loginAttr(val) {
        if (this._loginAttr === val)
            return;
        this._loginAttr = val;
    }
    get logoutElement() {
        return this._logoutElement;
    }
    set logoutElement(val) {
        if (this._logoutElement === val)
            return;
        this._logoutElement = val;
    }
    get logoutAttr() {
        return this._logoutAttr;
    }
    set logoutAttr(val) {
        if (this._logoutAttr === val)
            return;
        this._logoutAttr = val;
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
        ];
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
                console.log("Config:", JSON.parse(config.replaceAll("'", '"')));
                this.keycloak = Keycloak(config
                    ? JSON.parse(config.replaceAll("'", '"'))
                    : { url: this.url, realm: this.realm, clientId: this.clientId });
                console.log("Options", JSON.parse(this.options.replaceAll("'", '"')));
                yield this.keycloak.init(this.options != "" ? JSON.parse(this.options.replaceAll("'", '"')) : {}).then((authenticated) => {
                    this.authenticated = authenticated;
                    if (authenticated) {
                        if (this.jwtCookie != "") {
                            document.cookie = `${this.jwtCookie}=${this.keycloak.token}`;
                            document.cookie = `${this.jwtCookie}_refresh=${this.keycloak.refreshToken}`;
                        }
                        this.dispatchEvent(new CustomEvent("token-ready", {
                            detail: {
                                token: this.keycloak.tokenParsed,
                            },
                            composed: true,
                            bubbles: true,
                        }));
                        if (this.logoutElement && this.logoutAttr) {
                            const logoutElement = top.document.querySelector(this.logoutElement);
                            logoutElement.setAttribute(this.logoutAttr, this.keycloak.createLogoutUrl());
                            logoutElement.userData = Object.assign({
                                realm_access: {
                                    roles: this.keycloak.tokenParsed[""] || " ",
                                },
                                REDHAT_LOGIN: this.keycloak.tokenParsed["preferred_username"] ||
                                    " ",
                                lastName: this.keycloak.tokenParsed["family_name"] || " ",
                                account_number: this.keycloak.tokenParsed["iat"].toString() ||
                                    "",
                                preferred_username: this.keycloak.tokenParsed["preferred_username"] || " ",
                                firstName: this.keycloak.tokenParsed["given_name"] || " ",
                                email: this.keycloak.tokenParsed["email"] || " ",
                                username: this.keycloak.tokenParsed["preferred_username"] ||
                                    " ",
                            }, this.keycloak.tokenParsed);
                        }
                        this.ready = true;
                    }
                    else {
                        if (this.getAttribute("auto") !== null) {
                            this.login();
                        }
                        if (this.loginElement && this.loginAttr) {
                            top.document.querySelector(this.loginElement).setAttribute(this.loginAttr, this.keycloak.createLoginUrl());
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
    get loginUrl() {
        return this.keycloak.createLoginUrl();
    }
    get logoutUrl() {
        return this.keycloak.createLogoutUrl();
    }
}
exports.CPXKeycloak = CPXKeycloak;
window.customElements.define("cpx-keycloak", CPXKeycloak);
