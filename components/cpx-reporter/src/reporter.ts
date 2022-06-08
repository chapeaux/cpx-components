function CombineEventData(payload, target, data) {
  let combination = Object.assign(payload(target), data ?? {});
  return combination;
}

let eventMap = new Map([
  ['Page Load Started', {payload:'page',data:{page:(tgt:EventTarget) => {return {"pageName":"foo","custKey": "{custKey}"}}}}],
  ['Page Load Completed', {}],
  ['User Signed In', {payload:'user',data:{user:(tgt:EventTarget) => {return {"custKey": "{custKey}"}}}}],
  ['User Detected', {payload:'user',data:{user:(tgt:EventTarget) => {return {"custKey": "{custKey}","accountID": "<accountID>", "accountIDType": "External","userID": "<userID>","lastLoginDate": "","loggedIn": "false","registered":"true","socialAccountsLinked":"","subscriptionFrequency": "","subscriptionLevel": "","hashedEmail": ""}}}}],
  ['Content Listing Displayed',{payload:'listingDisplayed',data:{listingDisplayed:(tgt:EventTarget) => {return {"displayCount": "<displayCount>","listingDriver": "<listingDriver>", "filterList": "<filterList>","resultsCount": "<resultsCount>"}}}}],
  ['Content Listing Item Clicked', {payload:'listingClicked',data:{listingClicked:(tgt:EventTarget) => {return {"displayPosition": "<displayPosition>", "linkType": "<linkType>", "contentTitle": "<contentTitle>"}}}}],
  ['Form Viewed', {payload:'form',data:{form:(tgt:EventTarget) => {return {}}}}],
  ['Form Submission Succeeded', {payload:'form',data:{form:(tgt:EventTarget) => {return {}}}}],
  ['Form Submission Failed', {payload:'form',data:{form:(tgt:EventTarget) => {return {}}}}]
]);

export class ReporterEvent extends Event {
    constructor(name, data?) {
        super('cpx-report', { bubbles:true, composed:true });
        this.name = name;
        this.obj = eventMap.get(name);
        if (this.obj && this.obj.payload && this.obj.data) {
          console.log('EVENT:',this.name,'OBJECT:',this.obj);
          this.obj.data[this.obj.payload](this.currentTarget,data ?? {})
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
const reporter = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (reporter instanceof HTMLElement) {
    const data = JSON.parse(reporter.textContent ? reporter.textContent : '');
    globalThis.dispatchEvent(new ReporterEvent(reporter.dataset.event,data));
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