"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPXOperatorGraph = void 0;
const semver_parser_1 = require("https://cdn.skypack.dev/semver-parser");
const tmpl = `<style>
:host { font-family: Red Hat Display, sans-serif; }
.node { fill: transparent; stroke-width:  var(--cpxOGStrokeWidth,3); stroke: var(--cpxOGDisconnectedColor, #d2d2d2); }
.edges { fill: transparent; stroke-width: var(--cpxOGStrokeWidth,3); stroke: var(--cpxOGConnectedColor,#0266c8); }
.inbound, .outbound, .active { display: none; }
[active] .node { stroke: var(--cpxOGActiveColor,#93d434); }
[active] .active, [inbound] .inbound, [outbound] .outbound { display: block; }
[active] .active { fill: var(--cpxOGActiveColor, #93d434); }
[connect] .node { stroke: var(--cpxOGConnectedColor,#0266c8); }

table { table-layout: fixed; max-width: 100%; width: 100%; border-collapse: collapse; border-spacing: 0; }
thead th { padding-bottom: 20px; }
thead th:nth-child(1) { width: 8%; }
thead th:nth-child(2) { width: 12%; text-align:left; }
thead th:nth-child(3) { width: 25%; }
thead th:nth-child(4) { width: 25%; text-align: left; }
thead th:nth-child(5) { width: 30%; text-align: left; }
tr { border-bottom: 1px solid #999; }
td { padding: 0; }
tbody td:nth-child(1) {}
tbody th:nth-child(2) { color: var(--cpxOGConnectedColor, #0266c8); text-align: left; }
tbody td:nth-child(3) { text-align: right; }
tbody td:nth-child(4) { padding-left: 24px; }
tbody td:nth-child(5) {}
svg { display: block; max-width: 100px; }

.toggle { line-height: 25px; padding-left: 0; font-size: 16px; position:relative; }
input[type=checkbox] { height: 0; width: 0; visibility: hidden; order: 2; }
label {
  cursor: pointer;
  text-indent: 60px;
  font-size: 20px;
  width: 50px;
  height: 30px;
  background: var(--cpxOGDisconnectedColor, #d2d2d2);
  display: block;
  border-radius: 25px;
  position: absolute;
  right: 8em;
  top: 0;
  white-space: nowrap;
  line-height: 30px;
  color: var(--cpxOGDisconnectedColor, #d2d2d2);
}

label:after {
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

input:checked + label {
  background: var(--cpxOGConnectedColor, #0266c8);
  color: #151515;
}

input:checked + label:after  {
  left: calc(100% - 7px); transform: translateX(-100%); }
label:active:after { width: 33px; }
.options { display: grid; grid-template-columns: 50% 50%; margin-bottom: 60px; }
</style>
<section>
<h3>Channel</h3>
<div class="options">
  <pfe-select><select id="channels"></select></pfe-select>
  <div class="toggle">
    <input type="checkbox" name="all-channels" value="all" id="all-channels">
    <label for="all-channels">Show all versions</label>
  </div>
</div>
<table>
    <caption></caption>
    <thead><tr>
    <th scope="col"></th>
    <th scope="col">Version</th>
    <th scope="col"></th>
    <th scope="col">Update Paths</th>
    <th scope="col">Other Available Channels</th>
    </tr></thead>
    <tbody></tbody>
</table>`;
function versionSelector(strings, csv, versions, all) {
    return `<tr>
  <td>Head</td>
  <th scope="row">
    <input name="${csv.packageName}" type="radio" id="${csv.version}" />
    <label for="${csv.version}">${csv.version}</label>
  </th>
  <td>
  ${csv.replaces ? `Replaces: ${csv.replaces}` : ''}
  ${csv.skips ? `Skips: ${csv.skips}` : ''}
  </td>
  <td><!-- INACTIVE ONLY IN -->
      <svg active inbound viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="node">
              <circle cx="20" cy="50" r="10"/>
              <circle class="active" cx="20" cy="50" r="3"/>
              <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
              <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
              <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
          </g>
          <g class="edges">
              <path d="M 31 53 C 50 58, 80 60, 80 100" />
              <path d="M 31 53 C 50 58, 90 60, 90 100" />
          </g>
      </svg>
  </td>
  <td>beta</td>
</tr>`;
}
function setCurve(edge) {
    const edgeVerticalLength = edge.source().renderedPosition('x') - edge.target().renderedPosition('x');
    const decreaseFactor = -0.1;
    const controlPointDistance = edgeVerticalLength * decreaseFactor;
    const controlPointDistances = [controlPointDistance, -1 * controlPointDistance];
    edge.data('controlPointDistances', controlPointDistances.join(' '));
}
class OperatorVersion {
}
class OperatorPackage {
}
class OperatorChannel {
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
class OperatorBundle {
    constructor() {
        Object.defineProperty(this, "versions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    getVersions() { }
    getChannels() { }
}
class CPXOperatorGraph extends HTMLElement {
    constructor(url) {
        super();
        Object.defineProperty(this, "_url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "desc"
        });
        Object.defineProperty(this, "_channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "_versions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
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
        if (this._data) {
            this._data.map(csv => {
                if (!this.versions.has(csv.version)) {
                    this.versions.set(csv.version, new Set(csv.version));
                }
                else {
                    if (!this.versions.get(csv.version).has(csv.version)) {
                        this.versions.get(csv.version).add(csv.version);
                    }
                }
                if (this.channels.has(csv.channel_name)) {
                    const channelInfo = this.channels.get(csv.channel_name);
                    channelInfo.push(csv);
                    this.channels.set(csv.channel_name, channelInfo);
                }
                else {
                    this.channels.set(csv.channel_name, [csv]);
                }
            });
            this.channels.forEach((versions, channel, d) => {
                d.set(channel, versions.sort((a, b) => {
                    const ord = { desc: 1, asc: -1 };
                    return (0, semver_parser_1.compareSemVer)(b['version'], a['version']) * ord[this.order];
                }));
            });
        }
        this.shadowRoot.innerHTML = tmpl;
        this.render();
        if (this.channels.size > 0) {
            const channelSelect = this.shadowRoot.querySelector('#channels');
            [...this.channels.keys()].forEach(channel => {
                const opt = document.createElement('option');
                opt.innerHTML = channel;
                opt.setAttribute('value', channel);
                if (this.channel === channel) {
                    opt.setAttribute('selected', 'selected');
                }
                channelSelect.appendChild(opt);
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
    get channel() {
        return this._channel !== "" ? this._channel : [...this.channels.keys()][0];
    }
    set channel(val) {
        if (this._channel === val)
            return;
        this._channel = val;
        this.setAttribute('channel', this._channel);
        this.render();
    }
    get channels() {
        return this._channels;
    }
    set channels(val) {
        if (this._channels === val)
            return;
        this._channels = val;
    }
    get versions() {
        return this._versions;
    }
    set versions(val) {
        if (this._versions === val)
            return;
        this._versions = val;
    }
    get body() {
        if (!this._body) {
            this._body = this.shadowRoot.querySelector('tbody');
        }
        return this._body;
    }
    connectedCallback() {
        this.addEventListener('pfe-select:change', evt => this.channel = evt['detail'].value);
    }
    static get observedAttributes() {
        return ["url", "filter", "query", "sort", "order", "group", "channel"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    handleClick(id) {
        return (e) => {
            const active = this.shadowRoot.querySelector('[active]');
            if (active) {
                active.removeAttribute('active');
            }
            this.shadowRoot.getElementById(id).setAttribute('active', '');
        };
    }
    render(all) {
        if (this.channels.size > 0) {
            if (!all) {
                if (this.channels.get(this.channel)) {
                    while (this.body.firstChild) {
                        this.body.removeChild(this.body.firstChild);
                    }
                    this.channels.get(this.channel).forEach(csv => {
                        const row = document.createElement('tr');
                        row.id = csv['_id'];
                        row.onclick = this.handleClick(row.id);
                        row.innerHTML = `<td></td>
            <th scope="row">${csv['version']}</th>
            <td>${csv['replaces'] || ''}</td>
            <td><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g class="node">
                  <circle cx="20" cy="50" r="10"/>
                  <circle class="active" cx="20" cy="50" r="3"/>
                  <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
                  <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
                  <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
              </g>
              <g class="edges"></g>
            </svg></td>
            <td>${csv['channels'] || ''}</td>`;
                        this.body.appendChild(row);
                    });
                }
            }
        }
    }
}
exports.CPXOperatorGraph = CPXOperatorGraph;
window.customElements.define(CPXOperatorGraph.tag, CPXOperatorGraph);
document.dispatchEvent(new CustomEvent("cpx-operator-graph-ready", {
    composed: true,
    bubbles: true,
}));
//# sourceMappingURL=cpx-operator-graph.js.map