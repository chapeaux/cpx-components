export class CPXUser extends HTMLElement {
    constructor() {
        super();
        this._authenticated = false;
        this._userId = "";
        this._givenname = "";
        this._email = "";
        this._ready = false;
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
        if (this._user === val)
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
        this.ready = true;
    }
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
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[this.camelCase(name)] = newVal;
    }
    camelCase(str, to = true) {
        return to
            ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase())
            : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
    }
}
window.customElements.define("cpx-user", CPXUser);
