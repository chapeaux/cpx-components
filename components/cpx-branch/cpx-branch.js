class CPXBranch1 extends HTMLElement {
    _url = '';
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute('url', this._url);
        fetch(val).then((resp)=>resp.text()
        ).then((data)=>{
            this.data = data.replaceAll("}\n{", '}|||{').split("|||").map((c)=>JSON.parse(c)
            );
        });
    }
    get data() {
        return this._data;
    }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.render();
    }
    constructor(url){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.template = this.querySelector('template').cloneNode(true);
    }
    connectedCallback() {
    }
    static get observedAttributes() {
        return [
            'url'
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    render() {
        if (this.data) {
            this.template = this.querySelector('template').cloneNode(true);
            this.template.content.querySelectorAll('[data-group]').forEach((el)=>{
                let group = el.getAttribute('[data-group]');
                let groups = this.data.reduce((a, c)=>{
                    if (!a[c[group]]) {
                        a[c[group]] = [
                            c
                        ];
                    } else {
                        a[c[group]].push(c);
                    }
                }, {
                });
                el.innerHTML = el.innerHTML;
            });
            this.template.content.querySelectorAll('[data-repeat]').forEach((el)=>{
                let attr = el.getAttribute('data-repeat');
                let scope = attr === 'data' ? this.data : this.data[attr];
                let items = el.innerHTML.match(/\${[^{]+[^}]}/g);
                if (items && items.length > 0) {
                    let html = el.outerHTML;
                    let result = '';
                    for(let i = 0; i < scope.length; i++){
                        result = `${result}\n                    ${items.reduce((a, c)=>{
                            return a.replace(c, scope[i][c.replace(/[\$\{\}]/g, '')]);
                        }, html)}`;
                    }
                    el.parentNode.innerHTML = result;
                }
            });
            this.template.content.querySelectorAll('[data-key]').forEach((el)=>{
                el.innerHTML = el.innerHTML.replace(/\${([^{]+[^}])}/g, this.data[el.getAttribute('data-key')] || '');
            });
            while(this.shadowRoot.firstChild){
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }
            this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        }
    }
}
window.customElements.define('cpx-branch', CPXBranch1);
export { CPXBranch1 as CPXBranch };
