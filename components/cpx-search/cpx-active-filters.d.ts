export declare class CPXActiveFilters extends HTMLElement {
    get html(): string;
    static get tag(): string;
    template: HTMLTemplateElement;
    _title: string;
    _filters: any;
    _toggle: boolean;
    _modal: any;
    get title(): string;
    set title(val: string);
    get filters(): any;
    set filters(val: any);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    _checkActive(e: any): void;
    _initActive(e: any, group_key: any, item: any): boolean;
    _addFilters(): void;
    applyFilters(): void;
    _clearFilters(e: any): void;
    render(): void;
}
