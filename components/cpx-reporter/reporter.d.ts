export declare class ReporterEvent extends Event {
    constructor(name: any, data?: any, emitName?: string);
    obj: any;
    data?: any;
    name: string;
    toJSON: () => any;
}
