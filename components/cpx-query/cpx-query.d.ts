/// <amd-module name="file:///home/ldary/rh/chapeaux/cpx-components/components/cpx-query/src/cpx-query.ts" />
interface QueryFilter {
  name: string;
  key: string;
  facet: string;
  group: string;
  count: string;
  active: boolean;
  value: any;
}
export declare class CPXQuery extends HTMLElement {
  static get tag(): string;
  _template: any;
  get template(): any;
  set template(val: any);
  _auto: boolean;
  _ready: boolean;
  get ready(): boolean;
  set ready(val: boolean);
  _cache: RequestCache;
  _filters: {
    term: string;
    facets: {};
  };
  _activeFilters: Map<string, Set<string>>;
  _limit: number;
  _from: number;
  _sort: string;
  _results: any;
  _term: any;
  _url: any;
  _valid: boolean;
  _mapper: any;
  get auto(): boolean;
  set auto(val: boolean);
  get cache(): RequestCache;
  set cache(val: RequestCache);
  get filters(): {
    term: string;
    facets: {};
  };
  set filters(val: {
    term: string;
    facets: {};
  });
  get activeFilters(): Map<string, Set<string>>;
  set activeFilters(val: Map<string, Set<string>>);
  get from(): number;
  set from(val: number);
  get limit(): number;
  set limit(val: number);
  get sort(): string;
  set sort(val: string);
  get results(): any;
  set results(val: any);
  get term(): any;
  set term(val: any);
  get url(): URL;
  set url(val: URL);
  get valid(): boolean;
  set valid(val: boolean);
  filterString(facets: any): string;
  constructor();
  connectedCallback(): void;
  static get observedAttributes(): string[];
  attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
  _setFilters(item: QueryFilter): void;
  _changeAttr(e: any): void;
  search(): void;
  prepTemplate(): void;
  renderTemplate(data: any, ele?: any): void;
  render(): void;
}
export {};
