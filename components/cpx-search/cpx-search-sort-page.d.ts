export declare class CPXSearchSortPage extends HTMLElement {
    get html(): string;
    static get tag(): string;
    _sort: any;
    get sort(): any;
    set sort(val: any);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    _sortChange(e: any): void;
}
