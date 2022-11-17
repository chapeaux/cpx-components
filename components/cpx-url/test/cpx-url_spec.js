import { expect } from "@esm-bundle/chai";
import { elementUpdated, fixture, html } from "@open-wc/testing";
import { CPXUrl } from "../cpx-url";

describe("CPXUrl", () => {
  it("is initialized with default values", () => {
    const ele = new CPXUrl();

    expect(ele.init).to.equal(true);
    expect(ele.uri.toString()).to.contain(
      "http://localhost:8000/?wtr-session-id=",
    );
    expect(ele.term).to.be.null;
    expect(ele.filters).to.exist;
    expect(ele.sort).to.equal("relevance");
    expect(ele.qty).to.be.null;
  });

  it("sets observable attributes; sort, term, and qty", async () => {
    const term = "test";
    const sort = "sort";
    const qty = 10;
    const ele = await fixture(html`
        <cpx-url term="${term}" sort="${sort}" qty="${qty}"></cpx-url>
    `);

    await elementUpdated(ele);
    expect(ele.term).to.equal(term);
    expect(ele.sort).to.equal(sort);
    expect(ele.qty).to.equal(qty.toString());
  });

  it("cannot set an attribute that is not observable", async () => {
    const filters = "foo~bar";
    const ele = await fixture(html`
        <cpx-url filters="${filters}"></cpx-url>
    `);

    await elementUpdated(ele);
    expect(ele.filters).to.be.empty;
  });

  it.skip("can parse attributes from the URL", async () => {
    /**
     * @todo: Find a way to mock window.location.href w/out causing a reload.
     * We need to test a uri like
     * http://localhost:8000?t=test&r=10&s=newest&f=foo~bar&f=hola~mundo
     * creates an element {
     *  term: test
     *  qty: 10
     *  sort: newest
     *  filters: Map {
     *    0: {key: foo, value: bar}
     *    1: {key: hola, value: mundo}
     *  }
     * }
     */

    const ele = await fixture(html`
        <cpx-url></cpx-url>
    `);

    await elementUpdated(ele);
  });
});
