# CPX-USER

## PURPOSE

The `cpx-user` component is meant to be a centralized location for user-related information and functionality.

## Installation

* `npm install @chapeaux/cpx-user` or consume from a CDN via `@chapeaux/cpx-user`
* include the `cpx-user.js` file on a page prior to any event tracking that should occur

## Events

- `user-ready` - fires when the `.user` object data is populated
- `user-update` - fires when the `.user` object is updated

## Usage

User data is always stored on the `.user` property once it is available.

- ### Server-side or on-page

  #### Server-side Data inclusion example
      ```html
      <cpx-user>
          <script type="data">
          {
              "name": "Test User",
              "email": "test123@test123.com"
          }
          </script>
      </cpx-user>
      ```

- ### JSON Web Token

  Requires that `jwt_decode` library be available globally.

  Available component properties:

  - `jwt-cookie`: sets the cookie to parse for JWT data
  - `jwt-token`: sets the JWT token to parse for data

  #### JWT Cookie Example
      ```html
      <cpx-user jwt-cookie="SOME_JWT_COOKIE_NAME"></cpx-user>
      ```

  #### JWT Token
      ```html
      <cpx-user jwt-token="SOMEJWTENCODEDSTRING"></cpx-user>
      ```

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