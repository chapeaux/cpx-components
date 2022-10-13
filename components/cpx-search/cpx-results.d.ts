export declare class CPXResults extends HTMLElement {
    static get tag(): string;
    get html(): string;
    _results: any;
    _resultLayout: string;
    _more: boolean;
    _last: number;
    _valid: boolean;
    template: any;
    get results(): any;
    set results(val: any);
    get more(): boolean;
    set more(val: boolean);
    get last(): number;
    set last(val: number);
    get valid(): boolean;
    set valid(val: boolean);
    get resultLayout(): string;
    set resultLayout(val: string);
    render(): void;
    constructor();
    connectedCallback(): void;
    addResult(result: any): void;
    _setLoading(e: any): void;
    _renderResults(e: any): void;
    _clearResults(e: any): void;
    _checkValid(e: any): void;
    addResults(results: any): void;
}
