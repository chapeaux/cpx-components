var _a, _b;
let eventMap = new Map([
    ['Page Load Started', { payload: 'page', data: { page: { "pageName": "", "custKey": "", "siteExperience": "" } } }],
    ['Page Load Completed', {}],
    ['Download Complete', {}],
    ['Content Listing Displayed', { payload: 'listingDisplayed', data: { listingDisplayed: { "displayCount": "<displayCount>", "listingDriver": "<listingDriver>", "filterList": "<filterList>", "resultsCount": "<resultsCount>" } } }],
    ['Content Listing Item Clicked', { payload: 'listingClicked', data: { listingClicked: { "displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>" } } }],
    ['User Signed In', { payload: 'user', data: { user: { "custKey": "{custKey}" } } }],
    ['User Detected', { payload: 'user', data: { user: { "custKey": "{custKey}", "accountID": "<accountID>", "accountIDType": "External", "userID": "<userID>", "lastLoginDate": "", "loggedIn": "false", "registered": "true", "socialAccountsLinked": "", "subscriptionFrequency": "", "subscriptionLevel": "", "hashedEmail": "" } } }],
    ['Form Viewed', { payload: 'form', data: { form: {} } }],
    ['Form Submission Succeeded', { payload: 'form', data: { form: {} } }],
    ['Form Submission Failed', { payload: 'form', data: { form: {} } }]
]);
export class ReporterEvent extends Event {
    constructor(name, data, emitName = 'cpx-report') {
        super(emitName, { bubbles: true, composed: true });
        Object.defineProperty(this, "obj", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        this.obj = eventMap.get(name);
        if (this.obj && this.obj.payload && this.obj.data) {
            this.obj.data[this.obj.payload] = Object.assign(this.obj.data[this.obj.payload], data !== null && data !== void 0 ? data : {});
            this.data = this.obj.data;
        }
    }
}
const reporter = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse((_a = reporter.textContent) !== null && _a !== void 0 ? _a : '');
    const emitName = (_b = reporter.getAttribute('data-emit')) !== null && _b !== void 0 ? _b : 'cpx-report';
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data, emitName));
}
