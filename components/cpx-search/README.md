# CPX-RESULT

## PURPOSE

The `cpx-result` element is meant to visually represent content relevant to a user's search. 
The `cpx-results` element is meant to respond to search events and populate a list of `cpx-result` elements 
and respond/forward a user's desire to load more records. It also handles empty query state and errors.

## Installation

* `npm install @chapeaux/cpx-result` or consume from a CDN via `@chapeaux/cpx-result`
* include the `newsdesk.js` file on a page prior to any event tracking that should occur

## Usage
* `<script type="module" src="path/to/@chapeaux/cpx-result/cpx-result.js"></script>`
* `import { CPXResult } from "path/to/@chapeaux/cpx-result/cpx-result.js";`


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

