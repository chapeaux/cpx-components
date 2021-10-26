class CPXResult extends HTMLElement {
  static tag = "cpx-result";
  get html() {
    return `\n        <style>\n:host {\n    font-family: "Overpass", "Open Sans", Arial, Helvetica, sans-serif;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid #d5d5d5;\n    display: flex;\n    flex-direction: row;\n}\n    .subscription-required {\n        &:before {\n            content: '';\n            background: url('https://static.jboss.org/rhd/images/icons/subscription-required.svg') no-repeat;\n            background-size:cover;\n            position:absolute;\n            margin-top: 5px;\n            width: .9em;\n            height: .9em;\n        }\n        .caps {\n            margin-left: 20px;\n        }\n\n    }\n\n    div:first-child { flex: 1 1 auto; }\n\n    h4 {\n        font-weight: 600;\n        font-style: normal;\n        font-size: 20px;\n        line-height: 1.4;\n        margin: 0;\n        font-family: "Overpass", "Open Sans", Arial, Helvetica, sans-serif;\n    }\n\n    h4 a {\n        color: #06c;\n        cursor: pointer;\n        text-decoration: none;\n    }\n\n    p { margin: 0; \n        color: #424242;\n        font-family: "Overpass", "Open Sans", Arial, Helvetica, sans-serif;\n        }\n    .result-info span{\n        font-size: .9rem;\n        color: $grey-6;\n    }\n\n    .caps {\n        text-transform: uppercase;\n        font-size: 16px;\n        font-weight: normal;\n        line-height: 24px;\n        -webkit-font-smoothing: antialiased;\n    }\n    .result-description {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: 45px;\n        margin-bottom: 25px;\n    }\n    div {\n        flex: 1 1 auto;\n    }\n    div.thumb { \n        flex: 0 0 130px; \n        margin-left: 1em;\n    }\n\n    .thumb img {\n        height: auto;\n        max-width: 100%;\n    }\n\n    .hlt { font-weight: 600; }\n        </style>\n<div>\n    <p ${
      this.premium
        ? 'class="result-info subscription-required" data-tooltip="" title="Subscription Required" data-options="disable-for-touch:true"'
        : 'class="result-info"'
    }>\n        ${
      this.created
        ? `<pfe-datetime datetime="${this.created}" type="local" day="numeric" month="long" year="numeric">${this.created}</pfe-datetime>`
        : ""
    }\n        ${
      this.author ? ` | ${this.author}` : ""
    }\n        <!--<span class="caps">${this.kind}</span>-->\n    </p>\n    <h4>${
      this.url ? `<a href="${this.url}">${this.title}</a>` : this.title
    }</h4>\n    <!--<p class="result-description">${this.description}</p>-->\n</div>\n${
      this.thumbnail
        ? `<div class="thumb"><img src="${
          this.thumbnail.replace("http:", "https:")
        }"></div>`
        : ""
    }`;
  }
  _layout = '<div><a href="{{url}}">{{description}}</a><div>';
  _result;
  _url;
  _title;
  _kind;
  _created;
  _description;
  _premium;
  _thumbnail;
  _author;
  template;
  get layout() {
    return this._layout;
  }
  set layout(val) {
    this._layout = val;
  }
  get url() {
    const stage = window.location.href.indexOf("stage") >= 0 ||
        window.location.href.indexOf("developers") < 0
      ? ".stage"
      : "";
    return !this.premium
      ? this._url
      : `https://broker${stage}.redhat.com/partner/drc/userMapping?redirect=${
        encodeURIComponent(this._url)
      }`;
  }
  set url(val) {
    if (this._url === val) return;
    this._url = val;
  }
  get author() {
    return this._author;
  }
  set author(val) {
    if (this._author === val) return;
    this._author = val;
  }
  get title() {
    return this._title;
  }
  set title(val) {
    if (this._title === val) return;
    this._title = val;
  }
  get kind() {
    return this._kind;
  }
  set kind(val) {
    if (this._kind === val) return;
    this._kind = val;
  }
  get created() {
    return this._created;
  }
  set created(val) {
    if (this._created === val) return;
    this._created = val;
  }
  get description() {
    return this._description;
  }
  set description(val) {
    if (this._description === val) return;
    this._description = val;
  }
  get premium() {
    return this._premium;
  }
  set premium(val) {
    if (this._premium === val) return;
    this._premium = val;
  }
  get thumbnail() {
    return this._thumbnail;
  }
  set thumbnail(val) {
    if (this._thumbnail === val) return;
    this._thumbnail = val;
  }
  get result() {
    return this._result;
  }
  set result(val) {
    if (this._result === val) return;
    this._result = val;
    this.title = this._result.title ? this._result.title : "Default Title";
    this.description = this._result.description
      ? this._result.description
      : "Default Description";
    this.url = this._result.url ? this._result.url : "#";
    this.kind = this._result._type ? this._result._type : "webpage";
    this.author = this._result.author ? this._result.author : undefined;
    this.created = this._result.created ? this._result.created : "Published";
    this.renderResult();
  }
  render() {
    this.shadowRoot.innerHTML = "";
    this.template.innerHTML = this.injectData(this.layout);
    if (window["ShadyCSS"]) {
      window["ShadyCSS"].prepareTemplate(this.template, CPXResult.tag);
    }
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
  constructor() {
    super();
    this.template = document.createElement("template");
    this.attachShadow({
      mode: "open",
    });
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return [
      "result",
    ];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
  renderResult() {
    this.render();
  }
  computeThumbnail(result) {
    if (result.fields.thumbnail) {
      this.thumbnail = result.fields.thumbnail[0];
    }
  }
  injectData(layout) {
    let re = /(\{\{\w+\}\})/gm;
    let br = /[\{\}]+/g;
    let fill = (match, p1, offset, string) => {
      return this[match.replace(br, "")] ? this[match.replace(br, "")] : "";
    };
    return layout.replace(re, fill);
  }
  computeTitle(result) {
    var title = "";
    if (result.highlight && result.highlight.sys_title) {
      title = result.highlight.sys_title[0];
    } else {
      title = result.fields.sys_title[0];
    }
    this.title = title;
  }
  computeKind(result) {
    var kind = result.fields.sys_type || "webpage",
      map = {
        jbossdeveloper_archetype: "Archetype",
        article: "Article",
        blogpost: "Blog Post",
        jbossdeveloper_bom: "Bom",
        book: "Book",
        cheatsheet: "Cheat Sheet",
        demo: "Demo",
        event: "Event",
        forumthread: "Forum Thread",
        jbossdeveloper_example: "Demo",
        quickstart: "Quickstart",
        quickstart_early_access: "Demo",
        solution: "Article",
        stackoverflow_thread: "Stack Overflow",
        video: "Video",
        webpage: "Web Page",
        website: "Web Page",
      };
    this.kind = map[kind] || "Web Page";
  }
  computeCreated(result) {
    this.created =
      result.fields.sys_created && result.fields.sys_created.length > 0
        ? result.fields.sys_created[0]
        : "";
  }
  computeDescription(result) {
    var description = "";
    if (result.highlight && result.highlight.sys_description) {
      description = result.highlight.sys_description[0];
    } else if (result.highlight && result.highlight.sys_content_plaintext) {
      description = result.highlight.sys_content_plaintext[0];
    } else if (result.fields && result.fields.sys_description) {
      description = result.fields.sys_description[0];
    } else {
      description = result.fields.sys_content_plaintext
        ? result.fields.sys_content_plaintext[0]
        : "";
    }
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    description = tempDiv.innerText;
    this.description = description;
  }
  computeURL(result) {
    if (
      result.fields && result.fields.sys_type === "book" &&
      result.fields.field_book_url
    ) {
      this.url = result.fields.field_book_url;
    } else {
      this.url = result.fields && result.fields.sys_url_view
        ? result.fields.sys_url_view
        : "";
    }
  }
  computePremium(result) {
    var premium = false;
    if (
      result._type === "rht_knowledgebase_article" ||
      result._type === "rht_knowledgebase_solution"
    ) {
      premium = true;
    }
    this.premium = premium;
  }
}
export { CPXResult as default };
window.customElements.define("cpx-result", CPXResult);
