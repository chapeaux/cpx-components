export class CPXQuery extends HTMLElement {
  constructor() {
    super();
    Object.defineProperty(this, "_template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "_auto", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false,
    });
    Object.defineProperty(this, "_ready", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "_cache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "default",
    });
    Object.defineProperty(this, "_filters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { term: "", facets: {} },
    });
    Object.defineProperty(this, "_activeFilters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Map(),
    });
    Object.defineProperty(this, "_limit", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 10,
    });
    Object.defineProperty(this, "_from", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0,
    });
    Object.defineProperty(this, "_sort", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "relevance",
    });
    Object.defineProperty(this, "_results", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "_term", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "_url", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "_valid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true,
    });
    Object.defineProperty(this, "_mapper", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    let tmpl = this.querySelector("template");
    if (tmpl) {
      this.attachShadow({ mode: "open" });
      this.template = tmpl.cloneNode(true);
      this.prepTemplate();
    } else if (this.getAttribute("template")) {
      this.attachShadow({ mode: "open" });
      this.template = top.document.querySelector(this.getAttribute("template"))
        .cloneNode(true);
      this.prepTemplate();
    }
    this._changeAttr = this._changeAttr.bind(this);
  }
  static get tag() {
    return "cpx-query";
  }
  get template() {
    return this._template;
  }
  set template(val) {
    if (this._template === val) {
      return;
    }
    this._template = val;
  }
  get ready() {
    return this._ready;
  }
  set ready(val) {
    if (this._ready === val) {
      return;
    }
    this._ready = val;
    this.setAttribute("ready", this._ready.toString());
  }
  get auto() {
    return this._auto;
  }
  set auto(val) {
    if (typeof val === "string") {
      val = true;
    }
    if (val === null) {
      val = false;
    }
    if (this._auto === val) {
      return;
    } else {
      this._auto = val;
      if (this._auto) {
        this.setAttribute("auto", "");
      } else {
        this.removeAttribute("auto");
      }
    }
  }
  get cache() {
    return this._cache;
  }
  set cache(val) {
    if (this._cache === val) {
      return;
    }
    this._cache = val;
    this.setAttribute("cache", this._cache);
  }
  get filters() {
    return this._filters;
  }
  set filters(val) {
    if (this._filters === val) {
      return;
    }
    this._filters = val;
  }
  get activeFilters() {
    return this._activeFilters;
  }
  set activeFilters(val) {
    if (this._activeFilters === val) {
      return;
    }
    this._activeFilters = val;
    this.filters.facets = this._activeFilters;
  }
  get from() {
    return this._from;
  }
  set from(val) {
    if (this._from === val) {
      return;
    }
    this._from = val;
    this.setAttribute("from", val.toString());
  }
  get limit() {
    return this._limit;
  }
  set limit(val) {
    if (this._limit === val) {
      return;
    }
    this._limit = val;
    this.setAttribute("limit", val.toString());
  }
  get sort() {
    return this._sort;
  }
  set sort(val) {
    if (this._sort === val) {
      return;
    }
    this._sort = val;
    this.setAttribute("sort", val);
  }
  get results() {
    return this._results;
  }
  set results(val) {
    if (this._results === val) {
      return;
    }
    this._results = val;
    this.from = this._results ? this.from + this.results.length : 0;
    let evt = {
      detail: {
        term: this.term,
        filters: this.activeFilters,
        facets: this._results.facet_counts || {},
        sort: this.sort,
        limit: this.limit,
        from: this.from,
        results: this._results,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("query-complete", evt));
    if (this.template) {
      this.render();
    }
  }
  get term() {
    return this._term;
  }
  set term(val) {
    if (this._term === val) {
      return;
    }
    this._term = val;
    this.filters.term = this._term;
    this.setAttribute("term", val.toString());
  }
  get url() {
    try {
      return new URL(this._url);
    } catch (_a) {
      return new URL(this._url, window.location.href + "/");
    }
  }
  set url(val) {
    if (this._url === val) {
      return;
    }
    this._url = val;
    this.setAttribute("url", val.toString());
  }
  get valid() {
    return this._valid;
  }
  set valid(val) {
    if (this._valid === val) {
      return;
    }
    this._valid = val;
  }
  filterString(facets) {
    var len = facets.length, filterArr = [];
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < facets[i].items.length; j++) {
        if (facets[i].items[j].active) {
          let idx = 0;
          while (idx < facets[i].items[j].value.length) {
            filterArr.push(facets[i].items[j].value[idx]);
            idx = idx + 1;
          }
        }
      }
    }
    return filterArr.join(", ");
  }
  connectedCallback() {
    top.addEventListener("params-ready", this._changeAttr);
    top.addEventListener("term-change", this._changeAttr);
    top.addEventListener("filter-item-change", this._changeAttr);
    top.addEventListener("sort-change", this._changeAttr);
    top.addEventListener("clear-filters", this._changeAttr);
    top.addEventListener("load-more", this._changeAttr);
    if (this.auto) {
      this.search();
    }
  }
  static get observedAttributes() {
    return ["term", "sort", "limit", "results", "url", "auto", "cache"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
  _setFilters(item) {
    let add = item.active;
    if (add) {
      if (this.activeFilters.has(item.group)) {
        this.activeFilters.get(item.group).add(item.key);
      } else {
        this.activeFilters.set(item.group, new Set([item.key]));
      }
    } else {
      if (this.activeFilters.has(item.group)) {
        this.activeFilters.get(item.group).delete(item.key);
        if (this.activeFilters.get(item.group).size === 0) {
          this.activeFilters.delete(item.group);
        }
      }
    }
  }
  _changeAttr(e) {
    switch (e.type) {
      case "term-change":
        if (e.detail && e.detail.term && e.detail.term.length > 0) {
          this.term = e.detail.term;
        } else {
          this.term = "";
        }
        this.from = 0;
        this.search();
        break;
      case "filter-item-change":
        if (e.detail && e.detail.facet) {
          this._setFilters(e.detail.facet);
        }
        this.from = 0;
        this.search();
        break;
      case "sort-change":
        if (e.detail && e.detail.sort) {
          this.sort = e.detail.sort;
        }
        this.from = 0;
        this.search();
        break;
      case "load-more":
        this.search();
        break;
      case "clear-filters":
        this.activeFilters.clear();
        this.search();
        break;
      case "params-ready":
        if (e.detail && e.detail.term) {
          this.term = e.detail.term;
        }
        if (e.detail && e.detail.sort) {
          this.sort = e.detail.sort;
        }
        if (e.detail && e.detail.filters) {
          this.activeFilters = e.detail.filters;
        }
        this.from = 0;
        if (
          this.activeFilters.size > 0 || e.detail.term !== null ||
          e.detail.sort !== null || e.detail.qty !== null
        ) {
          this.search();
        }
        break;
    }
  }
  search() {
    let evt = { bubbles: true, composed: true };
    this.dispatchEvent(new CustomEvent("query-start", evt));
    if (
      this.url &&
        ((this.activeFilters && this.activeFilters.size > 0) ||
          (this.term !== null && this.term !== "" &&
            typeof this.term !== "undefined")) || this.auto
    ) {
      let qURL = new URL(this.url.href) ||
        new URL(this.url.href, window.location.href + "/");
      this.activeFilters.forEach((filters, group) => {
        qURL.searchParams.set(group, Array.from(filters).join(","));
      });
      const queryInit = {
        cache: this.cache,
      };
      fetch(qURL.toString(), queryInit)
        .then((resp) => resp.json())
        .then((data) => {
          let msgData;
          if (typeof data.length === "number") {
            msgData = new Map(data.entries());
            msgData.set("length", data.length);
          } else {
            msgData = new Map(Object.entries(data));
          }
          this.results = msgData;
        });
    } else {
      let evt = { detail: { invalid: true }, bubbles: true, composed: true };
      this.dispatchEvent(new CustomEvent("query-complete", evt));
    }
  }
  prepTemplate() {
    let repeatEls = this.template.content.querySelectorAll("[data-repeat]");
    let varMatch = /\${([^{]+[^}])}/g;
    if (repeatEls.length > 0) {
      repeatEls.forEach((el) => {
        let dr = el.getAttribute("data-repeat");
        if (dr.length === 0) {
          let drtxt = btoa(el.innerHTML.trim());
          el.setAttribute("data-repeat", drtxt);
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
      });
    }
    if (!this.shadowRoot.firstChild) {
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      this.ready = true;
    }
  }
  renderTemplate(data, ele) {
    let eltmpl;
    let matches;
    if (ele.getAttribute) {
      eltmpl = ele.getAttribute("data-repeat");
    }
    if (eltmpl) {
      matches = [...atob(eltmpl).matchAll(/\${([^{]+[^}])}/g)];
      data.forEach((v, k) => {
        if (Number.isInteger(k)) {
          let html = matches.reduce((a, c) => {
            let dataVal = c[1].split(".");
            return a.replaceAll(
              c[0],
              dataVal.length <= 1
                ? v[c[1]]
                : dataVal.reduce((acc, curr) => acc[curr], v),
            );
          }, atob(eltmpl));
          ele.innerHTML += html;
        }
      });
    } else {
      matches = [...ele.innerHTML.matchAll(/\${([^{]+[^}])}/g)];
      data.forEach((v, k) => {
        if (!Number.isInteger(k)) {
          let html = matches.reduce((a, c) => {
            let dataVal = c[1].split(".");
            return dataVal[0] == k
              ? a.replaceAll(
                c[0],
                dataVal.length <= 1
                  ? v
                  : dataVal.reduce((acc, curr) => acc[curr] || acc, v),
              )
              : a;
          }, ele.innerHTML);
          ele.innerHTML = html;
        }
      });
    }
  }
  render() {
    if (this.results) {
      let repeatEls = this.shadowRoot.querySelectorAll("[data-repeat]");
      if (repeatEls.length > 0) {
        repeatEls.forEach((el) => {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
          this.renderTemplate(this.results, el);
        });
      }
      this.renderTemplate(this.results, this.shadowRoot);
    }
  }
}
window.customElements.define(CPXQuery.tag, CPXQuery);
