https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter

# Chapeaux Auth Component

## Events

- `auth-ready` - fires when the `.user` object data is populated
- `auth-update` - fires when the `.user` object is updated

## Usage

User data is always stored on the `.user` property once it is available.

- ### JSON Web Token

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

- ### Keycloak

  Requires `keycloak.js` to be available. Additionally, the following attributes
  would be set with the appropriate values (follows these best practices where
  possible -
  https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter):

  - `kc-url` - the Keycloak server url
  - `kc-realm` - the Keycloak realm
  - `kc-client-id` - the Keycloak client ID
  - `kc-options` -
  - `kc-config` -

  #### Available component methods:

  - `login()`: log in using the Keycloak config
  - `logout()`: log out using the Keycloak config
  - `register()`: send user to registration screen based on Keycloak config
  - `account()`: send user to account management screen based on Keycloak config
  - `token.createLoginUrl()`: creates URL to direct user to login screen
  - `token.createLogoutUrl()`: creates URL to log user out

  #### Available component properties:

  - `token`: the Keycloak object for authenticated users

  #### Example:
      ```html
      <cpx-user kc-url="https://test123.com/auth" kc-realm="your-realm" kc-client-id="your-client-id"></cpx-user>
      ```

## Scripts
