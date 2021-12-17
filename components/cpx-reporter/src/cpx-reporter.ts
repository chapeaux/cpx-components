class CPXReporter extends HTMLElement {
    static get tag() { return 'cpx-reporter'; }
    constructor() {
        super();
    }

    connectedCallback() {
        
    }
}

window.customElements.define(CPXReporter.tag,CPXReporter);