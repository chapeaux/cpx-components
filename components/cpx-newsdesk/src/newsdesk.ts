let evtName = 'cpx-report'
const src = document.querySelector(`script[src='${(new URL(import.meta.url)).pathname}']`);
if (src instanceof HTMLElement) {
    evtName = src.getAttribute('data-event') ?? evtName;
}

globalThis.appEventData = globalThis.appEventData || [];
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
// Test
globalThis.addEventListener(evtName, Newsdesk);