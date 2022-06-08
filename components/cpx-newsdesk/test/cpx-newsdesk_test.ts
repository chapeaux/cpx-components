import {
    assertEquals,
    assertStrictEquals,
    assertThrows,
    assertExists,
} from "https://deno.land/std@0.139.0/testing/asserts.ts";
import {
    afterEach,
    beforeEach,
    describe,
    it
} from "https://deno.land/std@0.139.0/testing/bdd.ts";
import { parseHTML } from "https://esm.sh/linkedom";
const { document, customElements, HTMLElement } = parseHTML(`
<!doctype html>
<html lang="en">
<head>
<title>Newsdesk Test</title>
</head>
<body>
</body>
</html>`, window);
// window.HTMLElement = HTMLElement;
// window.customElements = new CustomElementRegistry();
import { Newsdesk } from '../src/newsdesk.ts';
import { CPXNewsdesk } from '../src/cpx-newsdesk.ts';
// class CPXNewsdesk extends HTMLElement {
//     connectedCallback() {

//     }
// }

customElements.define('cpx-newsdesk',CPXNewsdesk);

describe("Newsdesk", () => {
    it("should have a handleEvent function", () => {
        assertExists(Newsdesk.handleEvent, 'handleEvent exists');
    })
    it("should be a component", () => {
        const ele = new CPXNewsdesk();
        document.body.appendChild(ele);
        assertExists(ele.connectedCallback, 'connectedCallback exists');
    })
})