export class CPXBranch extends HTMLElement {
    template;

    _url = '';
    get url() { return this._url; }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute('url',this._url);
        fetch(val).then(resp=>resp.text()).then(data=> {
            this.data = data.replaceAll("}\n{",'}|||{').split("|||").map(c=>JSON.parse(c));
        });
    }

    _data:any;
    get data() { return this._data; }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.render();
    }
    
    // get cssStyles() {
    //     let css = document.createElement('style');
    //     css.type = 'text/css';
    //     let styles = `
    //         :host {
    //             display:block;
    //         }
    //     `;
    //     if (css.styleSheet) css.styleSheet.cssText = styles;
    //     else css.appendChild(document.createTextNode(styles))
    //     return css;
    // }

    constructor(url:string) {
        super();
        this.attachShadow({ mode: "open" });
        this.template = this.querySelector('template').cloneNode(true);

        // this.logState = this.logState.bind(this);
        // this.logMessage = this.logMessage.bind(this);
        // this.logError = this.logError.bind(this);
    }

    connectedCallback() {
        //this.template.innerHTML = this.querySelector('template').innerText;
        // this.shadowRoot.appendChild(this.cssStyles);

        // this.render();
    }

    static get observedAttributes() {
        return ['url']
    }

    attributeChangedCallback(name:string, oldVal, newVal:any) {
        this[name] = newVal;
    }

    render() {
        /*
        data-key = in the scope, place the data[key] in any delimiter
        data-repeat = iterate over the scoped item
        data-group = iterate and group on key
        */
       if(this.data) {
           //console.log(this.data);
        this.template = this.querySelector('template').cloneNode(true);

        // Data Group Replacement
        this.template.content.querySelectorAll('[data-group]').forEach(el => {
            let group = el.getAttribute('[data-group]');
            let groups = this.data.reduce((a,c) => {
                if (!a[c[group]]) {
                    a[c[group]] = [c];
                } else {
                    a[c[group]].push(c);
                } 
            },{});
            el.innerHTML = el.innerHTML;
        });

        // Data Repeat Replacement
        this.template.content.querySelectorAll('[data-repeat]').forEach(el => {
            let attr = el.getAttribute('data-repeat');
            let scope = attr === 'data' ? this.data : this.data[attr];
            let items = el.innerHTML.match(/\${[^{]+[^}]}/g);
            if(items && items.length > 0) {
                let html = el.outerHTML;
                let result = '';
                for(let i=0; i<scope.length; i++) {
                    result = `${result}
                    ${items.reduce((a,c) => {
                        //console.log(`Reduce: ${a},${c},${scope[i][c.replace(/[\$\{\}]/g,'')]}`);
                        return a.replace(c,scope[i][c.replace(/[\$\{\}]/g,'')]);
                    },html)}`;
                }
                el.parentNode.innerHTML = result;
            }
        });

        // Data Key Replacement
        this.template.content.querySelectorAll('[data-key]').forEach(el => {
            el.innerHTML = el.innerHTML.replace(/\${([^{]+[^}])}/g, this.data[el.getAttribute('data-key')]||'');
        });

        while (this.shadowRoot.firstChild) { this.shadowRoot.removeChild(this.shadowRoot.firstChild); }
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        }
    }
}
window.customElements.define('cpx-branch', CPXBranch);
