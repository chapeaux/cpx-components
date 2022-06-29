# CPX-WEBSOCKET

## PURPOSE

The `cpx-websocket` component is meant to be a declarative interface for the JavaScript `WebSocket` API for both content authors as well as developers. It allows a URL to be connected, and the results placed in a template or used by other scripts.

## Installation

* `npm install @chapeaux/cpx-websocket` or consume from a CDN via `@chapeaux/cpx-websocket`
* include the `cpx-websocket.js` file on a page prior to any event tracking that should occur

## Usage
* `<script type="module" src="path/to/@chapeaux/cpx-websocket/cpx-websocket.js"></script>`
* `import { CPXWebSocket } from "path/to/@chapeaux/cpx-websocket/cpx-websocket.js";`
*  ```html
    <cpx-websocket id="leaderboard" url="ws://localhost:8080/leaderboard">
        <template>
        <h1 data-key="length">Top ${data.length}</h1>
        <ol>
        <li data-repeat="data"><a href="/${gameId}" onclick="return false;">${userName}</a>.....${score}</li>
        </ol>
        </template>
    </cpx-websocket>

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