# CPX-COOKIE

## PURPOSE

The `cpx-cookie` component is meant to be a declarative interface for getting and setting
browser cookies and parsing them in various ways. JSON and JWT parsing is built in.

## Installation

* `npm install @chapeaux/cpx-cookie` or consume from a CDN via `@chapeaux/cpx-cookie`
* include the `cpx-cookie.js` file on a page prior to any event tracking that should occur

## Usage
* `<script type="module" src="path/to/@chapeaux/cpx-cookie/cpx-cookie.js"></script>`
* `import { CPXWebSocket } from "path/to/@chapeaux/cpx-cookie/cpx-cookie.js";`
*  ```html
    <cpx-cookie action="set" key="user_data" parse="json" value="{name:'shadowman',account_id:'rh1234'}"></cpx-cookie>
    <cpx-cookie action="set" key="username" value="shadowman"></cpx-cookie>
    <cpx-cookie action="get" key="rhc_sso" parse="jwt" emit="token-ready"></cpx-cookie>

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
