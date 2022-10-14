import { CPXFilterItem } from './cpx-filter-item.js';
export declare class CPXFilterGroup extends HTMLElement {
    get html(): string;
    static get tag(): string;
    template: HTMLTemplateElement;
    _key: any;
    _name: any;
    _items: CPXFilterItem[];
    _toggle: boolean;
    _more: boolean;
    get key(): any;
    set key(val: any);
    get name(): any;
    set name(val: any);
    get items(): CPXFilterItem[];
    set items(val: CPXFilterItem[]);
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
