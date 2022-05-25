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

window.customElements = new CustomElementRegistry();

import { Newsdesk } from '../src/newsdesk.ts';

describe("Newsdesk", () => {
    it("should have a handleEvent function", () => {
        assertExists(Newsdesk.handleEvent, 'handleEvent exists');
    })
})