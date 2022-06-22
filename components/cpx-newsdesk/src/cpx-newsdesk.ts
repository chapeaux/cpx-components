/**
 *  Based off documentation for EDDL found here:
 *  <a href="https://github.com/searchdiscovery/redhat-datalayer/blob/main/EDDL/global-datalayer.md">Global Data Layer</a>
 *  @todo Parse data points up the DOM ala Click To EDDL
 *  @summary CPXNewsdesk class for the cpx-newsdesk web component
 *  @fires {CustomEvent} newsflash - an event to know when something has been reported
 */
export class CPXNewsdesk extends window.HTMLElement {
    static get tag() { return 'cpx-newsdesk'; }
    constructor() {
        super();
    }

    connectedCallback() {
        document.addEventListener('cpx-report', e => {
            this.dispatchEvent(
                new CustomEvent("newsflash", {
                    detail: e['detail'],
                    composed: true,
                    bubbles: true,
                })
            );
        });
    }
}

window.customElements.define(CPXNewsdesk.tag,CPXNewsdesk);