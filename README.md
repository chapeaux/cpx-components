# Chapeaux Components

[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://github.com/lerna/lerna)

## Dependencies

- [NodeJS](https://nodejs.org/) (and `npm`) - https://nodejs.org/
- [Deno](https://deno.land/) - https://deno.land/
- [mkcert](https://github.com/FiloSottile/mkcert) -
  https://github.com/FiloSottile/mkcert

## Getting Started

- Run `npm install`

## Building scripts

- `./bundle.ts` watches for TS file changes in `/components/**/src` directories
- When a change is made, the Bundler transpiles the file into the parent
  directory of `src`
- Run `deno run --unstable --allow-all bundle.ts`

## Running the local server

- Make sure you've run `mkcert -install` to install the local CA
- Run `mkcert localhost` in the root of the repo
- Check to make sure `localhost-key.pem` and `localhost.pem` exist in the root
  of the repo
- Run `deno run --allow-read --allow-net server.ts`
- Navigate to https://localhost:4430 (or
  https://localhost:4430/cpx-keycloak/demo at the moment)

## Random notes

- Property-centric meaning Properties opt-in to being an attribute
- Attribute : Property === 0 : 1
- Error state on invalid property or attribute
