# CPX-QUERY

## PURPOSE

The `cpx-query` is meant to be a declarative interface for the JavaScript `fetch` API for both content authors as well as developers. It allows a URL to be fetched, and the results placed in a template or used by other scripts.

## Installation

* `npm install @chapeaux/cpx-query` or consume from a CDN via `@chapeaux/cpx-query`
* include the `cpx-query.js` file on the page

## Usage
* `<script type="module" src="path/to/@chapeaux/cpx-query/cpx-query.js"></script>`
* `import { CPXQuery } from "path/to/@chapeaux/cpx-query/cpx-query.js";`
*  ```html
    <cpx-query auto url="data.json">
        <template>
            <style>
            section { 
                display: grid; gap: 1em; grid-template-columns: repeat(4,1fr); 
            }
            ul {background: #eee;}
            </style>
            <section data-repeat>
                <ul>
                    <li>${Title}</li>
                    <li>${Year}</li>
                </ul>
            </section>
        </template>
    </cpx-query>

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