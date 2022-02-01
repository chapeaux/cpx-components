"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporterEvent = void 0;
class ReporterEvent extends Event {
    constructor(name, data) {
        super('cpx-report', { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toJSON", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => Object.assign({ event: this.name }, this.data)
        });
        this.name = name;
        this.data = data;
    }
}
exports.ReporterEvent = ReporterEvent;
console.log(import.meta);
const reporter = document.currentScript;
if (reporter) {
    const data = JSON.parse(reporter.textContent ? reporter.textContent : '');
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data));
}
