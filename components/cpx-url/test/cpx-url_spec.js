import { expect } from "@esm-bundle/chai";
import { elementUpdated, fixture, html } from "@open-wc/testing";
import { CPXUrl } from "../cpx-url";

describe("CPXUrl", () => {
  var event_emitted = false;
  var emitted_data = {};

  beforeEach(function () {
    window.history.replaceState(
      null,
      undefined,
      new URL(`?reset`, location.href),
    );

    document.addEventListener("params-ready", (e) => {
      emitted_data = e.detail;
      event_emitted = true;
    });
  });

  it("is initialized with default values", () => {
    const ele = new CPXUrl();
    expect(ele.init).to.equal(true);
    expect(ele.uri.toString()).to.contain(
      "?reset",
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

  it("emits the params-ready event", async () => {
    const ele = await fixture(html`
        <cpx-url></cpx-url>
    `);

    await elementUpdated(ele);
    expect(event_emitted).to.be.true;
    expect(emitted_data.term).to.be.null;
    expect(emitted_data.filters).to.exist;
    expect(emitted_data.sort).to.equal("relevance");
    expect(emitted_data.qty).to.be.null;
  });

  it("cannot set an attribute that is not observable", async () => {
    const filters = "foo~bar";
    const ele = await fixture(html`
        <cpx-url filters="${filters}"></cpx-url>
    `);

    await elementUpdated(ele);
    expect(ele.filters).to.be.empty;
  });

  it("can parse filters from the URL", async () => {
    window.history.replaceState(
      null,
      undefined,
      new URL("?f=foo~bar&f=shadow~man", location.href),
    );

    const ele = new CPXUrl();
    const iter = ele.filters.get("shadow").values();

    expect(iter.next().value).to.equal("man");
    expect(ele.filters).to.have.lengthOf(2);
  });

  it.skip("listens to search complete event", async () => {
    /**
     * @todo: test the search-complete event listener.
     */
  });
});
