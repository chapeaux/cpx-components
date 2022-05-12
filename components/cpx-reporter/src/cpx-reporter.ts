import { ReporterEvent } from "./reporter.ts";
/*
    Based off documentation for EDDL found here:
    https://github.com/searchdiscovery/redhat-datalayer/blob/main/EDDL/global-datalayer.md

    Parse data points up the DOM ala Click To EDDL
*/

class CPXReporter extends HTMLElement {
    static get tag() { return 'cpx-reporter'; }
    _debug:string;
    get debug() {
        return this._debug;
    }
    set debug(val) {
        if (this._debug === val) return;
        this._debug = val;
    }
    
    _beat:string;
    get beat() { return this._beat; }
    set beat(val) {
        if (this._beat === val) return;
        this._beat = val;
        this.addEventListener(this._beat, e => {
            this.dispatchEvent(new ReporterEvent(this.event));
        });
        this.setAttribute('beat',this._beat);
    }

    _event:string;
    get event() { return this._event; }
    set event(val) {
        if (this._event === val) return;
        this._event = val;
        this.setAttribute('event', this._event);
    }

    _data = {};
    get data() { return this._data; }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        //this.setAttribute('data', this._data);
    }
    tasks = new Set(['beat','event','data']);
    constructor() {
        super();
    }
    _ready = false;
    get ready() { return this._ready; }
    set ready(val) {
        if (this._ready === !!val) return;
        this._ready = !!val;
        if(this._ready) {
            this.report();
        }
    }

    _emit = 'cpx-report';
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val) return;
        this._emit = val;
    }
    connectedCallback() {
        const dataEle = this.querySelector('script[type="data"]');
        if (dataEle) {
            this.data = JSON.parse(dataEle.textContent);
        }

        const attrs = new Set();
        for (let i=0; i < this.attributes.length; i++) {
            attrs.add(this.attributes[i]);
        }

        this.tasks.forEach(r => {
            if (!attrs.has(r)) {
                this.tasks.delete(r);
            }
        });
    }

    static get observedAttributes() {
        return [
            "beat",
            "emit",
            "event",
            "data",
            "debug"
        ];
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        this[name] = newVal;
        if (this.tasks.has(name)) { this.tasks.delete(name); }
        if (this.getAttribute('auto') === '' && this.tasks.size === 0) {
            this.ready = true;
        }

    }

    report() {
        if (this.debug !== null) { 
            if (this.debug !== 'verbose') {
                console.log('DEBUG ON'); 
            } else { console.log('VERBOSE DEBUG ON'); }
        }
        this.dispatchEvent(new ReporterEvent(this.event, this.data, this.emit));
    }

    /* Reporter Beats */
    
    /*

    Event Types: 
        Page, User, Content, 
        Search, Campaign, Video,
        CTA, Download, Form

    Page Load Completed
     'event': 'Page Load Completed'

    
    Page Load Started
     'event': 'Page Load Started',
    "page": {
        "pageCategory": "technologies",
        "pageName": "<pageName>",
        "pageTitle": "Red Hat Enterprise Linux operating system",
        "analyticsTitle": "<Drupal analyticsTitle field>",        
        "pageType": "pattern_template",
        "pageSubType": "Product",
        "siteExperience": "mobile",
        "siteLanguage": "<siteLanguage>",
        "subsection": "linux-platforms",
        "subsection2": "enterprise-linux2",
        "subsection3": "try-it",
        "cms": "RH CMS 2020.14.0",
        "analyticsTitle": "<Analytics Title field in Drupal>",
        "blogAuthor": "<captures author of blog articles>",
        "contentID": "545121",
        "contentType": "E-book",
        "destinationURL": "https://www.redhat.com/en/home-page",
        "errorType": "404",
        "gated": true,
        "taxonomyMetaHreflang": ["29051"],
        "taxonomyRegion": ["4521"],
        "taxonomyBlogPostCategory": ["4261"],
        "taxonomyBusinessChallenge":["161"],
        "taxonomyProduct":["781"],
        "taxonomyProductLine":["831"],
        "taxonomySolution":["1071"],
        "taxonomyTopic":["9011", "27061"],
        "taxonomyAuthor":["1111"],
        "taxonomyStage":["111"], 
        "dataObject":"digitalData"
        }


    User Signed In
    "event": "User Signed In",
    "user": {
        "custKey": "<custKey>"
    }

    User Detected
     'event': 'User Detected',
    "user": {
        "custKey": "<custKey>",
        "accountID": "<accountID>", //Customer Portal
        "accountIDType": "External",
        "userID": "<userID>",
        "lastLoginDate": "",
        "loggedIn": "false",
        "registered":"true",
        "socialAccountsLinked":"",
        "subscriptionFrequency": "",
        "subscriptionLevel": "",
        "hashedEmail": ""
    }


    Content Listing Displayed
     'event': 'Content Listing Displayed',
    "listingDisplayed": {
        "displayCount": "<displayCount>",
        "listingDriver": "<listingDriver>", 
        "filterList": "<filterList>",
        "resultsCount": "<resultsCount>"
    }

    Content Listing Item Clicked
    'event': 'Content Listing Item Clicked',
    "listingClicked": {
            "displayPosition": "<displayPosition>", 
  	"linkType": "<linkType>", 
  	"contentTitle": "<contentTitle>"
                }


    Onsite Search Performed
     "event": "Onsite Search Performed",
  "onsiteSearch": {
    "keyword": {
      "searchType": "global_search",
      "searchTerm": "<searchTerm>",
      “searchMethod”: “<searchMethod>”
    }
  }

    Internal Campaign Clicked
     'event': 'Internal Campaign Clicked',
    "internalCampaign": {
        "campaignList": [
            {
                "internalCampaignCreative": "<internalCampaignCreative>",
                "internalCampaignID": "<internalCampaignID>",
                "internalCampaignName": "<internalCampaignName>",
                "internalCampaignObjective": "<internalCampaignObjective>",
                "internalCampaignPosition": "<internalCampaignPosition>"
            }
        ],
        "internalCampaignID": "<internalCampaignID>"
    }

    Internal Campaign Displayed
     'event': 'Internal Campaigns Displayed',
    "internalCampaign": {
        "campaignList": [
            {
                "internalCampaignCreative": "<internalCampaignCreative>",
                "internalCampaignID": "<internalCampaignID>",
                "internalCampaignName": "<internalCampaignName>",
                "internalCampaignObjective": "<internalCampaignObjective>",
                "internalCampaignPosition": "<internalCampaignPosition>"
            }
        ]
    }

    Video Started
     "event": "Video Started",
  "video": {
    "videoID": "<videoID>",
    "videoName": "<videoName>",
    "secondsLength": "<secondsLength>",
    "videoPlayerType": "<videoPlayerType>",
    "categoryName": "<categoryName>"
  }


  Video Milestone Reached
  "event": "Video Milestone Reached",
  "video": {
    "milestone": "<milestone>",
    "videoID": "<videoID>",
    "videoName": "<videoName>",
    "secondsLength": "<secondsLength>",
    "videoPlayerType": "<videoPlayerType>",
    "categoryName": "<categoryName>"
  }

  Video Completed
   "event": "Video Completed",
  "video": {
    "categoryName": "<categoryName>",
    "videoPlayerType": "<videoPlayerType>",
    "secondsLength": "<secondsLength>",
    "videoName": "<videoName>",
    "videoID": "<videoID>"
  }



    CTA Link Clicked
    "event": "CTA Link Clicked",
  "linkInfo": {
    "linkId": "<linkId>",
    "linkContainer": "<linkContainer>",
    "linkRegion": "<linkRegion>"
  }

    Download Complete
    "event": "Download Complete",
  "linkInfo": {
    "linkId": "<linkId>",
    "linkContainer": "<linkContainer>",
    "linkRegion": "<linkRegion>",
    "fileName": "<fileName>",
    "fileType": "<fileType>"
  }



    Form Viewed
     'event': 'Form Viewed',
    "form": {
        "formField": [
            {
                "fieldID": "<fieldID>",
                "fieldPosition": "<fieldPosition>"
            }
        ],
        "formID": "<formID>",
        "formName": "<formName>",
        "formType": "<formType>",
        "formTemplate": "<formTemplate>",
        "offerID": "<offerID>",
        "formField": [
          {
            "fieldID": "<fieldID>",
            "fieldPosition": "<fieldPosition>"
          }
        ]
    }


    Form Submission Success
      'event': 'Form Submission Succeeded',
    "form": {
        "formID": "<formID>",
        "formName": "<formName>",
        "formType": "<formType>",
        "formTemplate": "<formTemplate>",
        "offerID": "<offerID>"
    }


    Form Submission Failed    
     'event': 'Form Submission Failed',
    "form": {
        "formError": "<formError>",
        "formField": [
            {
                "fieldID": "<fieldID>",
                "fieldPosition": "<fieldPosition>",
                "formFieldError": "<formFieldError>"
            }
        ],
        "formName": "<formName>",
        "formTemplate": "<formTemplate>",
        "offerID": "<offerID>",
        "formType": "<formType>"
    }

    */

}

window.customElements.define(CPXReporter.tag,CPXReporter);