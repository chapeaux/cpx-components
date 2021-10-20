import { compareSemVer } from 'https://cdn.skypack.dev/semver-parser';

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

/*
  Skips - array of versions skipped
  Skip Range - Minimum and maximum versions ">={#.#.(#|x)} <{#.#.#}"
  Replaces - single hop denoted by string "{package}.v{#.#.#}"
*/
class CPXOperatorVersion extends HTMLElement {
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
      ${this.replaces && this.replaces.length > 0 ? `Replaces: ${this.replaces.replace(this.package+'.','')}` : ''}
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
    <ul>${this.channels.map(ch=>`<li>${ch}</li>`)}</ul>`;
  }

  constructor(op) {
    super();
    this.attachShadow({ mode: "open" });
    Object.assign(this,op);
    if (op.skip_range) {
      this.skip_range = new SkipRange(op.skip_range);
    }
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.html;
    this.addEventListener('click', evt=> {
      this.active = true;
      console.log('Activate:',this.version);
    });
  }

  package: string;
  channel_name: string;
  csv_name:string;
  latest_in_channel:boolean;
  ocp_version: string;
  version:string;
  skips:Array<string> = [];
  skip_range: SkipRange;
  replaces:string;
  channels: Array<string> = [];

  _active = false;
  get active() { return this._active; }
  set active(val) {
    if (this._active === val) return;
    this._active = val;
    const edges = this.shadowRoot.getElementById('edges');
    if (this._active) {
      this.setAttribute('active','');
      const input = this.shadowRoot.querySelector('input');
      input.focus();
      if (this.replaces) {
        const repLine = document.createElementNS('http://www.w3.org/2000/svg',"path");
        repLine.setAttributeNS(null, 'd', 'M 31 53 C 50 58, 70 60, 70 100');
        edges.appendChild(repLine);
      }
    } else {
      this.removeAttribute('active');
      
      while (edges.firstChild) {
        edges.removeChild(edges.firstChild);
      }
    }
  }
  get escVer() { return this.version.replaceAll('.','-'); }
  get escChannel() { return this.channel_name.replaceAll('.','-'); }
}

class OperatorPackage {}
class OperatorChannel {
  constructor(name:string, version?:CPXOperatorVersion) {
    this.name = name;
    this.versions.set(version.version, version);
  }
  versions: Map<string, CPXOperatorVersion> = new Map();
  name: string;
  getVersions(ord?:string) {
    return [...this.versions.keys()].sort((a,b)=>compareSemVer(b,a));
  }
}
class OperatorIndex {
  constructor(version:string, channel?:OperatorChannel) {
    this.version = version;
    this.channels.set(channel.name,channel);
  }
  channels: Map<string,OperatorChannel> = new Map();
  version: string;
  getAllVersions() {
    const versions = new Map<string,CPXOperatorVersion>();
    this.channels.forEach(ch => {
      ch.versions.forEach(v => {
        versions.set(v.version, v);
      });
    });
    const orderedVersions = [...versions.keys()]
      .sort((a,b)=>compareSemVer(b,a))
      .reduce((a,c)=>a.set(c,versions.get(c)), new Map());
    return orderedVersions;
  }
}

class OperatorBundle {
  constructor(data:Array<CPXOperatorVersion>) {
    data.map(op=> {
      const version = new CPXOperatorVersion(op);
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

  static get tmpl() { return `<style>
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
    this.shadowRoot.innerHTML = CPXOperatorGraph.tmpl;
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
    this.shadowRoot.addEventListener('change', evt => {
      if (evt.target['id'] === 'all-channels') {
        this.all = evt.target['checked'] ? true : false
      }
    })
    //this.shadowRoot.addEventListener('click', evt=>console.log(evt.target));
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

  render() {
    // this.shadowRoot.appendChild(this.template.content.cloneNode(true));
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
            const escVer = ver.replaceAll('.','');
            const escChannel = currChannel.name.replaceAll('.','');
            const verChannels = [];
            currIndex.channels.forEach(ch => {
              if (ch.name !== csv.channel_name && ch.versions.has(csv.version)) {
                verChannels.push(ch.name);
              }
            })
            // const row = document.createElement('tr');
            // row.id = csv['_id'];
            // row.onclick = this.handleClick(row.id);
            // if (csv.latest_in_channel && csv.replaces !== null) { row.setAttribute('inbound',''); }
            // if (csv.replaces === null) { row.setAttribute('outbound','')}
            // row.innerHTML = `<td>${csv.latest_in_channel ? '<em>Head</em>' : ''}</td>
            // <th scope="row"><label for="${escVer}">${csv['version']}</label><input type="radio" id="${escVer}" name="${escChannel}" value="${csv['version']}"></th>
            // <td>
            //   ${csv['replaces'] ? `Replaces: ${csv['replaces'].replace(csv.package+'.','')}` : ''}
            //   ${csv.skips && csv.skips.length ? `Skips: ${csv.skips.join(',')}` : ''}
            // </td>
            // <td><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            //   <g class="node">
            //       <circle cx="20" cy="50" r="10"/>
            //       <circle class="active" cx="20" cy="50" r="3"/>
            //       <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
            //       <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
            //       <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
            //   </g>
            //   <g class="edges"></g>
            // </svg></td>
            // <td>${verChannels.join(', ')}</td>`;
            this.body.appendChild(csv);
          });
        } else {
          currIndex.getAllVersions().forEach(csv => {
            const escVer = csv.version.replaceAll('.','-');
            const verChannels = [];
            currIndex.channels.forEach(ch => {
              if (ch.versions.has(csv.version)) {
                verChannels.push(ch.name);
              }
            })
            // const row = document.createElement('cpx-operator-version');
            // row.id = csv['_id'];
            // row.onclick = this.handleClick(row.id);
            // if (csv.latest_in_channel && csv.replaces !== null) { row.setAttribute('inbound',''); }
            // if (csv.replaces === null) { row.setAttribute('outbound','')}
            // row.innerHTML = `<td></td>
            // <th scope="row"><label for="${escVer}">${csv.version}</label><input type="radio" id="${escVer}" name="all-versions" value="${csv.version}"></th>
            // <td>
            //   ${csv.replaces ? `Replaces: ${csv.replaces.replace(csv.package+'.','')}` : ''}
            //   ${csv.skips && csv.skips.length ? `Skips: ${csv.skips.join(',')}` : ''}
            // </td>
            // <td><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            //   <g class="node">
            //       <circle cx="20" cy="50" r="10"/>
            //       <circle class="active" cx="20" cy="50" r="3"/>
            //       <line class="inbound outbound" x1="10" y1="50" x2="30" y2="50"/>
            //       <line class="inbound" x1="5" y1="43" x2="35" y2="43" stroke="white" stroke-width="12"/>
            //       <line class="outbound" x1="5" y1="57" x2="35" y2="57" stroke="white" stroke-width="12"/>
            //   </g>
            //   <g class="edges"></g>
            // </svg></td>
            // <td>${verChannels.join(', ')}</td>`;
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