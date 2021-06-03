class CPXResults extends HTMLElement {
    static tag = 'cpx-results';
    get html() {
        return `\n        <style>\n            :host {\n                display: flex;\n                flex-direction: column;\n            }\n\n            [data-hide] {\n                display: none;\n            }\n\n            h4 { \n                font-size: 27px;\n                font-weight: 600;\n                color: #242424;\n                line-height: 1.5;\n                margin-bottom: 16px;\n                margin-top: 16px;\n            }\n\n            p {\n                font-size: 16px;\n                line-height: 1.5;\n                text-align: center;\n            }\n\n            div.moreBtn {\n                text-align: center;\n            }\n\n            a.moreBtn {\n                background-color: #fff;\n                border: 1px solid #06c;\n                color: #06c;\n                display: block;\n                font-weight: 600;\n                line-height: 1.44;\n                margin: 0 auto;\n                max-width: 165px;\n                padding: 8px 35px;\n                text-transform: uppercase;\n                cursor: pointer;\n                text-decoration: none;\n            }\n            a.moreBtn:hover {\n                background-color: #06c;\n                color: #fff;\n            }\n\n            .loading {\n                background: url(https://developers.redhat.com/images/icons/ajax-loader.gif) center 80px no-repeat;\n                min-height: 250px;\n            }\n        </style>\n        <slot></slot>\n        <div class="loading" data-hide></div>\n        <slot name="moreBtn" data-hide></slot>\n        <slot name="end-of-results" data-hide></slot>\n        <slot name="invalidMsg" data-hide></slot>`;
    }
    _results;
    _resultLayout = `<div><a href="{{url}}">{{description}}</a><div>`;
    _more = false;
    _last = 0;
    _valid = true;
    template;
    get results() {
        return this._results;
    }
    set results(val) {
        if (this._results === val) return;
        this._results = val;
        this._renderResults(false);
    }
    get more() {
        return this._more;
    }
    set more(val) {
        if (this._more === val) return;
        this._more = val;
    }
    get last() {
        return this._last;
    }
    set last(val) {
        if (this._last === val) return;
        this._last = val ? val : 0;
        this.setAttribute('last', val.toString());
    }
    get valid() {
        return this._valid;
    }
    set valid(val) {
        if (this._valid === val) return;
        this._valid = val;
    }
    get resultLayout() {
        return this._resultLayout;
    }
    set resultLayout(val) {
        if (this._resultLayout === val) return;
        this._resultLayout = val;
    }
    render() {
        this.shadowRoot.innerHTML = "";
        this.template.innerHTML = this.html;
        if (window['ShadyCSS']) {
            window['ShadyCSS'].prepareTemplate(this.template, CPXResults.tag);
        }
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    constructor(){
        super();
        this.template = document.createElement("template");
        this.attachShadow({
            mode: "open"
        });
        this._renderResults = this._renderResults.bind(this);
        this._setLoading = this._setLoading.bind(this);
        this._checkValid = this._checkValid.bind(this);
        this._clearResults = this._clearResults.bind(this);
    }
    connectedCallback() {
        if (this.querySelector('template')) {
            this.resultLayout = this.querySelector('template').innerHTML;
        }
        this.render();
        this.shadowRoot.querySelector('[name="moreBtn"]').addEventListener('click', (e)=>{
            e.preventDefault();
            this.more = true;
            let evt = {
                detail: {
                    from: this.last
                },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('load-more', evt));
        });
        top.addEventListener('query-complete', this._renderResults);
        top.addEventListener('query-start', this._setLoading);
        top.addEventListener('params-ready', this._checkValid);
        top.addEventListener('popstate', this._clearResults);
    }
    addResult(result) {
        var item = document.createElement('cpx-result');
        item['result'] = result;
        item['layout'] = this.resultLayout;
        this.appendChild(item);
    }
    _setLoading(e) {
        this.shadowRoot.querySelector('[name="moreBtn"]').setAttribute('data-hide', '');
        this.shadowRoot.querySelector('[name="invalidMsg"]').setAttribute('data-hide', '');
        if (!this.more) {
            this.last = 0;
            while(this.firstChild){
                this.removeChild(this.firstChild);
            }
        } else {
            this.more = false;
        }
        this.shadowRoot.querySelector('[name="loading"]').removeAttribute('data-hide');
    }
    _renderResults(e) {
        if (this.shadowRoot.querySelector('[name="loading"]')) {
            this.shadowRoot.querySelector('[name="loading"]').setAttribute('data-hide', '');
        }
        if (e.detail && typeof e.detail.results !== 'undefined' && typeof e.detail.invalid === 'undefined') {
            this.addResults(e.detail.results);
        } else {
            while(this.firstChild){
                this.removeChild(this.firstChild);
            }
            this.shadowRoot.querySelector('[name="end-of-results"]').setAttribute('data-hide', '');
            this.shadowRoot.querySelector('[name="moreBtn"]').setAttribute('data-hide', '');
            this.shadowRoot.querySelector('[name="invalidMsg"]').removeAttribute('data-hide');
        }
        let evt = {
            detail: {
                results: this.results
            },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('results-loaded', evt));
    }
    _clearResults(e) {
        this.results = undefined;
    }
    _checkValid(e) {
        let obj = e.detail;
        this.valid = Object.keys(obj.filters).length > 0 || obj.term !== null && obj.term !== '' && typeof obj.term !== 'undefined';
        if (!this.valid) {
            this.shadowRoot.querySelector('[name="invalidMsg"]').removeAttribute('data-hide');
        } else {
            if (this.shadowRoot.querySelector('[name="invalidMsg"]')) {
                this.shadowRoot.querySelector('[name="invalidMsg"]').setAttribute('data-hide', '');
            }
        }
    }
    addResults(results) {
        if (results) {
            let l = results.length;
            for(let i = 0; i < l; i++){
                this.addResult(results[i]);
            }
            this.last = this.last + l;
            if (this.last >= results.length) {
                this.shadowRoot.querySelector('[name="end-of-results"]').removeAttribute('data-hide');
            }
            if (l > 0 && this.last < results.length) {
                this.shadowRoot.querySelector('[name="invalidMsg"]').setAttribute('data-hide', '');
                this.shadowRoot.querySelector('[name="end-of-results"]').setAttribute('data-hide', '');
                this.shadowRoot.querySelector('[name="moreBtn"]').removeAttribute('data-hide');
            } else {
                this.shadowRoot.querySelector('[name="moreBtn"]').setAttribute('data-hide', '');
                this.shadowRoot.querySelector('[name="end-of-results"]').removeAttribute('data-hide');
            }
        }
    }
}
export { CPXResults as default };
window.customElements.define('cpx-results', CPXResults);
