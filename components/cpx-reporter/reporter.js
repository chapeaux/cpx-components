let eventMap = new Map([
    ['Page Load Started', { page: { "custKey": "<custKey>" } }],
    ['Page Load Completed', {}],
    ['User Signed In', { obj: 'user', data: { "custKey": "<custKey>" } }],
    ['User Detected', { obj: 'user', data: { "custKey": "<custKey>", "accountID": "<accountID>", "accountIDType": "External", "userID": "<userID>", "lastLoginDate": "", "loggedIn": "false", "registered": "true", "socialAccountsLinked": "", "subscriptionFrequency": "", "subscriptionLevel": "", "hashedEmail": "" } }],
    ['Content Listing Displayed', { obj: 'listingDisplayed', data: { "displayCount": "<displayCount>", "listingDriver": "<listingDriver>", "filterList": "<filterList>", "resultsCount": "<resultsCount>" } }],
    ['Content Listing Item Clicked', { obj: 'listingClicked', data: { "displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>" } }],
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
        this.data = Object.assign(this.obj, data);
    }
}
const reporter = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse(reporter.textContent ? reporter.textContent : '');
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data));
}
