// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
var System, __instantiate;
(function () {
  // deno-fmt-ignore
  var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  // deno-fmt-ignore
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
  var r = Object.create(null);
  System = {
    register: function (id, d, f) {
      r[id] = { d: d, f: f, exp: {} };
    },
  };
  function dI(mid, src) {
    return __awaiter(this, void 0, void 0, function () {
      var id, _a, o, ia, _b, sa, oa, s, i;
      return __generator(this, function (_c) {
        id = mid.replace(/\.\w+$/i, "");
        if (id.includes("./")) {
          (_a = id.split("/").reverse()),
            (o = _a[0]),
            (ia = _a.slice(1)),
            (_b = src.split("/").reverse()),
            (sa = _b.slice(1)),
            (oa = [o]);
          (s = 0), (i = void 0);
          while ((i = ia.shift())) {
            if (i === "..") s++;
            else if (i === ".") break;
            else oa.push(i);
          }
          if (s < sa.length) oa.push.apply(oa, sa.slice(s));
          id = oa.reverse().join("/");
        }
        return [
          2,
          id in r ? gExpA(id) : Promise.resolve().then(function () {
            return require(mid);
          }),
        ];
      });
    });
  }
  function gC(id, main) {
    return {
      id: id,
      import: function (m) {
        return dI(m, id);
      },
      meta: { url: id, main: main },
    };
  }
  function gE(exp) {
    return function (id, v) {
      var _a;
      v = typeof id === "string" ? ((_a = {}), (_a[id] = v), _a) : id;
      for (var _i = 0, _b = Object.entries(v); _i < _b.length; _i++) {
        var _c = _b[_i],
          id_1 = _c[0],
          value = _c[1];
        Object.defineProperty(exp, id_1, {
          value: value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }
  function rF(main) {
    var m;
    for (var id in r) {
      m = r[id];
      var f = m.f,
        exp = m.exp;
      var _a = f(gE(exp), gC(id, id === main)),
        e = _a.execute,
        s = _a.setters;
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }
  function gExpA(id) {
    return __awaiter(this, void 0, void 0, function () {
      var m, d, e, s, i, _a, _b, r_1;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(id in r)) return [2];
            m = r[id];
            if (!m.s) return [3, 6];
            (d = m.d), (e = m.e), (s = m.s);
            delete m.s;
            delete m.e;
            i = 0;
            _c.label = 1;
          case 1:
            if (!(i < s.length)) return [3, 4];
            _b = (_a = s)[i];
            return [4, gExpA(d[i])];
          case 2:
            _b.apply(_a, [_c.sent()]);
            _c.label = 3;
          case 3:
            i++;
            return [3, 1];
          case 4:
            r_1 = e();
            if (!r_1) return [3, 6];
            return [4, r_1];
          case 5:
            _c.sent();
            _c.label = 6;
          case 6:
            return [2, m.exp];
        }
      });
    });
  }
  function gExp(id) {
    if (!(id in r)) return;
    var m = r[id];
    if (m.s) {
      var d = m.d,
        e = m.e,
        s = m.s;
      delete m.s;
      delete m.e;
      for (var i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = function (m, a) {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
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
System.register("cpx-keycloak", [], function (exports_1, context_1) {
    "use strict";
    var CPXKeycloak;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CPXKeycloak = class CPXKeycloak extends HTMLElement {
                constructor() {
                    super();
                    this._ready = false;
                    this._authenticated = false;
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
                    if (typeof val === 'string')
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
                    return ['url', 'realm', 'client-id', 'config'];
                }
                attributeChangedCallback(name, oldVal, newVal) {
                    this[this.camelCase(name)] = newVal;
                    if (this.validateConfig()) {
                        this.init(this.config);
                    }
                }
                validateConfig() {
                    return (!this.ready && typeof this.url !== 'undefined' && typeof this.realm !== 'undefined' && typeof this.clientId !== 'undefined') || this.config;
                }
                camelCase(str, to = true) {
                    return to ? str.replace(/-([a-z])/g, (m, g) => g.toUpperCase()) : str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
                }
                init(config) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (typeof Keycloak !== 'undefined') {
                            this.keycloak = Keycloak(config ? config : { url: this.url, realm: this.realm, clientId: this.clientId });
                            yield this.keycloak.init({}).then(authenticated => {
                                this.authenticated = authenticated;
                                if (authenticated) {
                                    dispatchEvent(new CustomEvent('token-ready', {
                                        detail: this.token,
                                        composed: true,
                                        bubbles: true
                                    }));
                                    this.ready = true;
                                    document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLogoutUrl());
                                }
                                else {
                                    if (this.getAttribute('auto') !== null) {
                                        this.login();
                                    }
                                    document.querySelector('a[cpx-login]').setAttribute('href', this.keycloak.createLoginUrl());
                                }
                            });
                        }
                        else {
                        }
                    });
                }
                login() { return this.keycloak.login(); }
                logout() { return this.keycloak.logout(); }
                register() { return this.keycloak.register(); }
                account() { return this.keycloak.accountManagement(); }
                get token() { return this.keycloak.tokenParsed; }
            };
            exports_1("CPXKeycloak", CPXKeycloak);
            window.customElements.define('cpx-keycloak', CPXKeycloak);
        }
    };
});

const __exp = __instantiate("cpx-keycloak", false);
export const CPXKeycloak = __exp["CPXKeycloak"];
