export declare class CPXSearchModalFilters extends HTMLElement {
    static get tag(): string;
    template: HTMLTemplateElement;
    get html(): string;
    _type: string;
    _title: string;
    _filters: any;
    _toggle: boolean;
    _modal: any;
    get type(): string;
    set type(val: string);
    get title(): string;
    set title(val: string);
    get filters(): any;
    set filters(val: any);
    get toggle(): boolean;
    set toggle(val: boolean);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    addGroups(): void;
    _toggleModal(e: any): void;
    applyFilters(): void;
    _clearFilters(e: any): void;
    render(): void;
}
