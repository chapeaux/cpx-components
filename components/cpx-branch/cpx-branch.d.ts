export declare class CPXBranch extends HTMLElement {
  template: any;
  _url: string;
  get url(): string;
  set url(val: string);
  _data: any;
  get data(): any;
  set data(val: any);
  _filter: string;
  get filter(): string;
  set filter(val: string);
  _query: string;
  get query(): string;
  set query(val: string);
  _sort: string;
  get sort(): string;
  set sort(val: string);
  _order: string;
  get order(): string;
  set order(val: string);
  _group: string;
  get group(): string;
  set group(val: string);
  constructor(url: string);
  connectedCallback(): void;
  static get observedAttributes(): string[];
  attributeChangedCallback(name: string, oldVal: any, newVal: any): void;
  render(): void;
}
