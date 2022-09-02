let evtName = 'cpx-report';
const seed = new Uint32Array(8);
const rng = crypto.getRandomValues(seed).join('');
const src = document.querySelector(`script[src*='${(new URL(import.meta.url)).pathname}']:not([${rng}])`);
if (src instanceof HTMLElement) {
    evtName = src.getAttribute('data-event') ?? evtName;
    src.setAttribute(rng,'');
}
globalThis.appEventData = globalThis.appEventData || [];

/**
 * The Newsdesk is an event listener customizable through
 * the data-event attribute of the script tag.
 * 
 * @fires {CustomEvent} newsflash - an event fired for every report received
 * @listens {CustomEvent} cpx-report - a customizable event name to listen for
 */
export const Newsdesk = {
    handleEvent(event) {
        const details = event.toJSON();
        globalThis.appEventData.push(details);
        globalThis.dispatchEvent(new CustomEvent('newsflash',{
            composed: true,
            bubbles: true,
            detail: details
        }));
    }
}

globalThis.addEventListener(evtName, Newsdesk);