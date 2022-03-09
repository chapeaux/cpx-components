let eventMap = new Map([
    ['Page Load Started', { obj: 'page', page: { "custKey": "{custKey}" } }],
    ['Page Load Completed', {}],
    ['User Signed In', { obj: 'user', user: { "custKey": "{custKey}" } }],
    ['User Detected', { obj: 'user', user: { "custKey": "{custKey}", "accountID": "<accountID>", "accountIDType": "External", "userID": "<userID>", "lastLoginDate": "", "loggedIn": "false", "registered": "true", "socialAccountsLinked": "", "subscriptionFrequency": "", "subscriptionLevel": "", "hashedEmail": "" } }],
    ['Content Listing Displayed', { obj: 'listingDisplayed', listingDisplayed: { "displayCount": "<displayCount>", "listingDriver": "<listingDriver>", "filterList": "<filterList>", "resultsCount": "<resultsCount>" } }],
    ['Content Listing Item Clicked', { obj: 'listingClicked', listingClicked: { "displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>" } }],
]);
export class ReporterEvent extends Event {
    constructor(name, data) {
        var _a;
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
        this.obj = (_a = eventMap.get(name)) !== null && _a !== void 0 ? _a : { obj: {}, data: {} };
        this.data = Object.assign(data !== null && data !== void 0 ? data : {}, this.obj[this.obj.obj]);
    }
}
const reporter = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse(reporter.textContent ? reporter.textContent : '');
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data));
}
