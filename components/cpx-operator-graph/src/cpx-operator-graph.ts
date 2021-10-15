import { compareSemVer } from 'https://cdn.skypack.dev/semver-parser';

const tmpl = `<style>
:host { 
  font-family: var(--cpxOGFontFamily, 'Red Hat Display', sans-serif);
  font-size: var(--cpxOGFontSize, 16px );
}
h3 { 
  font-family: var(--cpxOGH3FontFamily, 'Red Hat Display', sans-serif);
  font-weight: medium; 
  font-size: var(--cpxOGH3FontSize, 20px); 
}
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
tbody [active] th:nth-child(2) { color: #333; font-weight: normal; }
tbody td:nth-child(3) { text-align: right; }
tbody td:nth-child(4) { padding-left: 24px; }
tbody td:nth-child(5) {}
svg { display: block; max-width: 100px; }

.toggle { line-height: 25px; padding-left: 0; font-size: var(--cpxOGToggleFontSize, 16px); position:relative; }
input[type=checkbox] { height: 0; width: 0; visibility: hidden; order: 2; }
label {
  cursor: pointer;
  text-indent: 60px;
  font-size: var(--cpxOGToggleFontSize, 16px);
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

input:checked + label:after  { left: calc(100% - 7px); transform: translateX(-100%); }
label:active:after { width: 33px; }
.options { display: grid; grid-template-columns: 50% 50%; margin-bottom: 60px; }
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

/*
Operator Graph

{
    "csvName": "advanced-cluster-management.v2.1.0",
    "packageName": "advanced-cluster-management",
    "channelName": "release-2.1",
    "bundlePath": "registry.redhat.io/rhacm2/acm-operator-bundle@sha256:76435cfe5728bbcacabb1a444ca45df913a7d5a8541b0cc40496cd11d77865db",
    "providedApis": [
      {
        "group": "operator.open-cluster-management.io",
        "version": "v1",
        "kind": "ClusterManager",
        "plural": "cluste'rmanagers"
      }
    ],
    "version": "2.1.0",
    "skipRange": "\u003e=2.0.0 \u003c2.1.0",
    "properties": [
      {
        "type": "olm.gvk",
        "value": "{\"group\":\"app.k8s.io\",\"kind\":\"Application\",\"version\":\"v1beta1\"}"
      }
    ]
  }

*/

function setCurve(edge) {
  const edgeVerticalLength = edge.source().renderedPosition('x') - edge.target().renderedPosition('x');
  const decreaseFactor = -0.1; 
  const controlPointDistance = edgeVerticalLength * decreaseFactor;
  const controlPointDistances = [controlPointDistance, -1 * controlPointDistance];
  edge.data('controlPointDistances', controlPointDistances.join(' '));
}

class SkipRange {
  constructor(range:string) {
    range.split(' ')
  }
  min:string;
  max:string;
}


class OperatorGraph  {
  active = false;
  inbound = false;
  outbound = false;
  connected = false;
  graph = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  /*
  Base Style
  .node {
      fill: transparent;
      stroke-width: 3;
      stroke: #ccc;
  }
  .edges {
      fill: transparent;
      stroke-width: 3;
      stroke: #369;
  }
  .inbound, .outbound, .active { display: none; }
  [active] .node { stroke: #090;}
  [active] .active { display: block; }
  [inbound] .inbound, [outbound] .outbound { display: block; }
  [connect] .node { stroke: #369; }
  
  Base Node Group
  <g id="node">
    <circle cx="20" cy="50" r="10"/>
    <circle class="active" cx="20" cy="50" r="3"/>
    <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
    <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
    <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
  </g>

  Base Edge Group
  <g id="edges">
  */
}

class OperatorVersion {
  constructor(op) {
    Object.assign(this,op);
  }
  channel_name: string;
  csv_name:string;
  latest_in_channel:boolean;
  ocp_version: string;
  version:string;
  skips:Array<string>;
  skip_range: SkipRange;
  replaces:string;
}

class OperatorPackage {}
class OperatorChannel {
  constructor(name:string, version?:OperatorVersion) {
    this.name = name;
    this.versions.set(version.version, version);
  }
  versions: Map<string, OperatorVersion> = new Map();
  name: string;
}
class OperatorIndex {
  constructor(version:string, channel?:OperatorChannel) {
    this.version = version;
    this.channels.set(channel.name,channel);
  }
  channels: Map<string,OperatorChannel> = new Map();
  version: string;
}

class OperatorBundle {
  constructor(data:Array<OperatorVersion>) {
    data.map(op=> {
      const version = new OperatorVersion(op);
      const channel = new OperatorChannel(op.channel_name,version);
      const index = new OperatorIndex(op.ocp_version, channel);
      if (this.indices.has(index.version)) {
        if (this.indices.get(index.version).channels.has(channel.name)) {
          if (!this.indices.get(index.version).channels.get(channel.name).versions.has(version.version)) {
            this.indices.get(index.version).channels.get(channel.name).versions.set(version.version,version);
          }
        } else {
          this.indices.get(index.version).channels.set(channel.name, channel);
        }
      } else {
        this.indices.set(index.version, index);
      }
    });
  }

  indices:Map<string,OperatorIndex> = new Map();
  getChannelsByIndex(index) {}
  getVersionsByChannel(channel) {}

}

// Chapeaux Branch Component: cpx-branch
export class CPXOperatorGraph extends HTMLElement {
  static get tag() {
    return "cpx-operator-graph";
  }

  _url = "";
  get url() {
    return this._url;
  }
  set url(val) {
    if (this._url === val) return;
    this._url = val;
    this.setAttribute("url", this._url);
    fetch(val).then((resp) => {
      return resp.json()
    }).then((data) => {
      this.data = data['data']; // data.replaceAll("}\n{", "}|||{").split("|||").map((c) => JSON.parse(c) );
    });
  }

  bundle: OperatorBundle;
  _data = [];
  get data() {
    return this._data;
  }
  set data(val) {
    if (this._data === val) return;
    this._data = val;
    this.bundle = new OperatorBundle(this._data);
    this.shadowRoot.innerHTML = tmpl;
    this.render();

    if (this.bundle.indices.size >0 ) {
      const indexSelect = this.shadowRoot.querySelector('#ocp_versions select');
      [...this.bundle.indices.keys()].sort().forEach(index => {
        const opt = document.createElement('option');
        opt.innerHTML = index;
        opt.setAttribute('value', index);
        if (this.index === index) { 
          this.index = index;
          this.setChannels();
          opt.setAttribute('selected','selected'); 
        }
        indexSelect.appendChild(opt);
      })
    }
  }

  _order = "desc";
  get order() {
    return this._order;
  }
  set order(val: string) {
    if (this._order === val) return;
    this._order = val;
  }

  _index = "";
  get index() {
    return this._index !== "" ? this._index : [...this.bundle.indices.keys()][0];
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
    return this._channel !== "" ? this._channel : [...this.bundle.indices.get(this.index).channels.keys()][0];
  }
  set channel(val) {
    if (this._channel === val) return;
    this._channel = val;
    this.setAttribute('channel',this._channel);
    this.render();
  }

  
  _body;
  get body() {
    if (!this._body) {
      this._body = this.shadowRoot.querySelector('tbody'); 
    }
    return this._body;
  }

  constructor(url: string) {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    //this.template = this.querySelector('template') as HTMLTemplateElement;
    this.shadowRoot.addEventListener('pfe-select:change', evt=> {
      if (evt.target['id'] === 'ocp_versions') {
        this.index = evt['detail'].value;
      } else if (evt.target['id'] === 'channels') {
        this.channel=evt['detail'].value;
      }
    });
    //this.shadowRoot.addEventListener('click', evt=>console.log(evt.target));
  }

  static get observedAttributes() {
    return ["url", "order", "channel", "index"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    this[attr] = newVal;
  }

  handleClick(id) {
    return (e) => {
      const active = this.shadowRoot.querySelector('[active]');
      if (active) {
        active.removeAttribute('active');
      }
      this.shadowRoot.getElementById(id).setAttribute('active','');
    }
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
          opt.setAttribute('value',channel);
          if (this.channel === channel) { 
            this.channel = channel;
            opt.setAttribute('selected', 'selected'); 
          }
          channelSelect.appendChild(opt);
        });
      }
    }
  }

  render(all?:boolean) {
    // this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    if (this.bundle && this.bundle.indices) {
      const currIndex = this.bundle.indices.get(this.index);
      const currChannel = this.bundle.indices.get(this.index).channels.get(this.channel);
      if (currIndex && currChannel && currChannel.versions.size > 0) {
        if (!all) {
          while (this.body.firstChild) {
            this.body.removeChild(this.body.firstChild);
          }
          currChannel.versions.forEach(csv=> {
            const verChannels = [];
            currIndex.channels.forEach(ch => {
              if (ch.name !== csv.channel_name && ch.versions.has(csv.version)) {
                verChannels.push(ch.name);
              }
            })
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
            <td>${verChannels.join(', ')}</td>`;
            this.body.appendChild(row);
          });
        }
      }
    }
  }
}

window.customElements.define(CPXOperatorGraph.tag, CPXOperatorGraph);
document.dispatchEvent(new CustomEvent("cpx-operator-graph-ready", {
  composed: true,
  bubbles: true,
}));