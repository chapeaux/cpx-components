# Chapeaux Components

## Dependencies

- [Deno](https://deno.land/) - https://deno.land/
- [NodeJS](https://nodejs.org/) (and `npm`) - https://nodejs.org/
- [mkcert](https://github.com/FiloSottile/mkcert) -
  https://github.com/FiloSottile/mkcert

## Getting Started

- Run `npm install` to grab the web test runner and chai packages

## Building scripts

- `deno task build:watch` watches for TS file changes in `/components/**/src` directories
- When a change is made, the Bundler transpiles the file into the parent
  directory of `src`

## Testing

- Leverages https://modern-web.dev/guides/test-runner/getting-started/
- Prerequisites: `npm i` to install web test runner and chai
- `deno task test` or `deno task test:watch`
- Test files for WTR in `test/*_spec.js` naming format under each component
- Test files for Deno in `test/*_test.js` naming format under each component

### Testing with podman

- Prerequisites: `podman & make`
- Build the image: `make build`
- Run the testing image: `make start`
- Build the cpx components if necessary `make build-components`
- Run one off test `make test`
- Run and watch test `make test:watch`
- Don't forget to stop the testing container when done `make stop`
TODO: Remove node dependency and run from deno image.

## Running the local server

### Local

- Make sure you've run `mkcert -install` to install the local CA
- Run `mkcert localhost` in the root of the repo
- Check to make sure `localhost-key.pem` and `localhost.pem` exist in the root of the repo
- Update the `tasks/serve.js` file to use the SSL-enabled `app.listen`
- Run `deno task serve`
- Navigate to https://localhost:4430 (or
  https://localhost:4430/cpx-keycloak/demo at the moment)

### Remote

- Same as above, but use the non-SSL-enabled `app.listen` if behind a SSL-forwarded URL

## Random notes

- Property-centric meaning Properties opt-in to being an attribute
- Attribute : Property === 0 : 1
- Error state on invalid property or attribute
