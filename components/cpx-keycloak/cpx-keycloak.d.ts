/// <amd-module name="file:///home/ldary/rh/chapeaux/cpx-components/components/cpx-keycloak/src/cpx-keycloak.ts" />
export declare class CPXKeycloak extends HTMLElement {
    _keycloak: any;
    _ready: boolean;
    _authenticated: boolean;
    _url: string;
    _config: string;
    _realm: string;
    _clientId: string;
    _links: {
        logout: "";
        login: "";
        register: "";
    };
    get keycloak(): any;
    set keycloak(val: any);
    get url(): string;
    set url(val: string);
    get config(): string;
    set config(val: string);
    get realm(): string;
    set realm(val: string);
    get clientId(): string;
    set clientId(val: string);
    get ready(): boolean;
    set ready(val: boolean);
    get authenticated(): boolean;
    set authenticated(val: boolean);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldVal: string, newVal: string): void;
    validateConfig(): string | true;
    camelCase(str: String, to?: boolean): string;
    init(config?: any): Promise<void>;
    login(): any;
    logout(): any;
    register(): any;
    account(): any;
    get token(): any;
}
