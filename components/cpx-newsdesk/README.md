# CPX-NEWSDESK

## PURPOSE

The `newsdesk` is meant to forward communication between various events and an event-driven data layer for analytics. 

## Installation

* `npm install @chapeaux/cpx-newsdesk` or consume from a CDN via `@chapeaux/cpx-newsdesk`
* include the `newsdesk.js` file on a page prior to any event tracking that should occur

## Usage
* `<script type="module" src="path/to/@chapeaux/cpx-newsdesk/newsdesk.js"></script>`
* `import { Newsdesk } from "path/to/@chapeaux/cpx-newsdesk/newsdesk.js";`
* `<script type="module" src="/cpx-newsdesk/newsdesk.js" data-event="cpx-report"></script>`

## Testing

* `deno test` runner and assertions: https://deno.land/manual/testing/assertions


## Contributing
1. Provide feedback on usage
2. Submit an issue or PR
3. Feature requests flow through [CPCORE Jira Project](https://issues.redhat.com/projects/CPCORE/)
    * Use "chapeaux" component
    * Priority will be reviewed against all other requests
    * No timeframe promised upon submission

## To-Do
* Nothing at this time

## EDDL Events

- Page Load Start
- Page Load Complete
- Click Events (using `data-analytics-*` attributes)
    - Navigation Links
    - Download Links
    - Footer Links
    - Social Links
    - Tab Links
    - Internal Campaign Links
- Form Viewed
- Form Submission Succeeded
- Form Submission Failed
- User Signed In
- User Detected
- Content Listing Displayed
- Content Listing Item Clicked
- Internal Campaign Clicked
- Internal Campaigns Displayed
- CTA Link Clicked
- Download Complete
- Video Started
- Video Milestone Reached
- Video Completed

