var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CPXUser = void 0;
    var CPXUser = (function (_super) {
        __extends(CPXUser, _super);
        function CPXUser() {
            var _this = _super.call(this) || this;
            _this._authenticated = false;
            _this._userId = '';
            _this._name = '';
            _this._cookies = {};
            _this._email = '';
            _this._ready = false;
            _this._jwtCookie = '';
            _this._jwtToken = '';
            _this._kcAuto = false;
            return _this;
        }
        Object.defineProperty(CPXUser.prototype, "userId", {
            get: function () { return this._userId; },
            set: function (val) {
                if (this._userId === val)
                    return;
                this._userId = val;
                this.setAttribute('user-id', this._userId);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
                this.setAttribute('name', this._name);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "email", {
            get: function () { return this._email; },
            set: function (val) {
                if (this._email === val)
                    return;
                this._email = val;
                this.setAttribute('email', this._email);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "ready", {
            get: function () { return this._ready; },
            set: function (val) {
                if (this._ready === val)
                    return;
                this._ready = val;
                this.setAttribute('ready', this._ready.toString());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "user", {
            get: function () { return this._user; },
            set: function (val) {
                if (this._user === val)
                    return;
                this._user = val;
                if (typeof this._user.email !== 'undefined')
                    this.email = this._user.email;
                if (typeof this._user.name !== 'undefined')
                    this.name = this._user.name;
                dispatchEvent(new CustomEvent(this.ready ? 'user-update' : 'user-ready', {
                    detail: this,
                    composed: true,
                    bubbles: true
                }));
                this.ready = true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "jwtCookie", {
            get: function () { return this._jwtCookie; },
            set: function (val) {
                if (this._jwtCookie == val)
                    return;
                this._jwtCookie = val;
                this.setAttribute('jwt-Cookie', this._jwtCookie);
                if (this._cookies[this._jwtCookie]) {
                    this.jwtToken = this._cookies[this._jwtCookie];
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "jwtToken", {
            get: function () {
                return this._jwtToken;
            },
            set: function (val) {
                if (this._jwtToken === val)
                    return;
                this._jwtToken = val;
                this.user = jwt_decode(this._jwtToken);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kc", {
            get: function () { return this.validateKCConfig(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcAuto", {
            get: function () { return this._kcAuto; },
            set: function (val) {
                if (typeof val === 'string')
                    val = true;
                if (this._kcAuto === val)
                    return;
                this._kcAuto = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "keycloak", {
            get: function () {
                return this._keycloak;
            },
            set: function (val) {
                if (this._keycloak === val)
                    return;
                this._keycloak = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcUrl", {
            get: function () { return this._kcUrl; },
            set: function (val) {
                if (this._kcUrl === val)
                    return;
                this._kcUrl = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcConfig", {
            get: function () { return this._kcConfig; },
            set: function (val) {
                if (this._kcConfig === val)
                    return;
                this._kcConfig = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcRealm", {
            get: function () { return this._kcRealm; },
            set: function (val) {
                if (this._kcRealm === val)
                    return;
                this._kcRealm = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcClientId", {
            get: function () {
                return this._kcClientId;
            },
            set: function (val) {
                if (this._kcClientId === val)
                    return;
                this._kcClientId = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CPXUser.prototype, "kcToken", {
            get: function () { return this._kcToken; },
            set: function (val) {
                if (this._kcToken === val)
                    return;
                this._kcToken = val;
            },
            enumerable: false,
            configurable: true
        });
        CPXUser.prototype.connectedCallback = function () {
            this._cookies = document.cookie.split(';').reduce(function (a, c) { var kv = c.trim().split('='); a[kv[0]] = kv[1]; return a; }, {});
            console.log('Cookies:', this._cookies);
            var data = this.querySelector('script');
            if (data && data.innerText) {
                this.user = JSON.parse(data.innerText);
            }
        };
        Object.defineProperty(CPXUser, "observedAttributes", {
            get: function () {
                return [
                    'url', 'token', 'name', 'email', 'username', 'user-id',
                    'jwt-cookie', 'jwt-token',
                    'kc-url', 'kc-realm', 'kc-client-id', 'kc-config', 'kc-auto'
                ];
            },
            enumerable: false,
            configurable: true
        });
        CPXUser.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[this.camelCase(name)] = newVal;
            if (this.kc) {
                this.kcInit(this.kcConfig);
            }
        };
        CPXUser.prototype.validateKCConfig = function () {
            return (!this.ready && typeof this.kcUrl !== 'undefined' && typeof this.kcRealm !== 'undefined' && typeof this.kcClientId !== 'undefined') || this.kcConfig;
        };
        CPXUser.prototype.camelCase = function (str, to) {
            if (to === void 0) { to = true; }
            return to ? str.replace(/-([a-z])/g, function (m, g) { return g.toUpperCase(); }) : str.replace(/([a-z][A-Z])/g, function (m, g) { return g[0] + "-" + g[1].toLowerCase(); });
        };
        CPXUser.prototype.kcInit = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(typeof Keycloak !== 'undefined')) return [3, 2];
                            this.keycloak = Keycloak(config ? config : { url: this.kcUrl, realm: this.kcRealm, clientId: this.kcClientId });
                            return [4, this.keycloak.init({}).then(function (authenticated) {
                                    _this._authenticated = authenticated;
                                    if (authenticated) {
                                        _this.user = _this.keycloak.tokenParsed;
                                    }
                                    else {
                                        if (_this.kcAuto) {
                                            _this.login();
                                        }
                                    }
                                })];
                        case 1:
                            _a.sent();
                            return [3, 2];
                        case 2: return [2];
                    }
                });
            });
        };
        CPXUser.prototype.login = function () { return this.keycloak.login(); };
        CPXUser.prototype.logout = function () { return this.keycloak.logout(); };
        CPXUser.prototype.register = function () { return this.keycloak.register(); };
        CPXUser.prototype.account = function () { return this.keycloak.accountManagement(); };
        Object.defineProperty(CPXUser.prototype, "token", {
            get: function () { return this.keycloak.tokenParsed; },
            enumerable: false,
            configurable: true
        });
        return CPXUser;
    }(HTMLElement));
    exports.CPXUser = CPXUser;
    window.customElements.define('cpx-user', CPXUser);
});
