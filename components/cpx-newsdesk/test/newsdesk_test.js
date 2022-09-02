import { Newsdesk } from '../newsdesk.js';

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