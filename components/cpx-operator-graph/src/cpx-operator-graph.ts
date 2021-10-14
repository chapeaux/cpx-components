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
  <pfe-select><select id="ocp_versions"></select></pfe-select>
</div>
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
  ${csv.replaces ? `Replaces: ${csv.replaces}`:''}
  ${csv.skips ? `Skips: ${csv.skips}`:''}
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
  /*
  <tr>
    <td><input name="${csv.packageName}" type="radio" id="${csv.version}" /></td>
    <td><label for="${csv.version}">${csv.version}</label>
      <!--<ul>
        ${csv.replaces ? `<li>Replaces: ${csv.replaces}</li>`:''}
        ${csv.skips ? `<li>Skips: ${csv.skips}</li>`:''}
        <li>Channel: ${csv.channelName}</li>
      </ul>-->
    </td>
    <td></td>
    ${all || true ? `<td>
      <ul>
        <li>${[...versions]}</li>
      </ul>
    </td>`:''}
  </tr>`;
  */
}

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

class OperatorVersion {
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
class OperatorChannel {}
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


class OperatorBundle {
  constructor(data:Array<OperatorVersion>) {
    data.map(op=> {
      this.indices.set(op.ocp_version,[]);
      this.channels.set(op.channel_name, []);
      this.versions.set(op.version,op);
    });
    console.log('Indices:',this.indices);
    console.log('Channels:',this.channels);
    console.log('Versions:',this.versions);
    // this.indices = [...new Set(data.map(c=>c.ocp_version))].sort();
    // this.channels = [...new Set(data.map(c=>c.channel_name))].sort();
    // this.versions = [...new Set(data.map(c=>c.version))].sort(compareSemVer);
  }

  versions:Map<string,OperatorVersion> = new Map();
  channels:Map<string,Array<unknown>> = new Map();
  indices:Map<string,Array<unknown>> = new Map();
  getVersions() {}
  getChannels() {}

  // _indices = new Map<string,Array<unknown>>();
  // get indices() {
  //   return this._indices;
  // }
  // set indices(val) {
  //   if (this._indices === val) return;
  //   this._indices = val;
  // }

  // _channels = new Map<string,Array<unknown>>();
  // get channels() {
  //   return this._channels;
  // }
  // set channels(val) {
  //   if (this._channels === val) return;
  //   this._channels = val;
  // }

  // _versions = new Map<string,Set<string>>();
  // get versions() {
  //   return this._versions;
  // }
  // set versions(val) {
  //   if (this._versions === val) return;
  //   this._versions = val;
  // }


  // this._data.map(csv=>{
      //   if (!this.versions.has(csv.version)) {
      //     this.versions.set(csv.version, new Set(csv.version));
      //   } else {
      //     if(!this.versions.get(csv.version).has(csv.version)) {
      //       this.versions.get(csv.version).add(csv.version);
      //     }
      //   }
      //   if (this.channels.has(csv.channel_name)) {
      //     const channelInfo = this.channels.get(csv.channel_name);
      //     channelInfo.push(csv);
      //     this.channels.set(csv.channel_name, channelInfo);
      //   } else {
      //     this.channels.set(csv.channel_name, [csv]);
      //   }
      //   if (this.indices.has(csv.ocp_version)) {
      //     const indexInfo = this.indices.get(csv.ocp_version);
      //     indexInfo.push(csv);
      //     this.indices.set(csv.ocp_version, indexInfo);
      //   } else {
      //     this.indices.set(csv.ocp_version, [csv]);
      //   }
      // });

      // this.channels.forEach((versions,channel,d)=> {
      //   d.set(channel,versions.sort((a, b) => {
      //     const ord = { desc: 1, asc: -1 };
      //     return compareSemVer(b['version'], a['version']) * ord[this.order];
      //   }));
      // });
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
    if (this._data) {
      /* 
      Top-level is ocp_version
      Every OCPVersion has channels
      Every Channel has Versions
      Versions can be in multiple channels
      */
    }

    this.shadowRoot.innerHTML = tmpl;
    this.render();

    if (this.bundle.indices.size >0 ) {
      const indexSelect = this.shadowRoot.querySelector('#ocp_versions');
      [...this.bundle.indices.keys()].forEach(index => {
        const opt = document.createElement('option');
        opt.innerHTML = index;
        opt.setAttribute('value', index);
        if (this.index === index) { opt.setAttribute('selected','selected'); }
        indexSelect.appendChild(opt);
      })
    }

    if (this.bundle.channels.size > 0) {
      const channelSelect = this.shadowRoot.querySelector('#channels');
      [...this.bundle.channels.keys()].forEach(channel => {
        const opt = document.createElement('option');
        opt.innerHTML = channel;
        opt.setAttribute('value',channel);
        if (this.channel === channel) { opt.setAttribute('selected', 'selected'); }
        channelSelect.appendChild(opt);
      });
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
    return this._index !== "" ? this._index : this.bundle.indices[0];
  }
  set index(val) {
    if (this._index === val) return;
    this._index = val;
    this.setAttribute('index', this._index);
    this.render();
  }

  _channel = "";
  get channel() {
    return this._channel !== "" ? this._channel : this.bundle.channels[0];
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
    this.addEventListener('pfe-select:change', evt=>this.channel=evt['detail'].value);
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

  render(all?:boolean) {
    // this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    if (this.bundle.channels && this.bundle.channels.size > 0) {
      if (!all) {
        if (this.bundle.channels.get(this.channel)) {
          while (this.body.firstChild) {
            this.body.removeChild(this.body.firstChild);
          }
          this.bundle.channels.get(this.channel).forEach(csv=> {
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
    
    // if (this.channels.size > 0) {
    //   const channelSelect = this.template.content.querySelector('#channels');
    //   [...this.channels.keys()].forEach(channel => {
    //     const opt = document.createElement('option');
    //     opt.innerHTML = channel;
    //     opt.setAttribute('value',channel);
    //     if (this.channel === channel) { opt.setAttribute('selected', 'selected'); }
    //     channelSelect.appendChild(opt);
    //   });

    //   // Set version rows
    //   // if (!all) {
    //     const versionsNode = this.template.content.querySelector('[data-repeat="versions"]');
    //     this.channels.get(this.channel).forEach(csv=>{
    //       versionsNode.innerHTML += versionSelector`${csv}${this.versions}${all}`;
    //     });
    //     const graphImg = versionsNode.querySelector('tr td:nth-child(3)');
    //     graphImg.id = 'graph';
    //     graphImg.innerHTML = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="50" r="10" stroke="black" fill="transparent" stroke-width="3"></circle></svg>';
    //   // }

    //   while (this.shadowRoot.firstChild) {
    //     this.shadowRoot.removeChild(this.shadowRoot.firstChild);
    //   }
    //   this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    // }
  }
}

window.customElements.define(CPXOperatorGraph.tag, CPXOperatorGraph);
document.dispatchEvent(new CustomEvent("cpx-operator-graph-ready", {
  composed: true,
  bubbles: true,
}));