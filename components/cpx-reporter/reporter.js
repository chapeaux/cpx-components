var _a, _b;
function CombineEventData(payload, target, data) {
    let combination = Object.assign(payload(target), data !== null && data !== void 0 ? data : {});
    return combination;
}
const eventMap = new Map([
    ['Page Load Started', {
            payload: 'page',
            data: {
                page: (tgt, data) => {
                    return {
                        pageName: data ? [data.siteName, data.pageCategory, data.subsection, data.subsection2, data.subsection3, data.lastUrlItem].filter(v => (typeof v !== 'undefined' && v !== null)) : '',
                        previousPage: ((r) => {
                            if (r) {
                                let a = document.createElement("a");
                                a.href = r;
                                return a.href;
                            }
                        })(document.referrer),
                        siteExperience: ((w) => (w > 992) ? 'desktop' : ((w > 768) ? 'tablet' : 'mobile'))(window.innerWidth)
                    };
                }
            }
        }],
    ['Page Load Completed', {}],
    ['User Signed In', { payload: 'user', data: { user: (tgt, data) => { return { "custKey": "{custKey}" }; } } }],
    ['User Detected', { payload: 'user', data: {
                user: (tgt, data) => {
                    return Object.assign({
                        "custKey": "{custKey}",
                        "accountID": "<accountID>",
                        "accountIDType": "External",
                        "userID": "<userID>",
                        "lastLoginDate": "",
                        "loggedIn": "false",
                        "registered": "true",
                        "socialAccountsLinked": "",
                        "subscriptionFrequency": "",
                        "subscriptionLevel": "", "hashedEmail": ""
                    }, data);
                }
            }
        }
    ],
    ['Content Listing Displayed', { payload: 'listingDisplayed', data: { listingDisplayed: (tgt, data) => { return { "displayCount": "<displayCount>", "listingDriver": "<listingDriver>", "filterList": "<filterList>", "resultsCount": "<resultsCount>" }; } } }],
    ['Content Listing Item Clicked', { payload: 'listingClicked', data: { listingClicked: (tgt, data) => { return { "displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>" }; } } }],
    ['Form Viewed', { payload: 'form', data: { form: (tgt, data) => { return {}; } } }],
    ['Form Submission Succeeded', { payload: 'form', data: { form: (tgt, data) => { return {}; } } }],
    ['Form Submission Failed', { payload: 'form', data: { form: (tgt, data) => { return {}; } } }],
    ['Error Message Presented', { payload: 'error', data: { error: (tgt, data) => { return { errorCode: '', errorType: '' }; } } }]
]);
export class ReporterEvent extends Event {
    constructor(name, data, emitName = 'cpx-report') {
        super(emitName, { bubbles: true, composed: true });
        this.toJSON = () => Object.assign({ event: this.name }, this.data);
        this.name = name;
        this.obj = eventMap.get(name);
        if (this.obj && this.obj.payload && this.obj.data) {
            this.data = this.obj.data[this.obj.payload](this.currentTarget, data !== null && data !== void 0 ? data : {});
        }
    }
}
const reporter = document.querySelector(`script[src*='${(new URL(import.meta.url)).pathname}']:not([reported])`);
if (reporter instanceof HTMLElement) {
    if (reporter.getAttribute('reported') == null) {
        const data = JSON.parse((_a = reporter.textContent) !== null && _a !== void 0 ? _a : '');
        const emitName = (_b = reporter.getAttribute('data-emit')) !== null && _b !== void 0 ? _b : 'cpx-report';
        globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event, data, emitName));
        reporter.setAttribute('reported', '');
    }
}
