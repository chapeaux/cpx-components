import { CPXSearchFilterItem } from './cpx-search-filter-item.js';
export declare class CPXSearchFilterGroup extends HTMLElement {
    get html(): string;
    static get tag(): string;
    template: HTMLTemplateElement;
    _key: any;
    _name: any;
    _items: CPXSearchFilterItem[];
    _toggle: boolean;
    _more: boolean;
    get key(): any;
    set key(val: any);
    get name(): any;
    set name(val: any);
    get items(): CPXSearchFilterItem[];
    set items(val: CPXSearchFilterItem[]);
    get toggle(): boolean;
    set toggle(val: boolean);
    get more(): boolean;
    set more(val: boolean);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    render(): void;
}
