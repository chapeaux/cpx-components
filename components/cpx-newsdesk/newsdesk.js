var _a;
let evtName = 'cpx-report';
const seed = new Uint32Array(8);
const rng = crypto.getRandomValues(seed).join('');
const src = document.querySelector(`script[src*='${(new URL(import.meta.url)).pathname}']:not([${rng}])`);
if (src instanceof HTMLElement) {
    evtName = (_a = src.getAttribute('data-event')) !== null && _a !== void 0 ? _a : evtName;
    src.setAttribute(rng, '');
}
globalThis.appEventData = globalThis.appEventData || [];
export const Newsdesk = {
    handleEvent(event) {
        const details = event.toJSON();
        globalThis.appEventData.push(details);
        globalThis.dispatchEvent(new CustomEvent('newsflash', {
            composed: true,
            bubbles: true,
            detail: details
        }));
    }
};
globalThis.addEventListener(evtName, Newsdesk);
