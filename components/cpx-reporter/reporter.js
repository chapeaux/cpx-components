function CombineEventData(payload, target, data) {
    let combination = Object.assign(payload(target), data !== null && data !== void 0 ? data : {});
    return combination;
}
let eventMap = new Map([
    ['Page Load Started', { payload: 'page', data: { page: (tgt) => { return { "pageName": "foo", "custKey": "{custKey}" }; } } }],
    ['Page Load Completed', {}],
    ['User Signed In', { payload: 'user', data: { user: (tgt) => { return { "custKey": "{custKey}" }; } } }],
    ['User Detected', { payload: 'user', data: { user: (tgt) => { return { "custKey": "{custKey}", "accountID": "<accountID>", "accountIDType": "External", "userID": "<userID>", "lastLoginDate": "", "loggedIn": "false", "registered": "true", "socialAccountsLinked": "", "subscriptionFrequency": "", "subscriptionLevel": "", "hashedEmail": "" }; } } }],
    ['Content Listing Displayed', { payload: 'listingDisplayed', data: { listingDisplayed: (tgt) => { return { "displayCount": "<displayCount>", "listingDriver": "<listingDriver>", "filterList": "<filterList>", "resultsCount": "<resultsCount>" }; } } }],
    ['Content Listing Item Clicked', { payload: 'listingClicked', data: { listingClicked: (tgt) => { return { "displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>" }; } } }],
    ['Form Viewed', { payload: 'form', data: { form: (tgt) => { return {}; } } }],
    ['Form Submission Succeeded', { payload: 'form', data: { form: (tgt) => { return {}; } } }],
    ['Form Submission Failed', { payload: 'form', data: { form: (tgt) => { return {}; } } }]
]);
export class ReporterEvent extends Event {
    constructor(name, data) {
        super('cpx-report', { bubbles: true, composed: true });
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
            console.log('EVENT:', this.name, 'OBJECT:', this.obj);
            this.obj.data[this.obj.payload](this.currentTarget, data !== null && data !== void 0 ? data : {});
            this.data = this.obj.data;
        }
    }
}
const reporter = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse(reporter.textContent ? reporter.textContent : '');
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data));
}
