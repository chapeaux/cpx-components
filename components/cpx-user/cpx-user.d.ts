/// <amd-module name="file:///home/ldary/rh/chapeaux/cpx-components/components/cpx-user/src/cpx-user.ts" />
export declare class CPXUser extends HTMLElement {
  _authenticated: boolean;
  _userId: string;
  get userId(): string;
  set userId(val: string);
  _name: string;
  get name(): string;
  set name(val: string);
  _cookies: Map<any, any>;
  _email: string;
  get email(): string;
  set email(val: string);
  _ready: boolean;
  get ready(): boolean;
  set ready(val: boolean);
  _user: any;
  get user(): any;
  set user(val: any);
  constructor();
  connectedCallback(): void;
  static get observedAttributes(): string[];
  attributeChangedCallback(name: string, oldVal: string, newVal: string): void;
  validateKCConfig(): any;
  camelCase(str: String, to?: boolean): string;
  kcInit(config?: any): Promise<void>;
  login(): any;
  logout(): any;
  register(): any;
  account(): any;
  get token(): any;
}
