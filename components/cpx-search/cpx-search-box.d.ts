export declare class CPXSearchBox extends HTMLElement {
    get html(): string;
    _term: string;
    static get tag(): string;
    template: HTMLTemplateElement;
    get term(): string;
    set term(val: string);
    name: string;
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    _checkTerm(e: any): void;
    _termChange(): void;
    render(): void;
}
