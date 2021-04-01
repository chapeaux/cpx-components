let renderDataKey = (data, context)=>{
    return context.replace(/\${([^{]+[^}])}/g, (m, a)=>{
        return data[a] || '';
    });
};
let renderDataRepeat = (data, key, context)=>{
    let scope = typeof key === 'undefined' || key === 'data' || key === '' ? data : data[key];
    let items = context.innerHTML.match(/\${[^{]+[^}]}/g);
    if (items && items.length > 0) {
        let html = context.outerHTML;
        let result = '';
        for(let i = 0; i < scope.length; i++){
            result += renderDataKey(scope[i], html);
        }
        return result;
    } else {
        return context.outerHTML;
    }
};
class CPXBranch1 extends HTMLElement {
    static get tag() {
        return 'cpx-branch';
    }
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
        if (this.filter !== '' && this.query !== '') {
            return this._data.filter((d)=>d[this.filter] === this.query
            ).sort((a, b)=>{
                let ret = 0;
                let ord = {
                    desc: 1,
                    asc: -1
                };
                if (this.sort !== '') {
                    ret = a[this.sort] == b[this.sort] ? ret : a[this.sort] < b[this.sort] ? ord[this.order] : -ord[this.order];
                } else {
                    ret = a == b ? ret : a < b ? ord[this.order] : -ord[this.order];
                }
                return ret;
            });
        } else {
            return this._data;
        }
    }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.render();
    }
    _filter = '';
    get filter() {
        return this._filter;
    }
    set filter(val) {
        if (this._filter === val) return;
        this._filter = val;
        this.render();
    }
    _query = '';
    get query() {
        return this._query;
    }
    set query(val) {
        if (this._query === val) return;
        this._query = val;
    }
    _sort = '';
    get sort() {
        return this._sort;
    }
    set sort(val) {
        if (this._sort === val) return;
        this._sort = val;
    }
    _order = 'asc';
    get order() {
        return this._order;
    }
    set order(val) {
        if (this._order === val) return;
        this._order = val;
    }
    _group = '';
    get group() {
        return this._group;
    }
    set group(val) {
        if (this._group === val) return;
        this._group = val;
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
            'url',
            'filter',
            'query',
            'sort',
            'order',
            'group'
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    render() {
        if (this.data) {
            this.template = this.querySelector('template').cloneNode(true);
            this.template.content.querySelectorAll('[data-group]').forEach((el)=>{
                let group = el.getAttribute('data-group');
                let groups = this.data.reduce((a, c)=>{
                    if (!a[c[group]]) {
                        a[c[group]] = [
                            c
                        ];
                    } else {
                        a[c[group]].push(c);
                    }
                    return a;
                }, {
                });
                el.innerHTML = el.innerHTML;
            });
            this.template.content.querySelectorAll('[data-repeat]').forEach((el)=>{
                let attr = el.getAttribute('data-repeat');
                el.parentNode.innerHTML = renderDataRepeat(this.data, attr, el);
            });
            this.template.content.innerHTML = renderDataKey(this.data, this.template.innerHTML);
            while(this.shadowRoot.firstChild){
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }
            this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        }
    }
}
window.customElements.define(CPXBranch1.tag, CPXBranch1);
export { CPXBranch1 as CPXBranch };
