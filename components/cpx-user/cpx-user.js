var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CPXUser extends HTMLElement {
    constructor() {
        super();
        this._authenticated = false;
        this._userId = "";
        this._givenname = "";
        this._email = "";
        this._eddl = false;
        this._ready = false;
        this.onmessage = this.onmessage.bind(this);
    }
    get userId() {
        return this._userId;
    }
    set userId(val) {
        if (this._userId === val)
            return;
        this._userId = val;
        this.setAttribute("user-id", this._userId);
    }
    get givenname() {
        return this._givenname;
    }
    set givenname(val) {
        if (this._givenname === val)
            return;
        this._givenname = val;
        this.setAttribute("givenname", this._givenname);
    }
    get email() {
        return this._email;
    }
    set email(val) {
        if (this._email === val)
            return;
        this._email = val;
        this.setAttribute("email", this._email);
    }
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
        }
        else {
            this._eddl = val;
            if (this._eddl) {
                this.setAttribute("eddl", "");
            }
            else {
                this.removeAttribute("eddl");
            }
        }
    }
    get ready() {
        return this._ready;
    }
    set ready(val) {
        if (this._ready === val)
            return;
        this._ready = val;
        this.setAttribute("ready", this._ready.toString());
    }
    get user() {
        return this._user;
    }
    set user(val) {
        if (this._user === val || typeof val === 'undefined')
            return;
        this._user = val;
        if (typeof this._user.email !== "undefined")
            this.email = this._user.email;
        if (typeof this._user.name !== "undefined")
            this.givenname = this._user.givenname;
        this.dispatchEvent(new CustomEvent(this.ready ? "user-update" : "user-ready", {
            detail: this,
            composed: true,
            bubbles: true,
        }));
        if (this.eddl) {
            this.initWorker();
        }
        this.ready = true;
    }
    get worker() { return this._worker; }
    connectedCallback() {
        let data = this.querySelector("script");
        if (data && data.innerText) {
            this.user = JSON.parse(data.innerText);
        }
        this.addEventListener('token-ready', e => {
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
    attributeChangedCallback(name, oldVal, newVal) {
        this[this.camelCase(name)] = newVal;
    }
    generateHash(txt) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoder = new TextEncoder();
            const hash = yield crypto.subtle.digest('SHA-256', encoder.encode(txt));
            const hashArray = Array.from(new Uint8Array(hash));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            return hashHex;
        });
    }
    camelCase(str, to = true) {
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
                        Object.assign(this.user, data.results);
                    }
                    this.dispatchEDDL();
                    break;
            }
        }
    }
    dispatchEDDL() {
        return __awaiter(this, void 0, void 0, function* () {
            let hashedEmail = '';
            if (typeof this.user['email'] !== 'undefined' && this.user['email'].length && this.user['email'].length > 0) {
                hashedEmail = yield this.generateHash(this.user['email']);
            }
            this.dispatchEvent(new CustomEvent("eddl-user-ready", {
                detail: {
                    custKey: this.user['custKey'],
                    ebsAccountNumber: this.user['account_number'] || '',
                    userID: this.user['userID'],
                    lastLoginDate: this.user['auth_time'] ? (new Date(this.user['auth_time'] * 1000)).toISOString() : '',
                    loggedIn: parseInt(this.user['loggedIn']) ? "true" : "false",
                    hashedEmail: hashedEmail
                },
                composed: true,
                bubbles: true,
            }));
        });
    }
    initWorker() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._worker) {
                try {
                    this._worker = new Worker(import.meta.url.replace('cpx-user.js', 'user.js'));
                    this.worker['onmessage'] = this.onmessage;
                }
                catch (_a) {
                    const { Peasant } = yield import(import.meta.url.replace('cpx-user.js', 'peasant.js'));
                    this._worker = new Peasant(this);
                }
            }
            this._worker.postMessage({
                action: 'getCookies',
                values: new Map([
                    ['rh_common_id', 'custKey'],
                    ['rh_user_id', 'userID'],
                    ['rh_sso_session', 'loggedIn']
                ]),
                payload: document.cookie
            });
        });
    }
}
window.customElements.define("cpx-user", CPXUser);
