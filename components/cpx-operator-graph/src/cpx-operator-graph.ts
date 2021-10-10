import { compareSemVer } from 'https://cdn.skypack.dev/semver-parser';

function versionSelector(strings, csv, versions, all) {
  return ` <tr>
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

class OperatorVersion {}
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
  versions = new Set();
  channels;
  index;
  getVersions() {}
  getChannels() {}
}

// Chapeaux Branch Component: cpx-branch
export class CPXOperatorGraph extends HTMLElement {
  static get tag() {
    return "cpx-operator-graph";
  }

  _template = new HTMLTemplateElement();
  get template() {
    return this._template;
  }
  set template(val) {
    this._template = val;
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

  _data: any;
  get data() {
    return this._data;
  }
  set data(val) {
    if (this._data === val) return;
    this._data = val;
    if (this._data) {
      //   // 
      //   if (!this.versions.has(csv.version)) {
      //     let csvVersion = this.versions.get(csv.version);
      //     if (!csvVersion.has(csv.channelName)) {
      //       this.versions.set(csv.version)
      //     }
      //     this.versions.set(csv.version, csvVersion );
      //   } else {
      //     this.versions.set(csv.version, [csv.channelName])
      //   }
      //   if (this.channels.has(csv.channelName)) {
      //     let channelInfo = this.channels.get(csv.channelName);
      //     channelInfo.push(csv);
      //     this.channels.set(csv.channelName, channelInfo);
      //   } else {
      //     this.channels.set(csv.channelName, [csv]);
      //   }

      this.channels.forEach((versions,channel,d)=> {
        d.set(channel,versions.sort((a, b) => {
          const ord = { desc: 1, asc: -1 };
          return compareSemVer(b['version'], a['version']) * ord[this.order];
        }));
      });
    }
    this.render();
  }

  _filter = "";
  get filter() {
    return this._filter;
  }
  set filter(val) {
    if (this._filter === val) return;
    this._filter = val;
    this.render();
  }

  _query = "";
  get query() {
    return this._query;
  }
  set query(val) {
    if (this._query === val) return;
    this._query = val;
  }

  _sort = "";
  get sort() {
    return this._sort;
  }
  set sort(val) {
    if (this._sort === val) return;
    this._sort = val;
  }

  _order = "asc";
  get order() {
    return this._order;
  }
  set order(val: string) {
    if (this._order === val) return;
    this._order = val;
  }

  _channel = "";
  get channel() {
    return this._channel;
  }
  set channel(val) {
    if (this._channel === val) return;
    this._channel = val;
    this.setAttribute('channel',this._channel);
    this.render();
  }

  _channels = new Map<string,any>();
  get channels() {
    return this._channels;
  }
  set channels(val) {
    if (this._channels === val) return;
    this._channels = val;
  }

  _versions = new Map<string,Set<string>>();
  get versions() {
    return this._versions;
  }
  set versions(val) {
    if (this._versions === val) return;
    this._versions = val;
  }

  constructor(url: string) {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.template = this.querySelector('template') as HTMLTemplateElement;
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.addEventListener('pfe-select:change', evt=>this.channel=evt['detail'].value);
  }

  static get observedAttributes() {
    return ["url", "filter", "query", "sort", "order", "group", "channel"];
  }

  attributeChangedCallback(name: string, oldVal, newVal: any) {
    this[name] = newVal;
  }

  render(all?:boolean) {
    /*
        Template Parsing
        data-key = in the scope, place the data[key] in any delimiter
        data-repeat = iterate over the scoped item
        data-group = iterate and group on key
    */
    
    if (this.channels.size > 0) {
      const channelSelect = this.template.content.querySelector('#channels');
      [...this.channels.keys()].forEach(channel => {
        const opt = document.createElement('option');
        opt.innerHTML = channel;
        opt.setAttribute('value',channel);
        if (this.channel === channel) { opt.setAttribute('selected', 'selected'); }
        channelSelect.appendChild(opt);
      });

      // Set version rows
      // if (!all) {
        const versionsNode = this.template.content.querySelector('[data-repeat="versions"]');
        this.channels.get(this.channel).forEach(csv=>{
          versionsNode.innerHTML += versionSelector`${csv}${this.versions}${all}`;
        });
        const graphImg = versionsNode.querySelector('tr td:nth-child(3)');
        graphImg.id = 'graph';
        graphImg.innerHTML = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="50" r="10" stroke="black" fill="transparent" stroke-width="3"></circle></svg>';
      // }

      while (this.shadowRoot.firstChild) {
        this.shadowRoot.removeChild(this.shadowRoot.firstChild);
      }
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
  }
}
window.customElements.define(CPXOperatorGraph.tag, CPXOperatorGraph);
