export declare class CPXWebSocket extends HTMLElement {
    template: any;
    _url: string;
    get url(): string;
    set url(val: string);
    get state(): string;
    _socket: WebSocket;
    get socket(): WebSocket;
    set socket(val: WebSocket);
    _data: any;
    get data(): any;
    set data(val: any);
    constructor(url: string);
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldVal: any, newVal: any): void;
    render(): void;
    start(): void;
    stop(): () => void;
    close(): void;
    logState(e: any): void;
    logMessage(e: any): void;
    logError(e: any): void;
}
