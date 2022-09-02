export class CPXNewsdesk extends window.HTMLElement {
    static get tag() { return 'cpx-newsdesk'; }
    constructor() {
        super();
    }
    connectedCallback() {
        document.addEventListener('cpx-report', e => {
            this.dispatchEvent(new CustomEvent("newsflash", {
                detail: e['detail'],
                composed: true,
                bubbles: true,
            }));
        });
    }
}
window.customElements.define(CPXNewsdesk.tag, CPXNewsdesk);
