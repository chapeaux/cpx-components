export declare class CPXFilter extends HTMLElement {
    static get tag(): string;
    _map: any[];
    _container: Element;
    _containerQuery: string;
    _item: string;
    _condition: string;
    _criteria: string;
    get container(): Element;
    set container(val: Element);
    get item(): string;
    set item(val: string);
    get condition(): string;
    set condition(val: string);
    get criteria(): string;
    set criteria(val: string);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(attr: any, oldVal: any, newVal: any): void;
    filter(): void;
}
