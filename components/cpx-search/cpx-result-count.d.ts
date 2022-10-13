export declare class CPXResultCount extends HTMLElement {
    get html(): string;
    static get tag(): string;
    template: HTMLTemplateElement;
    _count: number;
    _term: string;
    _loading: boolean;
    get count(): number;
    set count(val: number);
    get term(): string;
    set term(val: string);
    get loading(): boolean;
    set loading(val: boolean);
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    _setText(e: any): void;
    render(): void;
}
