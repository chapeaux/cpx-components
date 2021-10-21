var B = 8, G = -1;
var f = (e)=>Object.prototype.toString.call(e).slice(B, G)
, i = (e)=>typeof e == "string" || e instanceof String
;
var X = 10, h = "(?:0|[1-9]\\d*)", y = "\\d*[A-z-][A-z\\d-]*", I = `(?:${y}|${h})`, L = `${I}(?:\\.${I})*`, A = `(?:${y}|\\d+)`, O = `${A}(?:\\.${A})*`, M = `(${h}(?:\\.${h}){2})(?:-(${L}))?(?:\\+(${O}))?`, N = new RegExp(`^${h}$`), P = new RegExp(`^v?${M}$`), d = new RegExp(`^${M}$`), u = (e, r = !1)=>{
    if (!i(e)) throw new TypeError(`Expected String but got ${f(e)}.`);
    return (r ? d : P).test(e);
}, l = (e, r = !1)=>{
    if (!i(e)) throw new TypeError(`Expected String but got ${f(e)}.`);
    if (!(r || N.test(e))) throw new Error(`${e} is not a stringified positive integer.`);
    if (N.test(e) && (e = parseInt(e, X), !Number.isSafeInteger(e))) throw new RangeError(`${e} exceeds ${Number.MAX_SAFE_INTEGER}.`);
    return e;
}, _ = (e, r, s = !1)=>{
    if (!i(e)) throw new TypeError(`Expected String but got ${f(e)}.`);
    if (!i(r)) throw new TypeError(`Expected String but got ${f(r)}.`);
    if (!u(e, !!s)) throw new Error(`${e} is not valid version string.`);
    if (!u(r, !!s)) throw new Error(`${r} is not valid version string.`);
    let t;
    if (e === r) t = 0;
    else {
        let m = s ? d : P, [, w, c] = e.match(m), [, S, p] = r.match(m), [$, g, E] = w.split(".").map(l), [a, R, V] = S.split(".").map(l);
        if ($ > a) t = 1;
        else if ($ < a) t = -1;
        else if (g > R) t = 1;
        else if (g < R) t = -1;
        else if (E > V) t = 1;
        else if (E < V) t = -1;
        else if (c === p) t = 0;
        else if (!c && p) t = 1;
        else if (c && !p) t = -1;
        else {
            let b = c.split(".").map((o)=>l(o, !0)
            ), T = p.split(".").map((o)=>l(o, !0)
            ), v = Math.max(b.length, T.length), x = 0;
            for(; x < v;){
                let o = b[x], n = T[x];
                if (o && !n || i(o) && Number.isInteger(n) ? t = 1 : !o && n || Number.isInteger(o) && i(n) ? t = -1 : o !== n && i(o) && i(n) ? t = o.localeCompare(n) : Number.isInteger(o) && Number.isInteger(n) && (o > n ? t = 1 : o < n && (t = -1)), Number.isInteger(t)) break;
                x++;
            }
        }
    }
    return t;
};
class SkipRange {
    constructor(range){
        const rangeArray = range.replace('>=', '').replace('<', '').replace('x', '0').split(' ');
        this.min = rangeArray[0];
        this.max = rangeArray.length > 0 ? rangeArray[1] : '';
    }
    min;
    max;
}
class CPXOperatorVersion extends HTMLElement {
    static get tag() {
        return "cpx-operator-version";
    }
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
    :host([connected]) #node { stroke: var(--cpxOGConnectedColor,#0266c8); }

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
    <ul>${this.channels.map((ch)=>`<li>${ch}</li>`
        )}</ul>`;
    }
    constructor(op){
        super();
        this.attachShadow({
            mode: "open"
        });
        op.replaces = op.replaces ? op.replaces.replace(op.package + '.v', '') : '';
        op.skip_range = op.skip_range ? new SkipRange(op.skip_range) : null;
        Object.assign(this, op);
        this.activeListener = this.activeListener.bind(this);
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = this.html;
        this.addEventListener('click', (_evt)=>{
            this.active = true;
            console.log('Activate:', this.version);
        });
        globalThis.addEventListener('graph-active', this.activeListener);
        if (!this.replaces && !this.skip_range && !this.skips) {
            this.setAttribute('outbound', '');
        }
    }
    package;
    channel_name;
    csv_name;
    latest_in_channel;
    ocp_version;
    version;
    skips = [];
    skip_range;
    replaces;
    channels = [];
    _edges;
    get edges() {
        if (!this._edges) {
            this._edges = this.shadowRoot.getElementById('edges');
        }
        return this._edges;
    }
    _replaced = false;
    get replaced() {
        return this._replaced;
    }
    set replaced(val) {
        if (this._replaced === val) return;
        this._replaced = val;
        if (this._replaced) {
            const repLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
            repLine.setAttributeNS(null, 'd', 'M 31 47 C 50 42, 70 40, 70 0');
            this.edges.appendChild(repLine);
        }
    }
    _connected = false;
    get connected() {
        return this._connected;
    }
    set connected(val) {
        if (this._connected === val) return;
        this._connected = val;
        if (this._connected) {
            this.setAttribute('connected', '');
        } else {
            this.removeAttribute('connected');
        }
    }
    _active = false;
    get active() {
        return this._active;
    }
    set active(val) {
        if (this._active === val) return;
        this._active = val;
        while(this.edges.firstChild){
            this.edges.removeChild(this.edges.firstChild);
        }
        if (this._active) {
            this.setAttribute('active', '');
            if (this.replaces || this.skip_range || this.skips) {
                const repLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
                repLine.setAttributeNS(null, 'd', 'M 31 53 C 50 58, 70 60, 70 100');
                this.edges.appendChild(repLine);
            }
            this.dispatchEvent(new CustomEvent('graph-active', {
                detail: {
                    version: this.version,
                    replaces: this.replaces ? this.replaces.replace(`${this.package}.v`, '') : '',
                    skips: this.skips,
                    skip_min: this.skip_range ? this.skip_range.min : null,
                    skip_max: this.skip_range ? this.skip_range.max : null
                },
                bubbles: true,
                composed: true
            }));
        } else {
            this.removeAttribute('active');
            this.replaced = false;
        }
    }
    activeListener(evt) {
        const detail = evt.detail;
        if (detail) {
            if (detail.version && detail.version !== this.version) {
                while(this.edges.firstChild){
                    this.edges.removeChild(this.edges.firstChild);
                }
                this.active = false;
                this.connected = false;
                if (detail.replaces && detail.replaces === this.version) {
                    const repLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
                    repLine.setAttributeNS(null, 'd', 'M 31 47 C 50 42, 70 40, 70 0');
                    this.edges.appendChild(repLine);
                    this.connected = true;
                }
                if (this.replaces === detail.version) {
                    const overLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
                    overLine.setAttributeNS(null, 'd', 'M 31 53 C 50 58, 70 60, 70 100');
                    this.edges.appendChild(overLine);
                    evt.composedPath()[0].replaced = true;
                    this.connected = true;
                }
                if (detail.skips && detail.skips.indexOf(this.version) >= 0) {
                    const skipLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    skipLine.setAttributeNS(null, 'x1', '70');
                    skipLine.setAttributeNS(null, 'x2', '70');
                    skipLine.setAttributeNS(null, 'y1', '100');
                    skipLine.setAttributeNS(null, 'y2', '0');
                    this.edges.appendChild(skipLine);
                    this.connected = true;
                }
                if (detail.skip_min && _(this.version, detail.skip_min) >= 0 && _(this.version, detail.skip_max) < 0) {
                    if (this.version !== detail.skip_min) {
                        const skipLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        skipLine.setAttributeNS(null, 'x1', '70');
                        skipLine.setAttributeNS(null, 'x2', '70');
                        skipLine.setAttributeNS(null, 'y1', '100');
                        skipLine.setAttributeNS(null, 'y2', '0');
                        this.edges.appendChild(skipLine);
                    }
                    const repLine = document.createElementNS('http://www.w3.org/2000/svg', "path");
                    repLine.setAttributeNS(null, 'd', 'M 31 47 C 50 42, 70 40, 70 0');
                    this.edges.appendChild(repLine);
                    this.connected = true;
                }
            }
        }
    }
    get escVer() {
        return this.version.replaceAll('.', '-');
    }
    get escChannel() {
        return this.channel_name.replaceAll('.', '-');
    }
}
class OperatorChannel {
    constructor(name, version){
        this.name = name;
        this.versions.set(version.version, version);
    }
    versions = new Map();
    name;
    getVersions(ord) {
        return [
            ...this.versions.keys()
        ].sort((a, b)=>_(b, a)
        );
    }
}
class OperatorIndex {
    constructor(version, channel){
        this.version = version;
        this.channels.set(channel.name, channel);
    }
    channels = new Map();
    version;
    getAllVersions() {
        const versions = new Map();
        this.channels.forEach((ch)=>{
            ch.versions.forEach((v)=>{
                versions.set(v.version, v);
            });
        });
        const orderedVersions = [
            ...versions.keys()
        ].sort((a, b)=>_(b, a)
        ).reduce((a, c)=>a.set(c, versions.get(c))
        , new Map());
        return orderedVersions;
    }
}
class OperatorBundle {
    constructor(data){
        data.map((op)=>{
            const version = new CPXOperatorVersion(op);
            const channel = new OperatorChannel(op.channel_name, version);
            const index = new OperatorIndex(op.ocp_version, channel);
            if (this.indices.has(index.version)) {
                if (this.indices.get(index.version).channels.has(channel.name)) {
                    if (!this.indices.get(index.version).channels.get(channel.name).versions.has(version.version)) {
                        this.indices.get(index.version).channels.get(channel.name).versions.set(version.version, version);
                    }
                } else {
                    this.indices.get(index.version).channels.set(channel.name, channel);
                }
            } else {
                this.indices.set(index.version, index);
            }
        });
    }
    indices = new Map();
    getChannelsByIndex(index) {
    }
    getVersionsByChannel(channel) {
    }
}
class CPXOperatorGraph1 extends HTMLElement {
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
    _url = "";
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute("url", this._url);
        fetch(val).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            this.data = data;
        });
    }
    bundle;
    _data = [];
    get data() {
        return this._data;
    }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.bundle = new OperatorBundle(this._data);
        this.shadowRoot.innerHTML = CPXOperatorGraph1.tmpl;
        this.render();
        if (this.bundle.indices.size > 0) {
            const indexSelect = this.shadowRoot.querySelector('#ocp_versions select');
            [
                ...this.bundle.indices.keys()
            ].sort().forEach((index)=>{
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
    _order = "desc";
    get order() {
        return this._order;
    }
    set order(val) {
        if (this._order === val) return;
        this._order = val;
    }
    _index = "";
    get index() {
        return this._index !== "" ? this._index : [
            ...this.bundle.indices.keys()
        ][0];
    }
    set index(val) {
        if (this._index === val) return;
        this._index = val;
        this.setAttribute('index', this._index);
        this.setChannels();
        this.render();
    }
    _channel = "";
    get channel() {
        return this._channel !== "" ? this._channel : [
            ...this.bundle.indices.get(this.index).channels.keys()
        ][0];
    }
    set channel(val) {
        if (this._channel === val) return;
        this._channel = val;
        this.setAttribute('channel', this._channel);
        this.render();
    }
    _all = false;
    get all() {
        return this._all;
    }
    set all(val) {
        if (this._all === val) return;
        this._all = val;
        this.render();
    }
    _body;
    get body() {
        if (!this._body) {
            this._body = this.shadowRoot.querySelector('main');
        }
        return this._body;
    }
    constructor(url){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.shadowRoot.addEventListener('pfe-select:change', (evt)=>{
            if (evt.target['id'] === 'ocp_versions') {
                this.index = evt['detail'].value;
            } else if (evt.target['id'] === 'channels') {
                this.channel = evt['detail'].value;
            }
        });
        this.shadowRoot.addEventListener('change', (evt)=>{
            if (evt.target['id'] === 'all-channels') {
                this.all = evt.target['checked'] ? true : false;
            }
        });
    }
    static get observedAttributes() {
        return [
            "url",
            "order",
            "channel",
            "index",
            "all"
        ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }
    setChannels() {
        this.channel = "";
        if (this.bundle && this.bundle.indices) {
            if (this.bundle.indices.get(this.index).channels.size > 0) {
                const channelSelect = this.shadowRoot.querySelector('#channels select');
                while(channelSelect.firstChild){
                    channelSelect.removeChild(channelSelect.firstChild);
                }
                [
                    ...this.bundle.indices.get(this.index).channels.keys()
                ].sort().forEach((channel)=>{
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
                while(this.body.firstChild){
                    this.body.removeChild(this.body.firstChild);
                }
                if (!this.all) {
                    currChannel.getVersions().map((ver)=>{
                        const csv = currChannel.versions.get(ver);
                        ver.replaceAll('.', '');
                        currChannel.name.replaceAll('.', '');
                        const verChannels = [];
                        currIndex.channels.forEach((ch)=>{
                            if (ch.name !== csv.channel_name && ch.versions.has(csv.version)) {
                                verChannels.push(ch.name);
                            }
                        });
                        this.body.appendChild(csv);
                    });
                } else {
                    currIndex.getAllVersions().forEach((csv)=>{
                        csv.version.replaceAll('.', '-');
                        const verChannels = [];
                        currIndex.channels.forEach((ch)=>{
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
window.customElements.define(CPXOperatorGraph1.tag, CPXOperatorGraph1);
document.dispatchEvent(new CustomEvent("cpx-operator-graph-ready", {
    composed: true,
    bubbles: true
}));
export { CPXOperatorGraph1 as CPXOperatorGraph };
