/// <amd-module name="file:///home/ldary/rh/chapeaux/cpx-components/components/cpx-operator-graph/src/cpx-operator-graph.ts" />
export declare class CPXOperatorGraph extends HTMLElement {
    static get tag(): string;
    template: any;
    cy: any;
    _url: string;
    get url(): string;
    set url(val: string);
    _data: any;
    get data(): any;
    set data(val: any);
    _filter: string;
    get filter(): string;
    set filter(val: string);
    _query: string;
    get query(): string;
    set query(val: string);
    _sort: string;
    get sort(): string;
    set sort(val: string);
    _order: string;
    get order(): string;
    set order(val: string);
    _channel: string;
    get channel(): string;
    set channel(val: string);
    _channels: Map<string, any>;
    get channels(): Map<string, any>;
    set channels(val: Map<string, any>);
    _versions: Map<string, Set<string>>;
    get versions(): Map<string, Set<string>>;
    set versions(val: Map<string, Set<string>>);
    constructor(url: string);
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldVal: any, newVal: any): void;
    render(all?: boolean): void;
}
