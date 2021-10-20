import { compareSemVer } from 'https://cdn.skypack.dev/semver-parser';
class SkipRange {
    constructor(range) {
        Object.defineProperty(this, "min", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "max", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        range.split(' ');
    }
}
class OperatorGraph {
    constructor() {
        Object.defineProperty(this, "active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "inbound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "outbound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "connected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "graph", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        });
    }
}
class CPXOperatorVersion extends HTMLElement {
    constructor(op) {
        super();
        Object.defineProperty(this, "package", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "channel_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "csv_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "latest_in_channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ocp_version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "skips", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "skip_range", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "replaces", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.attachShadow({ mode: "open" });
        Object.assign(this, op);
        if (op.skip_range) {
            this.skip_range = new SkipRange(op.skip_range);
        }
        this.activeListener.bind(this);
    }
    static get tag() { return "cpx-operator-version"; }
    get html() {
        return `<style>
    :host { height: 100px; display: grid;
      grid-template-columns: 8% 12% 25% 25% 30%;
      border-bottom: 1px solid #999;
      padding: 0;align-items:center; }

    #node { fill: transparent; stroke-width:  var(--cpxOGStrokeWidth,3); stroke: var(--cpxOGDisconnectedColor, #d2d2d2); }
    #edges { fill: transparent; stroke-width: var(--cpxOGStrokeWidth,3); stroke: var(--cpxOGConnectedColor,#0266c8); }
    .inbound, .outbound, .active { display: none; }
    :host([active]) #node { stroke: var(--cpxOGActiveColor,#93d434); }
    :host([active]) .active, :host([inbound]) .inbound, :host([outbound]) .outbound { display: block; }
    :host([active]) .active { fill: var(--cpxOGActiveColor, #93d434); }
    :host([connect]) #node { stroke: var(--cpxOGConnectedColor,#0266c8); }

    aside { }
    div label { color: var(--cpxOGConnectedColor, #0266c8); text-align: left;  }
    div input { opacity: 0; width:0; height:0; }
    :host([active]) div label { color: #333; font-weight: normal; }

    main :nth-child(1) {}
    main :nth-child(2) { }

    
    tbody td:nth-child(3) { text-align: right; }
    tbody td:nth-child(4) { padding-left: 24px; }
    tbody td:nth-child(5) {}
    svg { display: block; max-width: 100px; max-height: 100%; }
    </style>
    <aside>${this.latest_in_channel ? '<em>Head</em>' : ''}</aside>
    <div><label tabindex="0" for="${this.escVer}">${this.version}</label><input type="radio" id="${this.escVer}" name="${this.escChannel}" value="${this.version}"></div>
    <aside>
      ${this.replaces && this.replaces.length > 0 ? `Replaces: ${this.replaces.replace(this.package + '.', '')}` : ''}
      ${this.skips && this.skips.length ? `Skips: ${this.skips.join(',')}` : ''}
    </aside>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g id="node">
          <circle cx="20" cy="50" r="10"/>
          <circle class="active" cx="20" cy="50" r="3"/>
          <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
          <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
          <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
      </g>
      <g id="edges"></g>
    </svg>
    <ul>${this.channels.map(ch => `<li>${ch}</li>`)}</ul>`;
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = this.html;
        this.addEventListener('click', _evt => {
            this.active = true;
            console.log('Activate:', this.version);
        });
        globalThis.addEventListener('graph-active', this.activeListener);
    }
    get active() { return this._active; }
    set active(val) {
        if (this._active === val)
            return;
        this._active = val;
        const edges = this.shadowRoot.getElementById('edges');
        if (this._active) {
            this.setAttribute('active', '');
            if (this.replaces) {
                const repLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
                repLine.setAttributeNS(null, 'd', 'M 31 53 C 50 58, 70 60, 70 100');
                edges.appendChild(repLine);
            }
            globalThis.dispatchEvent(new CustomEvent('graph-active', {
                detail: {
                    version: this.version,
                    replaces: this.replaces.replace(`${this.package}.v`, ''),
                    skips: this.skips,
                    skip_min: this.skip_range.min,
                    skip_max: this.skip_range.max
                },
                bubbles: true,
                composed: true
            }));
        }
        else {
            this.removeAttribute('active');
            while (edges.firstChild) {
                edges.removeChild(edges.firstChild);
            }
        }
    }
    activeListener(evt) {
        console.log(evt);
        if (evt.detail && evt.detail.version && evt.detail.version !== this.version) {
            this.active = false;
        }
    }
    get escVer() { return this.version.replaceAll('.', '-'); }
    get escChannel() { return this.channel_name.replaceAll('.', '-'); }
}
class OperatorPackage {
}
class OperatorChannel {
    constructor(name, version) {
        Object.defineProperty(this, "versions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.versions.set(version.version, version);
    }
    getVersions(ord) {
        return [...this.versions.keys()].sort((a, b) => compareSemVer(b, a));
    }
}
class OperatorIndex {
    constructor(version, channel) {
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.version = version;
        this.channels.set(channel.name, channel);
    }
    getAllVersions() {
        const versions = new Map();
        this.channels.forEach(ch => {
            ch.versions.forEach(v => {
                versions.set(v.version, v);
            });
        });
        const orderedVersions = [...versions.keys()]
            .sort((a, b) => compareSemVer(b, a))
            .reduce((a, c) => a.set(c, versions.get(c)), new Map());
        return orderedVersions;
    }
}
class OperatorBundle {
    constructor(data) {
        Object.defineProperty(this, "indices", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        data.map(op => {
            const version = new CPXOperatorVersion(op);
            const channel = new OperatorChannel(op.channel_name, version);
            const index = new OperatorIndex(op.ocp_version, channel);
            if (this.indices.has(index.version)) {
                if (this.indices.get(index.version).channels.has(channel.name)) {
                    if (!this.indices.get(index.version).channels.get(channel.name).versions.has(version.version)) {
                        this.indices.get(index.version).channels.get(channel.name).versions.set(version.version, version);
                    }
                }
                else {
                    this.indices.get(index.version).channels.set(channel.name, channel);
                }
            }
            else {
                this.indices.set(index.version, index);
            }
        });
    }
    getChannelsByIndex(index) { }
    getVersionsByChannel(channel) { }
}
export class CPXOperatorGraph extends HTMLElement {
    constructor(url) {
        super();
        Object.defineProperty(this, "_url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "bundle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "desc"
        });
        Object.defineProperty(this, "_index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_all", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attachShadow({ mode: "open" });
    }
    static get tag() {
        return "cpx-operator-graph";
    }
    static get tmpl() {
        return `<style>
    :host { 
      font-family: var(--cpxOGFontFamily, 'Red Hat Display', sans-serif);
      font-size: var(--cpxOGFontSize, 16px );
    }
    h3 { 
      font-family: var(--cpxOGH3FontFamily, 'Red Hat Display', sans-serif);
      font-weight: medium; 
      font-size: var(--cpxOGH3FontSize, 20px); 
    }

    section { display:grid; grid-template-rows: auto; }
    header, cpx-operator-version { display: grid; grid-template-columns: 8% 12% 25% 25% 30%; border-bottom: 1px solid #999; padding: 0; }
    header { padding-bottom: 20px; }
    header strong:nth-child(1) {  }
    header strong:nth-child(2) { text-align:left; }
    header strong:nth-child(3) {  }
    header strong:nth-child(4) { text-align: left; }
    header strong:nth-child(5) { text-align: left; }

    .toggle { justify-self: end; padding-right: 10em;  font-size: var(--cpxOGToggleFontSize, 16px); }
    .toggle input[type=checkbox] { height: 0; width: 0; opacity: 0; position: absolute; }
    .toggle label {
      cursor: pointer;
      text-indent: 60px;
      font-size: var(--cpxOGToggleFontSize, 16px);
      width: 50px;
      height: 30px;
      background: var(--cpxOGDisconnectedColor, #d2d2d2);
      display: block;
      border-radius: 25px;
      position: relative;
      white-space: nowrap;
      line-height: 30px;
      color: var(--cpxOGDisconnectedColor, #d2d2d2);
    }

    .toggle label:after {
      content: '';
      position: absolute;
      top: 6px;
      left: 7px;
      width: 17px;
      height: 17px;
      background: #fff;
      border-radius: 20px;
      transition: 0.3s;
    }

    .toggle label:focus {
      outline: 8px ridge --var(--cpxOGConnectedColor, #0266c8);
    }

    .toggle input:checked + label {
      background: var(--cpxOGConnectedColor, #0266c8);
      color: #151515;
    }

    .toggle input:checked + label:after  { left: calc(100% - 7px); transform: translateX(-100%); }
    .toggle label:active:after { width: 33px; }
    .options { 
      display: grid; 
      grid-template-columns: 1fr 3fr; 
      margin-bottom: 60px; 
    }
    </style>
    <section>
    <h3>OpenShift Version</h3>
    <div class="options">
      <pfe-select id="ocp_versions"><select></select></pfe-select>
    </div>
    <h3>Channel</h3>
    <div class="options">
      <pfe-select id="channels"><select></select></pfe-select>
      <div class="toggle">
        <input type="checkbox" name="all-channels" value="all" id="all-channels">
        <label for="all-channels">Show all versions</label>
      </div>
    </div>
    </section>
    <section>
      <header>
        <strong></strong>
        <strong>Version</strong>
        <strong></strong>
        <strong>Update Paths</strong>
        <strong>Other Available Channels</strong>
      </header>
      <main></main>
    <section>`;
    }
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val)
            return;
        this._url = val;
        this.setAttribute("url", this._url);
        fetch(val).then((resp) => {
            return resp.json();
        }).then((data) => {
            this.data = data['data'];
        });
    }
    get data() {
        return this._data;
    }
    set data(val) {
        if (this._data === val)
            return;
        this._data = val;
        this.bundle = new OperatorBundle(this._data);
        this.shadowRoot.innerHTML = CPXOperatorGraph.tmpl;
        this.render();
        if (this.bundle.indices.size > 0) {
            const indexSelect = this.shadowRoot.querySelector('#ocp_versions select');
            [...this.bundle.indices.keys()].sort().forEach(index => {
                const opt = document.createElement('option');
                opt.innerHTML = index;
                opt.setAttribute('value', index);
                if (this.index === index) {
                    this.index = index;
                    this.setChannels();
                    opt.setAttribute('selected', 'selected');
                }
                indexSelect.appendChild(opt);
            });
        }
    }
    get order() {
        return this._order;
    }
    set order(val) {
        if (this._order === val)
            return;
        this._order = val;
    }
    get index() {
        return this._index !== "" ? this._index : [...this.bundle.indices.keys()][0];
    }
    set index(val) {
        if (this._index === val)
            return;
        this._index = val;
        this.setAttribute('index', this._index);
        this.setChannels();
        this.render();
    }
    get channel() {
        return this._channel !== "" ? this._channel : [...this.bundle.indices.get(this.index).channels.keys()][0];
    }
    set channel(val) {
        if (this._channel === val)
            return;
        this._channel = val;
        this.setAttribute('channel', this._channel);
        this.render();
    }
    get all() {
        return this._all;
    }
    set all(val) {
        if (this._all === val)
            return;
        this._all = val;
        this.render();
    }
    get body() {
        if (!this._body) {
            this._body = this.shadowRoot.querySelector('main');
        }
        return this._body;
    }
    connectedCallback() {
        this.shadowRoot.addEventListener('pfe-select:change', evt => {
            if (evt.target['id'] === 'ocp_versions') {
                this.index = evt['detail'].value;
            }
            else if (evt.target['id'] === 'channels') {
                this.channel = evt['detail'].value;
            }
        });
        this.shadowRoot.addEventListener('change', evt => {
            if (evt.target['id'] === 'all-channels') {
                this.all = evt.target['checked'] ? true : false;
            }
        });
    }
    static get observedAttributes() {
        return ["url", "order", "channel", "index", "all"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }
    setChannels() {
        this.channel = "";
        if (this.bundle && this.bundle.indices) {
            if (this.bundle.indices.get(this.index).channels.size > 0) {
                const channelSelect = this.shadowRoot.querySelector('#channels select');
                while (channelSelect.firstChild) {
                    channelSelect.removeChild(channelSelect.firstChild);
                }
                [...this.bundle.indices.get(this.index).channels.keys()].sort().forEach(channel => {
                    const opt = document.createElement('option');
                    opt.innerHTML = channel;
                    opt.setAttribute('value', channel);
                    if (this.channel === channel) {
                        this.channel = channel;
                        opt.setAttribute('selected', 'selected');
                    }
                    channelSelect.appendChild(opt);
                });
            }
        }
    }
    render() {
        if (this.bundle && this.bundle.indices) {
            const currIndex = this.bundle.indices.get(this.index);
            const currChannel = this.bundle.indices.get(this.index).channels.get(this.channel);
            if (currIndex && currChannel && currChannel.versions.size > 0) {
                while (this.body.firstChild) {
                    this.body.removeChild(this.body.firstChild);
                }
                if (!this.all) {
                    currChannel.getVersions().map(ver => {
                        const csv = currChannel.versions.get(ver);
                        const escVer = ver.replaceAll('.', '');
                        const escChannel = currChannel.name.replaceAll('.', '');
                        const verChannels = [];
                        currIndex.channels.forEach(ch => {
                            if (ch.name !== csv.channel_name && ch.versions.has(csv.version)) {
                                verChannels.push(ch.name);
                            }
                        });
                        this.body.appendChild(csv);
                    });
                }
                else {
                    currIndex.getAllVersions().forEach(csv => {
                        const escVer = csv.version.replaceAll('.', '-');
                        const verChannels = [];
                        currIndex.channels.forEach(ch => {
                            if (ch.versions.has(csv.version)) {
                                verChannels.push(ch.name);
                            }
                        });
                        this.body.appendChild(csv);
                    });
                }
            }
        }
    }
}
window.customElements.define(CPXOperatorVersion.tag, CPXOperatorVersion);
window.customElements.define(CPXOperatorGraph.tag, CPXOperatorGraph);
document.dispatchEvent(new CustomEvent("cpx-operator-graph-ready", {
    composed: true,
    bubbles: true,
}));
