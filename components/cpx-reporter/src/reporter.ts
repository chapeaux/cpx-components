let eventMap = new Map([
  ['Page Load Started', {payload:'page',data:{page:{"pageName":"","custKey": "","siteExperience":""}}}],
  ['Page Load Completed', {}],
  ['Download Complete', {}],
  ['Content Listing Displayed',{payload:'listingDisplayed',data:{listingDisplayed:{"displayCount": "<displayCount>","listingDriver": "<listingDriver>", "filterList": "<filterList>","resultsCount": "<resultsCount>"}}}],
  ['Content Listing Item Clicked', {payload:'listingClicked',data:{listingClicked:{"displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>"}}}],
  ['User Signed In', {payload:'user',data:{user:{"custKey": "{custKey}"}}}],
  ['User Detected', {payload:'user',data:{user:{"custKey": "{custKey}","accountID": "<accountID>", "accountIDType": "External","userID": "<userID>","lastLoginDate": "","loggedIn": "false","registered":"true","socialAccountsLinked":"","subscriptionFrequency": "","subscriptionLevel": "","hashedEmail": ""}}}],
  ['Form Viewed', {payload:'form',data:{form:{}}}],
  ['Form Submission Succeeded', {payload:'form',data:{form:{}}}],
  ['Form Submission Failed', {payload:'form',data:{form:{}}}]
]);

export class ReporterEvent extends Event {
    constructor(name, data?, emitName='cpx-report') {
        super(emitName, { bubbles:true, composed:true });
        this.name = name;
        this.obj = eventMap.get(name);
        if (this.obj && this.obj.payload && this.obj.data) {
          this.obj.data[this.obj.payload] = Object.assign(this.obj.data[this.obj.payload], data ?? {});
          this.data = this.obj.data;
        }
    }
    obj:any;
    data?:any;
    name:string;
    toJSON = () => Object.assign({ event: this.name },this.data);
}

/* OLD BROWSER COMPATIBLE 
const scripts = document.getElementsByTagName('script');
const reporter = scripts[scripts.length-1];
*/
const reporter = document.querySelector(`script[src*='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse(reporter.textContent ?? '');
    const emitName = reporter.getAttribute('data-emit') ?? 'cpx-report';
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event,data, emitName));
}

/*


Event Types: 
    Page, User, Content, 
    Search, Campaign, Video,
    CTA, Download, Form

Event Payloads: page, user, 
  listingDisplayed, listingClicked, 
  onsiteSearch, internalCampaign,
  video, linkInfo, form

ADDITIONAL PAGE OBJECT DATA
https://gitlab.cee.redhat.com/chhill/red_hat_analytics/-/blob/main/libraries/src/js/red_hat_analytics_eddl_top.es6.js

*/