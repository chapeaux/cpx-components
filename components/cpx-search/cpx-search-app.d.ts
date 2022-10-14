import { CPXUrl } from './cpx-url.js';
import { CPXModalFilters } from './cpx-modal-filters.js';
export declare class CPXSearchApp extends HTMLElement {
    get html(): string;
    static get tag(): string;
    _name: string;
    _url: any;
    get name(): string;
    set name(val: string);
    get url(): any;
    set url(val: any);
    urlEle: CPXUrl;
    modal: CPXModalFilters;
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    toggleModal(e: any): void;
}
