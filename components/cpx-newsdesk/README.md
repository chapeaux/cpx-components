# CPX-NEWSDESK

## PURPOSE

The `newsdesk` is meant to forward communication between various events and an event-driven data layer for analytics. 

## Installation

* `npm install @chapeaux/cpx-newsdesk` or consume from a CDN via `@chapeaux/cpx-newsdesk`
* include the `newsdesk.js` file on a page prior to any event tracking that should occur

## Testing

* `deno test` runner and assertions: https://deno.land/manual/testing/assertions




Create future feature wishlist and document process for how others can contribute. For example, include:
Things that are left to do on the component in the future
How someone can contribute
Also include a process that explains what to do if someone wants to put through a specific feature request for CPCORE to work on (can collaborate with Tia when you get to this part)
We will want to make sure to note what to expect from turnaround time (ie no timeframe will be promised upon submission and priority will be reviewed against all other requests)
Installation
Where to get it
How to put it on the page
Technical Spec
Current parameters to use
Attributes to manipulate etc etc.
In page live demo
Please update this Confluence page with direct documentation, links out to where you put the documentation, etc so that it is easily consumable by anyone reading the page.


## Events

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

