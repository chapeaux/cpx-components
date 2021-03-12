export declare class CPXBranch extends HTMLElement {
    template: any;
    _url: string;
    get url(): string;
    set url(val: string);
    _data: any;
    get data(): any;
    set data(val: any);
    constructor(url: string);
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldVal: any, newVal: any): void;
    render(): void;
}
